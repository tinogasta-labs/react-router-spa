import { Icon } from '~/components/ui/icon'

export default function Home() {
  return (
    <div className="grid place-items-center px-4 py-32">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        <h1 className="text-2xl sm:text-3xl">
          React Router SPA Template <Icon name="check" size="font" />
        </h1>
        <a
          className="underline"
          href="https://github.com/tinogasta-labs/react-router-spa"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}
