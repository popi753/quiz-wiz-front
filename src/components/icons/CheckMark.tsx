export default function CheckMark({ className }: { className: string }) {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.9107 0.457394L5.97734 11.9741L2.81068 8.59073C2.22734 8.04073 1.31068 8.0074 0.64401 8.47406C-0.00599022 8.9574 -0.189324 9.80739 0.210676 10.4907L3.96068 16.5907C4.32734 17.1574 4.96068 17.5074 5.67734 17.5074C6.36068 17.5074 7.01068 17.1574 7.37734 16.5907C7.97734 15.8074 19.4273 2.15739 19.4273 2.15739C20.9273 0.624061 19.1107 -0.725939 17.9107 0.440728V0.457394Z" fill="#12B76A" />
        </svg>
    );
};