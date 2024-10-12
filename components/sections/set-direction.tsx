"use client";

import { Features } from "@/components/features";
import roadmapImage from "@/public/img/roadmap.webp";
import cardUpdatesImage from "@/public/img/card-updates.webp";
import cardRoadmapsImage from "@/public/img/card-roadmaps.webp";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "@/components/icons/features";

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Set direction
            <br />
            with Roadmaps
          </>
        }
        image={roadmapImage}
        imageSize="large"
        text="Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Multi-team projects.",
            text: "Collaborate across teams and departments.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Project documents.",
            text: "Write project briefs and specs directly in Linear.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom roadmaps.",
            text: "Organize projects across multiple roadmaps.",
          },
          {
            icon: CustomViewsIcon,
            title: "Timeline view.",
            text: "Visualize the product journey ahead.",
          },
          {
            icon: DiscussionIcon,
            title: "Project insights.",
            text: "Track scope, velocity, and progress over time.",
          },
          {
            icon: IssuesIcon,
            title: "Personal notifications.",
            text: "Stay in the loop on project activity and updates.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: cardUpdatesImage,
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Project updates",
            text: "Keep everyone up-to-date on the health and progress of projects.",
          },
          {
            image: cardRoadmapsImage,
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Focus on the big picture",
            text: "Explore every company project in one view to easily identify what needs attention.",
          },
        ]}
      />
    </Features>
  );
};
