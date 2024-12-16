// components/about/team.tsx
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function OurTeam() {
  const team: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "/team/sarah.jpg",
      bio: "Previously engineering lead at GitHub",
    },
    {
      name: "David Kumar",
      role: "CTO & Co-founder",
      image: "/team/david.jpg",
      bio: "10+ years building developer tools",
    },
    {
      name: "Maria Garcia",
      role: "Head of Product",
      image: "/team/maria.jpg",
      bio: "Product veteran from GitLab and Atlassian",
    },
  ];

  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <Avatar className="h-32 w-32">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
