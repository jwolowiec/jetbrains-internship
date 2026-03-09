import React from 'react';
import ReactDOM from 'react-dom';
import '@rescui/typography/lib/font-jb-sans-auto.css';

import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('kotlin', kotlin);

import {ThemeProvider} from '@rescui/ui-contexts';

import {HeaderSection} from './header-section/index.jsx';
import {LatestFromKotlinSection} from './latest-from-kotlin-section/index.jsx';
import {WhyKotlinSection} from './why-kotlin-section/index.jsx';
import {UsageSection} from './usage-section/index.jsx';
import {StartSection} from './start-section/index.jsx';

import '../index/index.scss';
import '../../../css/grid.scss'

function OverviewPageContent() {
    return <div className="overview-page">
        <HeaderSection/>
        <LatestFromKotlinSection/>
        <WhyKotlinSection/>
        <UsageSection/>
        <StartSection/>
    </div>
}

export const OverviewPage = () => (
    <ThemeProvider theme="dark">
        <OverviewPageContent/>
    </ThemeProvider>
)
