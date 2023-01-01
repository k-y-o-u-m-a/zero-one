import React from 'react';
import './logo.css';

function Logo(props) {
    const { width, height, fontSize } = props;
    const style = { fontSize: fontSize }
    return (
        <div className="logo">
            <div className="title-text" style={style}>
                zer
            </div>
            <div className="specs-svg">
                <svg width={width} height={height} viewBox="0 0 484 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg1">
                            <stop offset="5%" stop-color="#00dfd8" />
                            <stop offset="95%" stop-color="#007cf0" />
                        </linearGradient>
                    </defs>
                    <path className="chasma" id='chasma1' fill="url(#bg1)" fill-rule="evenodd" clip-rule="evenodd" d="M473 100C473 149.153 433.153 189 384 189C334.847 189 295 149.153 295 100C295 50.8467 334.847 11 384 11C433.153 11 473 50.8467 473 100ZM484 100C484 155.228 439.228 200 384 200C340.75 200 303.912 172.543 289.968 134.108L289.797 134.282C269.498 114.358 249.911 110.639 233.81 113.389C217.46 116.182 203.99 125.788 196.634 133.822C185.25 176.535 146.299 208 100 208C44.7715 208 0 163.228 0 108C0 52.7715 44.7715 8 100 8C151.853 8 194.489 47.4668 199.506 98H284.02C285.085 43.6947 329.44 0 384 0C439.228 0 484 44.7715 484 100ZM189 108C189 157.153 149.153 197 100 197C50.8467 197 11 157.153 11 108C11 58.8467 50.8467 19 100 19C149.153 19 189 58.8467 189 108Z" />
                </svg>

                <svg width={width} height={height} viewBox="0 0 484 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg2">
                            <stop offset="5%" stop-color="#ff0080" />
                            <stop offset="95%" stop-color="#7928ca" />
                        </linearGradient>
                    </defs>
                    <path className="chasma" id='chasma2' fill="url(#bg2)" fill-rule="evenodd" clip-rule="evenodd" d="M473 100C473 149.153 433.153 189 384 189C334.847 189 295 149.153 295 100C295 50.8467 334.847 11 384 11C433.153 11 473 50.8467 473 100ZM484 100C484 155.228 439.228 200 384 200C340.75 200 303.912 172.543 289.968 134.108L289.797 134.282C269.498 114.358 249.911 110.639 233.81 113.389C217.46 116.182 203.99 125.788 196.634 133.822C185.25 176.535 146.299 208 100 208C44.7715 208 0 163.228 0 108C0 52.7715 44.7715 8 100 8C151.853 8 194.489 47.4668 199.506 98H284.02C285.085 43.6947 329.44 0 384 0C439.228 0 484 44.7715 484 100ZM189 108C189 157.153 149.153 197 100 197C50.8467 197 11 157.153 11 108C11 58.8467 50.8467 19 100 19C149.153 19 189 58.8467 189 108Z" />
                </svg>

                <svg width={width} height={height} viewBox="0 0 484 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg3">
                            <stop offset="5%" stop-color="#f9cb28" />
                            <stop offset="95%" stop-color="#ff4d4d" />
                        </linearGradient>
                    </defs>
                    <path className="chasma" id='chasma3' fill="url(#bg3)" fill-rule="evenodd" clip-rule="evenodd" d="M473 100C473 149.153 433.153 189 384 189C334.847 189 295 149.153 295 100C295 50.8467 334.847 11 384 11C433.153 11 473 50.8467 473 100ZM484 100C484 155.228 439.228 200 384 200C340.75 200 303.912 172.543 289.968 134.108L289.797 134.282C269.498 114.358 249.911 110.639 233.81 113.389C217.46 116.182 203.99 125.788 196.634 133.822C185.25 176.535 146.299 208 100 208C44.7715 208 0 163.228 0 108C0 52.7715 44.7715 8 100 8C151.853 8 194.489 47.4668 199.506 98H284.02C285.085 43.6947 329.44 0 384 0C439.228 0 484 44.7715 484 100ZM189 108C189 157.153 149.153 197 100 197C50.8467 197 11 157.153 11 108C11 58.8467 50.8467 19 100 19C149.153 19 189 58.8467 189 108Z" />
                </svg>
            </div>
            <div className="title-text" style={style}>
                ne
            </div>
        </div>
    );
}

export default Logo;
