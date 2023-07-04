'use client'

import { GridLoader } from "react-spinners";

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <GridLoader color="#aa0000" size={30} />
        </div>
    )
}
