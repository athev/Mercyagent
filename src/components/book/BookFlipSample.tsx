"use client";

import React, { useRef, useState, forwardRef } from 'react';
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';
const HTMLFlipBookAny = HTMLFlipBook as any;
import Image from 'next/image';

const pages = [
  '/images/book-cover.jpg', 
  '/images/2.jpg',   
  '/images/3.jpg',   
  '/images/4.jpg',   
  '/images/5.jpg',   
  '/images/6.jpg',   
  '/images/7.jpg',   
  '/images/8.jpg',   
  '/images/book-cover.jpg', 
];

// Định nghĩa Page Cover
const PageCover = forwardRef<HTMLDivElement, { children: React.ReactNode; pos: 'top' | 'bottom' }>(
  (props, ref) => {
    return (
      <div className={`page page-cover bg-black`} ref={ref} data-density="hard">
        <div className="page-content w-full h-full p-0 m-0 overflow-hidden relative">
          {props.children}
        </div>
      </div>
    );
  }
);
PageCover.displayName = 'PageCover';

// Định nghĩa Page thường
const Page = forwardRef<HTMLDivElement, { imageUrl: string; number: number }>(
  (props, ref) => {
    return (
      <div className="page bg-white/90 shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] border border-gray-200" ref={ref} data-density="soft">
        <div className="page-content relative w-full h-full p-0 flex flex-col justify-center items-center overflow-hidden">
          {/* Bóng đổ gáy sách */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
          
          <div className="relative w-full h-full">
            <Image 
              src={props.imageUrl} 
              alt={`Page ${props.number}`}
              fill
              className="object-cover md:object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Đánh số trang */}
          <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-400">
            {props.number}
          </div>
        </div>
      </div>
    );
  }
);
Page.displayName = 'Page';

export default function BookFlipSample() {
  const customFlipBookRef = useRef<any>(null);
  const [page, setPage] = useState(0);

  const nextButtonClick = () => {
    if (customFlipBookRef.current) {
      customFlipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (customFlipBookRef.current) {
      customFlipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onPage = (e: any) => {
    setPage(e.data);
  };

  return (
    <section className="py-20 bg-[#F9F8F6] relative z-10 border-t border-gray-200" id="read-sample">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold text-sm tracking-wide mb-4">Đọc Thử Sách</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Lật từng trang tinh hoa</h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">Trải nghiệm tương tác chân thực như đọc sách giấy. Kéo thả ở góc trang để sang trang tiếp theo.</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {/* Flipbook Container */}
          <div className="relative w-full max-w-[800px] flex justify-center bg-transparent">
            <HTMLFlipBookAny
              width={400}
              height={560}
              size="stretch"
              minWidth={300}
              maxWidth={400}
              minHeight={420}
              maxHeight={560}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onPage}
              className="flip-book bg-white"
              ref={customFlipBookRef}
              usePortrait={true}
            >
              {/* Cover Mở */}
              <PageCover pos="top">
                <Image src={pages[0]} alt="Cover" fill className="object-cover" />
              </PageCover>

              {/* Các trang nội dung */}
              <Page number={1} imageUrl={pages[1]} />
              <Page number={2} imageUrl={pages[2]} />
              <Page number={3} imageUrl={pages[3]} />
              <Page number={4} imageUrl={pages[4]} />
              <Page number={5} imageUrl={pages[5]} />
              <Page number={6} imageUrl={pages[6]} />
              <Page number={7} imageUrl={pages[7]} />

              {/* Cover Đóng */}
              <PageCover pos="bottom">
                <Image src={pages[8]} alt="Back Cover" fill className="object-cover" />
              </PageCover>
            </HTMLFlipBookAny>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12 w-full justify-center">
            <button 
              onClick={prevButtonClick}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 text-gray-800 flex items-center justify-center transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div className="text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              Trang {page} / 9
            </div>
            <button 
              onClick={nextButtonClick}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 text-gray-800 flex items-center justify-center transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
