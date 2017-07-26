<h2>Introduction</h2>
<p>An app that helps all Amsterdammers to find the right sunspot to hang out (if there was sun). Live version: <a href="http://suninamsterdam.valerie-fuchs.de">suninamsterdam.valerie-fuchs.de</a></p>

<h2>Build</h2>
<p>This Node.JS app was build with React, using <a href="http://maps.amsterdam.nl/open_geodata/">Amsterdam Open Geo Data</a> about Summerspots on the backend.</p>

<h2>Motivation</h2>
<p>This project being my final project at New York Code and Design Academy, I wanted to build something fun which allows me to learn something new and useful. Due to the high popularity of React I've had it on my learn radar for a while, but our course was very back-end focussed and the thus React wasn't covered by our curriculum. Being very interested in city development and always on discovery mode, I also wanted to make usage of Amsterdam's open data: The idea of a React Sunmachine was born.</p>

<h2>Process</h2>
<p>To get a first grip on React, I went through online-courses at Codeschool and LearnCode on YouTube. A deeper understanding I got after watching (and live-coding) Wes Bro's React Online Tutorial 'React For Beginners'. However, the actual breakthrough happened while working through a Netmag Tutorial created by Pixelass and by reading a lot of Facebook documentation. The Netmag Tutorial introduced a way to create Potentiometers via React, which is what I chose to use for my project.</p>

<h2>Components</h2>
<p>This app consists of three components:</p>
<ul>
	<li>Main App compontent, holding state of slider input values from potentiometer (e.g. Touristfactor '4').</li>
	<li>Results component, which does all the logic to filter results according to slider values and renders result array (e.g. 'Wertheimpark').</li>
	<li>Knob component, holding state regarding Knob SVG styling (radius, steps, size of Knob, actual SVG code). It also holds all logic to receive slider input and transform it into degree rotation for the CSS transform of the Potentiometer Indicator.</li>
</ul>

<p>Overview:</p>

![App Components](public/screenshots/components.png?raw=true "Component Overview")

<h2>Challenges and Learnings</h2>
<ul>
	<li>Not having worked with the JavaScript Version ES6 before, I found it pretty challenging to read React in the first place. It took me some digging and tutorial watching for getting my head around it. Although it might make code easier to write, it gave me less visibility to the architecture of some functions and thus harder to understand.</li>
	<li>Learning to think in components and how to structure the flow of data through your app. <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Facebook's blog post</a> about this helped me a lot.</li>
	<li>Breaking down your work into small chunks is probably a day-to-day skill needed by developers. In this project I experienced how challenging it is to break down tasks for a subject you don't know yet. It is though to estimate the time you need to understand things, and with a hard deadline I had to put on many hours to make it work.</li>
</ul>

<h2>Screenshot</h2>

![Screenshots](public/screenshots/sunmachine.png?raw=true "Landing Page")

<h2>Credits</h2>
<ul>
	<li><a href="https://github.com/pixelass/netmag-React-UI-components">Pixelass and his NetMag Tutorial about UI Components</a></li>
	<li><a href="https://reactforbeginners.com/">Wes Bro's React For Beginners Tutorial</a></li>
</ul>

