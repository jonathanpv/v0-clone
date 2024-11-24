import { SendIcon } from "./icons"
import { RefineIcon } from "./icons"

export const FloatingPromptInput = () => {
    return (
                <div className="z-40 w-full flex justify-center origin-bottom">
                <div className="flex relative w-full items-center justify-center min-h-12 gap-2 bg-zinc-900 shadow-lg rounded-3xl sm:shadow-black/40 px-2 transition-all duration-300 z-10 max-w-[500px]">
                  {/* Avatar */}
                  <div className="hidden sm:flex items-center justify-center rounded-l-full">
                    <img
                      alt="Avatar"
                      width="32"
                      height="32"
                      className="relative flex rounded-full shrink-0"
                      src="https://vercel.com/api/www/avatar/RTRSbRBZKQAzVxaavee0s5Lg?s=64"
                    />
                  </div>
      
                  {/* Input field */}
                  <div className="relative flex items-center self-end flex-1 w-full min-w-0 pl-2 sm:border-l border-zinc-600">
                    <form className="w-full h-full">
                      <div className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit">
                        <label htmlFor="textarea-input" className="sr-only">
                          Prompt
                        </label>
                        <div className="relative flex flex-1 min-w-0 self-start">
                          {/* Placeholder text */}
                          <textarea
                            id="v0-main-input"
                            maxLength="1000"
                            minLength="2"
                            className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white text-sm bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-2.5 sm:py-3 w-full"
                            placeholder="Make the text larger, or change colors."
                            spellCheck="false"
                            rows="1"
                            style={{
                              colorScheme: "dark",
                              height: "47px !important",
                            }}
                          />
                        </div>
      
                        {/* Send button */}
                        <div className="flex items-center">
                          <button
                            className="whitespace-nowrap shrink-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-gray-800 flex items-center justify-center focus-visible:ring-0 focus-visible:bg-gray-800 rounded-full w-[28px] h-[28px]"
                            type="submit"
                            id="send-button"
                            data-state="closed"
                          >
                            <span className="sr-only">Send</span>
                            <SendIcon></SendIcon>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
      
                  {/* Refine button */}
                  <div className="flex items-center h-full gap-2 pl-2 border-l border-zinc-600">
                    <button
                      id="refine-button"
                      className="w-8 h-8 outline-none rounded-full border focus-visible:ring-zinc-300 focus-visible:ring-1 hover:text-zinc-50 ring-offset-zinc-900 ring-offset-1 flex items-center justify-center text-zinc-300 transition-colors self-center shrink-0 disabled:opacity-50 border-zinc-600 hover:bg-zinc-800"
                      data-state="closed"
                    >
                      <RefineIcon></RefineIcon>
                      <span className="sr-only">Edit</span>
                    </button>
                  </div>
                </div>
              </div>
    )
}