import type { Project, Category, SortField, SortOrder } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category,
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let filtered = [...projects];

  if (search.trim()) {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(lowerSearch) ||
      p.description.toLowerCase().includes(lowerSearch) ||
      p.tech.some(t => t.toLowerCase().includes(lowerSearch))
    );
  }

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  filtered.sort((a, b) => {
    let comparison = 0;
    if (sortField === "year") {
      comparison = a.year - b.year;
    } else {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return filtered;
}
