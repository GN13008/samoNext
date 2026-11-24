"use client";

import { useRouter } from "next/navigation";

export default function NuanceSelect({
  nuances,
  basePath,
  label,
}: {
  nuances: string[];
  basePath: string;
  label: string;
}) {
  const router = useRouter();

  return (
    <select
      aria-label={`Choisir une nuance de ${label}`}
      onChange={(e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
          router.push(`${basePath}/${encodeURIComponent(selectedValue)}`);
        }
      }}
      className="select select-primary w-full max-w-xs"
      defaultValue=""
    >
      <option value="" disabled>
        Nuance de {label}
      </option>
      {nuances.map((nuance) => (
        <option key={nuance} value={nuance}>
          {nuance}
        </option>
      ))}
    </select>
  );
}
