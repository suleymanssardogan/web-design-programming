export type Category = "all" | "frontend" | "fullstack" | "backend";
export type SortField = "year" | "title";
export type SortOrder = "desc" | "asc";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: string;
  featured?: boolean;
}
