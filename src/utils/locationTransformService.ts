import { filtersByCategory } from "../constants/filters-by-category";
import { FiltersCategory } from "../types/filters-category";

interface Place {
  id: number;
  lat: number;
  lon: number;
  opening_hours?: string;
  tags: { [key: string]: string };
}

export class LocationTransformService {
    private isTagExcluded(tagValues: string[], categoryDetails: FiltersCategory) {
      return categoryDetails.exclude.some(rule =>
        tagValues.some(value => rule.values.includes(value)));
    }
  
    private validateTagsWithAnd(tagKeys: string[], tagValues: string[], categoryDetails: FiltersCategory) {
      return categoryDetails.and.some(rule =>
        !tagKeys.includes(rule.field) || 
        (rule.values.length && rule.values.some(value => !tagValues.includes(value)))
      );
    }
  
    private validateTagsWithOr(tagKeys: string[], tagValues: string[], categoryDetails: FiltersCategory) {
      return categoryDetails.or.some(rule =>
        !tagKeys.includes(rule.field) || 
        !rule.values.some(value => tagValues.includes(value))
      );
    }
  
    private belongsToCategory(location: Place, categoryDetails: FiltersCategory): boolean {
      const keys = Object.keys(location.tags);
      const values = Object.values(location.tags);
  
      const isInvalid = this.isTagExcluded(values, categoryDetails) || 
                        this.validateTagsWithAnd(keys, values, categoryDetails) || 
                        this.validateTagsWithOr(keys, values, categoryDetails);
  
      return !isInvalid;
    }
  
    private determineLocationType(location: Place, categoryNames: string[]) {
      for (const category of categoryNames) {
        const categoryDetails = filtersByCategory[category];
        if (!categoryDetails) continue;
        if (this.belongsToCategory(location, categoryDetails))
          return category;
      }
      return 'unknown';
    }
  
    public convertLocationsWithoutDescription(locations: Place[], categoryNames: string[]) {
      return locations
        .filter(loc => !!loc.tags.name)
        .map(loc => ({
          type: this.determineLocationType(loc, categoryNames),
          id: loc.id,
          position: [loc.lat, loc.lon],
          hours: loc.tags?.opening_hours,
          name: loc.tags['name:ru'] ?? loc.tags.name
        }));
    }
  
    public convertLocationsWithDescription(locations: Place[], categoryNames: string[]) {
      return locations
        .filter(loc => !!loc.tags.name)
        .map(loc => ({
          type: this.determineLocationType(loc, categoryNames),
          id: loc.id,
          position: [loc.lat, loc.lon],
          tags: loc.tags
        }));
    }
  }