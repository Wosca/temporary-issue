"use client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export default function UtilityCard({
  name,
  description,
  icon,
  href,
}: {
  name: string;
  description: string;
  icon: JSX.Element;
  href: string;
}) {
  return (
    <Link prefetch={true} href={href}>
      <Card className="group relative overflow-hidden p-1 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
        <div
          className={
            "absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-500 transition-all duration-500 transform scale-y-0 group-hover:scale-y-100 origin-left"
          }
        ></div>
        <CardContent className="relative  z-10 flex flex-col items-center justify-center gap-4 p-6 h-full rounded bg-background">
          <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
