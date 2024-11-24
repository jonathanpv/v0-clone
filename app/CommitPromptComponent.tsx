import Image from 'next/image';
import { RefreshIcon, ImageIcon, ThumbsUpIcon, ThumbsDownIcon, BubbleIcon } from './icons';

const CommitPropComponent = () => {
    return (
      <div className="flex items-center gap-3 w-full justify-start">
        <div className="flex items-center gap-2 flex-1 max-w-[80%] lg:max-w-md lg:flex-initial">
          <a className="flex-none" href="/jonathanpv">
            <span className="sr-only">Link to jonathanpv's v0.dev Profile</span>
            <Image
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full shrink-0"
              src="/placeholder.svg"
            />
          </a>
          <button className="relative" title="create a feed component like this">
            <div className="inline-flex flex-1 relative py-1 px-3 rounded-2xl bg-muted min-w-0 w-full">
              <span className="text-sm text-left line-clamp-1 text-ellipsis text-muted-foreground">
                create a feed component like this
              </span>
              <BubbleIcon className="absolute fill-muted" width={13} height={14} style={{ left: '-5.5px', bottom: '0.246px' }} />
            </div>
          </button>
          <a data-state="closed" className="flex justify-center items-center gap-1 px-2 py-1 rounded-sm bg-muted cursor-help">
            <ImageIcon width={16} height={16} />

            <span className="text-sm text-muted-foreground">Image</span>
          </a>
        </div>
        <div className="ml-auto lg:ml-0 flex items-center gap-2">
          <button className="items-center whitespace-nowrap shrink-0 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-muted-foreground hover:text-foreground flex md:hidden w-[28px] h-[28px] rounded-full p-0 hover:bg-accent" data-state="closed">
            <RefreshIcon />
            <span className="sr-only">Regenerate</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center" tabIndex="-1" data-state="closed">
              <button className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-muted-foreground hover:text-foreground w-[28px] h-[28px] rounded-full p-0 hover:bg-accent" data-id="toolbar-upvote-button">
                <ThumbsUpIcon />
                <span className="sr-only">Upvote Result</span>
              </button>
            </span>
            <span className="flex items-center justify-center" tabIndex="-1" data-state="closed">
              <button className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-muted-foreground hover:text-foreground w-[28px] h-[28px] rounded-full p-0 hover:bg-accent" data-id="toolbar-downvote-button">
                <span className="sr-only">Downvote Result</span>
                <ThumbsDownIcon />
              </button>
            </span>
          </div>
  
          <div className="bg-muted lg:hidden text-muted-foreground text-xs font-mono px-[6px] h-6 rounded-sm flex items-center justify-center">
            v0
          </div>
        </div>
      </div>
    );
  };
  
  export default CommitPropComponent;