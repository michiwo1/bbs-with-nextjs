import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const BBSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          test
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-post/1"} className="text-bule-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
