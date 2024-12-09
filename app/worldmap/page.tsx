"use client";

import Field from "@/components/field";

export default function Worldmap() {
    const field: Array<Array<number>> = Array.from({ length: 27 }, (_, i) => Array.from({ length: 48 }, (_, j) => (i + j) % 2 + 1));

    return (
        <div className="outer-div">
            <Field className="inner-div" field={field} />
        </div>
    );
}
