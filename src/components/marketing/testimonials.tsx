import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// components/marketing/testimonials.tsx
export function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold">
          Loved by engineering teams
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="space-y-4 rounded-lg border p-6"
            >
              <p className="text-muted-foreground">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "ReviewFlow has completely transformed how we handle code reviews. Our team's productivity has increased significantly.",
    author: "Sarah Chen",
    role: "Engineering Manager at TechCorp",
    avatar: "/avatars/sarah.jpg",
  },
  // Add more testimonials...
];
