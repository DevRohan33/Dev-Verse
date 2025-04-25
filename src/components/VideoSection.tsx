
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  videoId: string;
  title: string;
  channel: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, channel }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video relative">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{channel}</p>
      </CardContent>
    </Card>
  );
};

const VideoSection: React.FC = () => {
  const featuredVideos = [
    {
      videoId: "qz0aGYrrlhU",
      title: "HTML Tutorial for Beginners: Learn HTML in 1 Hour",
      channel: "Programming with Mosh",
    },
    {
      videoId: "W6NZfCO5SIk",
      title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
      channel: "Programming with Mosh",
    },
    {
      videoId: "SqcY0GlETPk",
      title: "React Tutorial for Beginners",
      channel: "Programming with Mosh",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Learn with Video Tutorials
          </h2>
          <p className="text-muted-foreground">
            Watch hand-picked video tutorials to accelerate your learning journey.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Hundreds more videos available in our learning paths.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
