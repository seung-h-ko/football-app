'use client'

import { Fixture } from "@/types"
import { useEffect, useState } from "react";
import moment from 'moment';

interface PageProps {
    fixture: Fixture
}

export default function LocalTime({
    fixture
}: PageProps) {

    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        function formatToLocalTime(timeUTC: string): string {
            const newTime = moment(timeUTC);
            const localDateString = newTime.format('dddd, LL');
            const localTimeString = newTime.format('LT');
            return `${localDateString} ${localTimeString}`;
        }

        const fixtureTime = fixture.fixture.date;
        const formatted = formatToLocalTime(fixtureTime);
        setFormattedTime(formatted);
    }, []);

    return (
        <div>{formattedTime}</div>
    )
}
