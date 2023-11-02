'use client';
import React, { useEffect } from 'react';
import styles from './myprogram.module.scss';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/hooks';

const MyProgram = () => {
  const numberExercises = useAppSelector((state) => state.program.length);
  console.log(numberExercises);

  return (
    <div>
      <Link href={'/program'}>
        <svg
          className={styles.svgProgram}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '2',
          }}
          version="1.1"
          xmlSpace="preserve"
        >
          <g transform="matrix(1,0,0,1,-427,-8)">
            <g id="Artboard1" transform="matrix(1,0,0,1,420,0)">
              <g transform="matrix(1,0,0,1,4,0)">
                <g transform="matrix(0.981132,0,0,1.06667,0.509434,-1.33333)">
                  <path d="M54.519,21.875C54.519,20.322 53.15,19.063 51.462,19.063L29.038,19.063C27.35,19.063 25.981,20.322 25.981,21.875L25.981,33.125C25.981,34.678 27.35,35.937 29.038,35.937L51.462,35.938C53.15,35.937 54.519,34.678 54.519,33.125L54.519,21.875ZM52.481,21.875L52.481,33.125C52.481,33.643 52.024,34.062 51.462,34.062C51.461,34.063 29.038,34.062 29.038,34.062C28.476,34.062 28.019,33.643 28.019,33.125C28.019,33.125 28.019,21.875 28.019,21.875C28.019,21.357 28.476,20.938 29.038,20.938C29.039,20.938 51.462,20.938 51.462,20.938C52.024,20.938 52.481,21.357 52.481,21.875Z" />
                </g>
                <g transform="matrix(1,0,0,1,-447.124,0)">
                  <path d="M503.124,11L459.124,11C458.572,11 458.124,11.448 458.124,12L458.124,68C458.124,68.552 458.572,69 459.124,69L503.124,69C505.885,69 508.124,66.761 508.124,64L508.124,16C508.124,13.239 505.885,11 503.124,11ZM466.124,13L466.124,67C466.124,67 460.124,67 460.124,67C460.124,67 460.124,13 460.124,13L466.124,13ZM506.124,16L506.124,64C506.124,65.657 504.781,67 503.124,67C503.124,67 468.124,67 468.124,67C468.124,67 468.124,13 468.124,13C468.124,13 503.124,13 503.124,13C504.781,13 506.124,14.343 506.124,16Z" />
                </g>
                <g transform="matrix(1,0,0,1,0,1)">
                  <path d="M31,24L34,24C34.552,24 35,23.552 35,23C35,22.448 34.552,22 34,22L31,22C30.448,22 30,22.448 30,23C30,23.552 30.448,24 31,24Z" />
                </g>
                <g transform="matrix(1,0,0,1,0,1)">
                  <path d="M38,24L49,24C49.552,24 50,23.552 50,23C50,22.448 49.552,22 49,22L38,22C37.448,22 37,22.448 37,23C37,23.552 37.448,24 38,24Z" />
                </g>
                <path d="M31,29L34,29C34.552,29 35,28.552 35,28C35,27.448 34.552,27 34,27L31,27C30.448,27 30,27.448 30,28C30,28.552 30.448,29 31,29Z" />
                <g transform="matrix(1,0,0,1,0,4)">
                  <path d="M31,29L34,29C34.552,29 35,28.552 35,28C35,27.448 34.552,27 34,27L31,27C30.448,27 30,27.448 30,28C30,28.552 30.448,29 31,29Z" />
                </g>
                <path d="M38,29L49,29C49.552,29 50,28.552 50,28C50,27.448 49.552,27 49,27L38,27C37.448,27 37,27.448 37,28C37,28.552 37.448,29 38,29Z" />
                <g transform="matrix(1,0,0,1,0,4)">
                  <path d="M38,29L49,29C49.552,29 50,28.552 50,28C50,27.448 49.552,27 49,27L38,27C37.448,27 37,27.448 37,28C37,28.552 37.448,29 38,29Z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        {numberExercises > 0 && (
          <span className={styles.numberExercises}>{numberExercises}</span>
        )}
      </Link>
    </div>
  );
};

export default MyProgram;
