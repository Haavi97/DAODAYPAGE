import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export function Modal({ speaker, image, visible, onClose }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function close() {
    setOpen(false)
    onClose()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div className="absolute top-0 right-0 pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-slate-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    onClick={() => close()}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex flex-col gap-12 py-12 sm:flex-row">
                  <Image
                    className="h-40 w-40 rounded-2xl"
                    src={image}
                    alt={speaker.name}
                    priority
                  />
                  <div class="max-w-xl flex-auto">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p class="text-base leading-7 text-slate-500">
                      {speaker.role}
                    </p>
                    <div class="mt-6 text-base leading-7 text-gray-500">
                      {speaker.bio && speaker.bio.split(/\n/).map(line => <div key={line}>{line}</div>)}
                    </div>
                    <ul role="list" class="mt-6 flex gap-x-6">
                      {speaker.twitter && (
                        <li>
                          <a
                            href={speaker.twitter}
                            target="_blank"
                            rel="noreferrer noopener"
                            class="text-slate-500 hover:text-slate-900"
                          >
                            <span class="sr-only">Twitter</span>
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      )}
                      {speaker.linkedin && (
                        <li>
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            class="text-slate-500 hover:text-slate-900"
                          >
                            <span class="sr-only">LinkedIn</span>
                            <svg
                              class="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
