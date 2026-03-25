import type { ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};

export function AuthorBlock({ name, children }: Props) {
  return (
    <section className="my-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm ring-1 ring-amber-900/5">
      <h2 className="text-2xl font-extrabold text-slate-900">
        About the Author
      </h2>

      <div className="mt-3 space-y-3 text-slate-700">
        <p>
          My name is <strong>{name}</strong>.
        </p>
        <div className="space-y-3">{children}</div>
      </div>
    </section>
  );
}