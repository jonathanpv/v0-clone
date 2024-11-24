// FeedComponent.js
import { Button } from "@/components/ui/button";
import { StarIcon, ForkIcon, ShareIcon, HistoryIcon, MoreIcon, CodeIcon } from "./icons";

export default function CommitPromptRightSideComponent( {handleCodeToggle} ) {
  return (
    <div className="flex items-center gap-2 w-full lg:w-auto lg:ml-auto">
      <Button variant="outline" className="gap-1.5 text-muted-foreground hover:text-foreground" data-id="toolbar-like-button" data-state="delayed-open" aria-describedby="radix-:rt:">
        <span className="sr-only sm:not-sr-only">Star</span>
        <StarIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="gap-1.5 text-muted-foreground hover:text-foreground" data-id="toolbar-fork-button">
        <span className="sr-only sm:not-sr-only">Fork</span>
        <ForkIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="gap-1.5 text-muted-foreground hover:text-foreground" data-id="toolbar-share-button">
        <span className="sr-only sm:not-sr-only">Share</span>
        <ShareIcon className="w-3.5 h-3.5" />
      </Button>
      <Button variant="outline" className="gap-1.5 lg:hidden text-muted-foreground hover:text-foreground" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ru:" data-state="closed">
        <span className="sr-only sm:not-sr-only">History</span>
        <HistoryIcon className="w-4 h-4" />
      </Button>
      <Button variant="ghost" className="w-8 h-8 p-0 text-muted-foreground hover:text-foreground" data-id="toolbar-more-button" type="button" id="radix-:r11:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
        <span className="sr-only">More</span>
        <MoreIcon className="w-4 h-4" />
      </Button>
      <div className="@container sm:@container-normal flex flex-1">
        <Button variant="primary" onClick={handleCodeToggle} className="ml-auto gap-1.5 @[95px]:w-[95px] sm:w-[95px] bg-primary text-primary-foreground shadow hover:bg-primary/90" data-id="toolbar-toggle-button">
          <span className="hidden @[95px]:inline-block sm:inline-block">Code</span>
          <CodeIcon className="w-4 h-4 shrink-0" />
        </Button>
      </div>
    </div>
  );
}