// components/about/values.tsx
export function Values() {
  const values = [
    {
      title: "User First",
      description:
        "We believe in Our users first and foremost. We are building a product that is easy to use, easy to understand, and easy to get started with.",
    },
    {
      title: "Collaboration",
      description:
        "Great code comes from great teamwork and open communication.",
    },
    {
      title: "Continuous Learning",
      description: "Every code review is an opportunity to learn and grow.",
    },
    {
      title: "Quality",
      description:
        "We&apos;re committed to maintaining high standards in everything we do.",
    },
    {
      title: "Efficiency",
      description:
        "We believe in automating the mundane to focus on what matters.",
    },
  ];

  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="space-y-3 rounded-lg border p-6">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
