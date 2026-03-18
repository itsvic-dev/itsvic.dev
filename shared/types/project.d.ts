type ProjectLink = {
  nameKey: string;
  icon?: "info" | "globe" | "github" | "gplay";
  href: string;
  local: boolean;
};

type Project = {
  name: string;
  icon: string;
  descKey: string;
  languages: string[];
  links: ProjectLink[];
};
