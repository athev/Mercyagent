"use client";

import VLVideoPlayer from "../../../../components/vibe-learning/elearning/VLVideoPlayer";
import { use } from "react";

export default function VideoPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap the params Promise with React.use()
    const resolvedParams = use(params);
    return <VLVideoPlayer missionId={resolvedParams.id} />;
}
