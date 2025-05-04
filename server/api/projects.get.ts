const projects: Project[] = [
  {
    name: "Parcel",
    icon: "/assets/parcel.png",
    descKey: "projects.parcel.desc",
    languages: ["Jetpack Compose", "Kotlin"],
    links: [
      {
        nameKey: "shared.github",
        icon: "github",
        href: "https://github.com/itsvic-dev/parcel",
        local: false,
      },
      {
        nameKey: "projects.parcel.gplay",
        icon: "gplay",
        href: "https://play.google.com/store/apps/details?id=dev.itsvic.parceltracker",
        local: false,
      },
    ],
  },
  {
    name: "Nova",
    icon: "/assets/nova.png",
    descKey: "projects.nova.desc",
    languages: ["React", "TypeScript", "Laravel", "PHP"],
    links: [
      {
        nameKey: "shared.website",
        icon: "globe",
        href: "https://getnova.zip",
        local: false,
      },
    ],
  },
];

export default defineEventHandler(() => projects);
