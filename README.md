# CaliCares by Deloitte Digital
[Access the prototype.][calicares] (View [tips][tips] to see features of the application)

[Install locally.][install]

[View the video (password: CaliCares)][video] or download [here.][videogit]

[See how we met the requirements.][matrix]

# CHHS Agile Development Pre-Qualified (ADPQ) Vendor Pool – Deloitte Digital’s Technical Approach
At Deloitte Digital, we have a core belief that great design doesn’t just happen. It takes discipline, research, and relentlessly talented and creative minds to make insights into something tangible that we can build, test, and iterate on. 
That said, meet our experienced, multidisciplinary and collaborative [team][orgchart] using nine labor categories identified in the RFI:

- Brian, Product Manager
- Bob, Agile Coach
- Jenna, Delivery Manager/Business Analyst
- Lauren, Technical Architect
- Mike & Steven, Interaction Designers
- Emily, Writer
- Jason, Visual Designer
- Sid, Rohit, Front-end web developers
- Ryan, DevOps Engineer
- Nabeel, QA

We identified and empowered Brian as our Product Manager. He was given authority to make final decisions on concept, UX, design, and functionality.

Going from concept to completion requires a flexible approach that enables ongoing evaluation. For the ADPQ, we developed our prototype using our agile approach that is based on Scrum and the U.S. Digital Services Playbook, which you'll see demonstrated throughout our Technical Approach and our [Requirements Matrix][matrix]. We quickly assembled a small, highly-coordinated, cross-functional team to create working software in [three phases: (1) Discovery, (2) Sprint Cycles, and (3) Release][agile]. All of these phases were met with a commitment to focusing on the user and using open source software and standards.

# 1. Discovery
During the Discovery phase, we learned as much as we could, as fast as we could about the users, their problems, expectations, and pain points. We utilized over 4 human-centered design tools and techniques throughout.

After we reviewed the [CWS API][api], our Interaction designer, Visual Designer, and Business Analyst engaged with user “proxies” and stakeholders with child welfare industry experience. With that background, we began our own separate research data on tasks, needs, goals, tools, and pain points. Using this cross-disciplinary approach, we acquired an understanding of different user perspectives to design the experience as well as a name, CaliCares, to bring it to life.

Based on our discoveries, we created a [persona][persona] to target a distinct user profile for our prototype and to focus our design. We then set up our initial backlog of epics and user stories, and prioritized and estimated them. Finally, we conducted Release Planning, arriving at a plan of three one-day sprints. 

Based on our findings, we had the information necessary to start mapping out initial designs and build the code foundation concurrently. Our Interaction Designer, Architect, Business Analyst, Visual Designer, and Product Manager [sketched out concepts][wireframeprocess] for discussion and iteration. The Interaction Designer led a journey-mapping exercise, resulting in a [user journey map][journeymap] outlining the target users’ end-to-end experience and emotional responses. With this, the team followed into a design ideation exercise with the output of an agreed upon flow and sketched wires. In parallel, our Visual Designer created a design [Style Guide][styleguide]. Meanwhile, our developers spun up the [code repository][client], created the app scaffolding and set up the [continuous integration build pipeline][devops].

# 2. Sprint Cycles: Design, Develop, & Test
We held a Sprint Planning session and were off-and-running. We conducted design sprints for future iterations in parallel with development sprints for already designed features. We held daily Scrums and created new user stories and bugs based on feedback and usability testing. We held Sprint Reviews and Retrospectives and incorporated feedback into the subsequent sprints.

We continued persona-based ideation and created additional wireframes. The wireframes were moved into concept validation and usability testing. Bringing in different users was essential, as they provided fresh perspectives to drive a second iteration. In parallel, our Visual Designer began applying the Style Guide to create visual comps. We performed multiple rounds of usability testing on wireframes and visual compositions. Notes from our usability testing can be seen [here][usertesting].

Agile development means delivering early and often, which our engineers did by using responsive design pattern libraries to build components. Our approach was to get a minimum viable product (MVP) as quickly as possible to test it with users and iterate based on their feedback.

During our sprints the developers constructed unit tests for the user stories and QA executed [functional tests and built automated tests][scripts]. The tests were run as an integral part of our build pipeline. In addition to functional testing, we also performed [accessibility testing][accessibility]. Our entire [application stack][stack] leverages over six free and/or modern, open-source technologies like Angular and Node, and we used containerized deployment techniques to package our application and associated dependencies.

# 3. Release
We deployed CaliCares using our automated build pipeline. This maximized our deployment speed while reducing the risk of environment inconsistencies. The process started with the Jenkins CI server monitoring our configuration management tool, Git, for code changes. Once a code change was detected, it was compiled and tested. Jenkins then built the Docker container and deployed it to our production environment. For this request, we used [Amazon Web Services (AWS)][stack] virtual server instances as our infrastructure as a service.

Just because the app is shipped doesn't mean we're finished. We used the [Nagios][devops] continuous monitoring tool to monitor system status and health (e.g., disk usage, current users, current load, etc.), and the environment is set up to notify us when a key metric moves outside normal operating ranges.
Once we completed the automated unit tests to test our code and the product manager gave final approval, we deployed our product to [URL][calicares] and uploaded our final artifacts to GitHub. We were able to continuously monitor the application to confirm that it was performing as expected.

When we create and deliver a product, it’s more than working hard, each team member is committed to the best possible results. To see what our process looks like in action, make sure to check out the [video][video] (password: CaliCares) we put together of the footage we captured along the way.

   [calicares]: <http://calicares.io/>
   [tips]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-Tips.pdf>
   [install]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/INSTALL.md>
   [client]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/client>
   [video]: <https://vimeo.com/169863877>
   [videogit]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-Video.mp4>
   [matrix]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/README.md>
   [orgchart]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-OrgChart.pdf>
   [agile]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-AgileProcess.pdf>
   [api]: <https://chhs.data.ca.gov/Facilities-and-Services/Community-Care-Licensing-Foster-Family-Agency-Loca/v9bn-m9p9>
   [persona]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/ux/persona/CaliCares%20-%20User%20Persona%20v2.pdf>
   [wireframeprocess]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-WireframeProcess.pdf>
   [wireframe]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/ux/wireframes>
   [journeymap]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/ux/user-journey/CaliCares-JourneyMapv4.pdf>
   [usertesting]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/ux/testing>
   
   [styleguide]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/design/visual-compositions/styleguide/CHHS-Styleguide-V2.pdf>
   [devops]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-DevOps.pdf>
   [stack]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-App.pdf>
   [scripts]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/quality-assurance/scripts>
   [accessibility]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/quality-assurance/accessibility%20testing/CaliCares%20-%20Accessibility%20Testing%20-%20Edit%20General%20Information.png>
   