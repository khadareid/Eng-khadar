"use client";

import { ReactNode, useEffect, useState } from "react";

import { Card, CardSkeletonContainer, Skeleton } from "./AnimatedCard";

export function AnimatedTechStack({ children }: { children: ReactNode }) {
  const [render, setShowRender] = useState(false);
  useEffect(function () {
    setShowRender(true);
  }, []);
  if (!render) return null;
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton>{children} </Skeleton>
      </CardSkeletonContainer>
    </Card>
  );
}
