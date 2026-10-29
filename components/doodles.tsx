export function Doodle({kind = 'pair', className = ''}: {kind?: 'pair' | 'single'; className?: string}) {
 return <svg className={className} viewBox="0 0 520 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="손으로 그린 두 사람이 대화하는 일러스트"><g stroke="#252525" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
 <path d="M73 267c90-3 214 4 365-1" stroke="#dddcd5"/>
 <path d="M142 164q-19 29-15 58l62 1q3-38-21-59" fill="#F5E39A" stroke="none"/><path d="M145 164q-22 24-20 58l65 2q-2-36-23-60M146 222l-8 41-17 3m50-42 8 39 17 2M132 179l-25 22-15-23m92 3 22 12 19-19"/>
 <path d="M171 112c-6-23-39-22-46 0-10 26 2 51 24 50 27 0 34-29 22-50Z" fill="white"/><path d="m125 111-8-5 7-5-1-8 10 4 4-10 7 7 9-6 2 9 11-2 3 12"/><path d="m140 125 1 2m17-3 1 2m-17 15q9 6 15-2"/>
 {kind === 'pair' && <><path d="M343 165q-18 23-19 56l61 1q-1-34-20-58" fill="#BDD5E6" stroke="none"/><path d="M345 164q-21 26-22 58l65 1q-1-34-22-60m-30 60-8 40-17 2m61-42 7 39 18 3m-67-86-23 14-24-15m94 4 19 21 14-20"/><path d="M376 117c-5-22-34-29-48-11-18 23-9 52 14 56 25 5 43-20 34-45Z" fill="white"/><path d="M325 114q-7-18 12-21 26-10 40 16m-40 15 1 2m18 0 1 2m-17 13q8 6 15-1"/>
 <path d="M277 49q3-13 19-13l98 2q17 0 18 16v37q-1 12-16 12h-53l-19 13 2-14h-31q-18-1-18-14Z" fill="white"/><path d="M302 61h63m-62 17h84" stroke="#b9b8b0"/><path d="m416 126 11-7m-8 24 14 1" stroke="#D0B95E"/></>}
 <path d="M64 46q0-13 16-14l106 1q15 0 16 15v36q-1 12-14 12h-29l-1 16-21-16H79Q63 95 64 80Z" fill="#FFF9DF"/><path d="M85 57h88m-88 17h60" stroke="#b9ad7b"/><path d="m231 125 8-11m-1 28 14-4m-29-23 1-10M54 178l5-10 5 10 11 3-11 4-5 11-4-11-10-4Z" stroke="#C9B25D"/><path d="M442 236q8-14 11-1 2 8-11 15-12-8-10-14 3-9 10 0Z" fill="#DCE9CF" stroke="none"/>
 </g></svg>;
}
export function Logo(){return <span className="brand"><svg width="32" height="30" viewBox="0 0 32 30" fill="none" aria-hidden="true"><path d="M5 5q10-4 21 0l1 14q-4 4-13 2L7 27l1-7q-7-2-3-15Z" fill="#F5E39A" stroke="#252525" strokeWidth="1.7"/><path d="M11 11h.1m8 0h.1m-8 5q4 3 8-1" stroke="#252525" strokeWidth="2" strokeLinecap="round"/></svg>doodle talk<span className="brand-dot">.</span></span>}
