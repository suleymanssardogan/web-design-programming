import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch("/data/projects.json");
    if (!res.ok) {
        throw new Error("Projeler yüklenemedi");
    }
    return await res.json();
  } catch (error) {
     throw new Error("Veri çekilirken bir hata oluştu: " + error);
  }
}
