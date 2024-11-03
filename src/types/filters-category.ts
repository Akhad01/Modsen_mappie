export interface FiltersCategory {
    and: Array<{ field: string; values: string[]}>;
    or: Array<{ field: string; values: string[] }>;
    exclude: Array<{ field: string; values: string[] }> 
}