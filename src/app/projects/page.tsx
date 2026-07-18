import ProjectsSection from "@/components/sections/projects";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <main className={cn("bg-slate-100 dark:bg-transparent min-h-screen")}>
      <ProjectsSection />
    </main>
  );
}
