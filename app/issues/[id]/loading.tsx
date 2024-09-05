import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Card, Heading } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import delay from "delay";

const LoadingIssueDetailsPage = () => {
  return (
    <Box>
      <Skeleton width={"20rem"} />
      <div className="flex space-x-2 my-2">
        <Skeleton width={"5rem"} />
        <Skeleton width={"10rem"} />
      </div>
      <Card mt={"4"} className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
