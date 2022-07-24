import React from "react";

export const FullContent = () => {
  return (
    <section className="flex flex-col gap-2 max-w-2xl md:pt-3 md:h-[calc(100vh-2rem)] md:overflow-y-auto">
      <h1 className="font-heading text-lg font-semibold">Headline</h1>
      <div>
        <img
          src=""
          alt="related to news"
          className="max-w-full h-auto object-cover object-center"
        />
      </div>
      <p className="text-justify">
        News content Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum natus blanditiis distinctio sunt ea ad iusto veniam totam
        aperiam eligendi incidunt et officia quibusdam, facilis mollitia commodi
        ratione labore iste minima eaque enim provident quaerat delectus quidem.
        Molestias accusantium quasi rerum illo alias! Nisi, facilis dolorum.
        Reprehenderit, dolorum quidem. Accusantium!
      </p>
    </section>
  );
};
