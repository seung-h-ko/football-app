import LoadingSpinner from "./components/LoadingSpinner";

export default function loading() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-screen text-white text-4xl">
            <LoadingSpinner />
        </div>
    )
}
