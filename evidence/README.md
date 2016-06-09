# Requirements Matrix
Through our different phases, our Business Analyst kept track of how we met the different requirements from the ADPQ Vendor Pool Submission Requirements listed in Attachment B of the RFI.

RFI REQ | Item | Details
--- | --- | ---
|General | Product Vision |  Our goal is to seamlessly facilitate the process of fostering children through profile management, access to direct messaging to caseworkers, and locating available service sites. This site will provide a home base where foster parents can conduct all key activities centered on their child.|
|General|Persona| [View here][persona]|
|General|User Journey| [View here][journeymap]|
|General|User Stories| [View here][storyexport]|
|General|Wireframes| [View here][wireframe]|
|General|Visual Compositions| [View here][comp]|
|General|Assets| [View here][assets]|
|General|Code Repository| [View here][coderepository]|
|1|Working Prototype|We delivered a publicly accessible prototype and included the URL to the prototype at the top of the README. md file located in the root directory of our GitHub repository. [View here][coderepository]  [Access Prototype][calicares]|
|1|Technical Approach (< 1000 words) in README. md|Provided as the main GitHub README. md file. [View here][readme]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Understand what people need:** The Deloitte Digital team understands the patterns that people need to navigate sites quickly. We used these to create base designs, then tested them to validate and iterate on the first versions. [View here][wireframeprocess]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Address the whole experience, from start to finish:** Through stakeholder interviews, we deduced the proper starting point of the journey. Through usability testing, we validated that point and each subsequent point along the user’s journey, with regard to experience. [View here][journeyprocess]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Make it simple and intuitive:** Our UX Designer and Visual Designer both worked to keep things streamlined and simple by validating their processes and outputs with users. [View here][usertesting]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Build the service using agile and iterative practices:** We built the app using our EVD for Agile framework (based on open standards Agile Scrum). This consisted of a Discovery phase followed by concurrent Design and Development Sprints. Designs were tested early and often. [View here][agile]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Structure budgets and contracts to support delivery:** This play was deemed not relevant to the prototype itself.|
|2|Demonstrate following of U.S. Digital Services Playbook|**Assign one leader and hold that person accountable:** We assigned one Product Manager and held them accountable. [View here][orgchart]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Bring in experienced teams:** We leveraged experienced team members from across various disciplines. [View here][orgchart]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Choose a modern technology stack:** We chose a modern web and deployment technology stack. [View here][stack]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Deploy in a flexible hosting environment:** We deployed using a cloud hosting provider, Amazon Web Services. [View here][devops]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Automate testing and deployments:** We built a continuous integration pipeline that automated our tests and deployments. [View scripts][scripts] [View DevOps][devops]|
|2|Demonstrate following of U.S. Digital Services Playbook|**Manage security and privacy:** While security and privacy are critical and we have deep understanding, experience, and abilities to meet requirements, the play was deemed not relevant to the prototype itself.|
|2|Demonstrate following of U.S. Digital Services Playbook|**Use data to drive decisions:** When conducting usability testing, we measured how many users were able to correctly identify how to complete a task. This data helped us to identify opportunities for improvement. [View here][usertesting]
|2|Demonstrate following of U.S. Digital Services Playbook|**Default to open:** We started with our existing open source “REX” repository—which already consisted of open source frameworks—then forked it (copied it) and built out the CaliCares prototype. [View here][coderepository]
|2.a.|Assigned One Leader Responsible|We assigned one Product Manager, Brian Blankenship, and gave him authority and responsibility and held him accountable for the quality of the prototype. [View here][orgchart]
|2.b.|Assembled a Multi-Disciplinary Team |We assembled a team consisting of: Product Manager, Agile Coach, Delivery Manager, Business Analyst, Technical Architect, Interaction Designer (2), Visual Designer, Writer, Front End Web Developer, DevOps Engineer, and Quality Assurance. [View here][orgchart]
|2.c.|Included people in the prototype development and  design process|We conducted user interviews and usability tests on wireframes and visual compositions. [View here][usertesting]|
|2.d.|Used at least three Human-Centered Design techniques or tools|We utilized several Human-Centered Design techniques, including Persona Development, Journey Mapping, Design Studio Workshop, and Usability Testing, and others. [View here][process]|
|2.e.|Created or used a design style guide / pattern library|We created a Style Guide, provided in the “Evidence” folder of the code repository. [View here][styleguide]
|2.f.|Performed usability tests with people|We conducted usability tests with user “proxies” from our Studio, outside of the delivery team. Usability test subjects were given the context that they had just been accepted as a foster parent and they had been led to this site. [View here][usertesting]|
|2.g.|Used an iterative approach with feedback informing subsequent work|We integrated feedback into our Backlog, prioritized appropriately, and incorporated as needed into subsequent builds. The prioritization happened both during sprints and during the reviews. Our current Backlog holds feedback items that would be addressed in future sprints, such as further mobile optimization across various devices. [View here][backlog]
|2.h.| Created a prototype that works on multiple devices and presents a responsive design |We leveraged the Bootstrap responsive framework for our development, and designed for various devices ranging from large desktop to mobile. [View here][mobilecomp]
|2.i.|Used at least five modern open-source technologies |We used Angular, Grunt, Karma, Phantom, SASS, Bower, & Bootstrap. [View here][stack]|
|2.j.|Deployed the prototype on an IaaS or PaaS and indicated which provider used|We used Amazon Web Services (AWS) for IaaS. [View here][stack]|
|2.k.|Developed automated unit tests for their code|We embedded our tests in the code repository and executed them with our build process. Unit tests are in various 'spec' files throughout the repository. To see front-end tests,  [View here.][scripts]
|2.l.|Setup or used CI to automate running of tests and deployment|We set up and used CI to automate running of tests and deployments, triggered by approved code merges. [View scripts][scripts] [View DevOps][devops]|
|2.m.|Setup or Used Configuration Management|We used GitHub as our code repository, combined with JIRA, for configuration management. We leveraged pull requests within GitHub to manage code commits, as well as triggered builds and deployments from approved pull requests. [View here][devops]
|2.n.|Setup or Used Continuous Monitoring|We leveraged the Nagios platform for continuous monitoring. GitHub and approved code commits were also used to run as a process to determine whether code should go to production. [View here][devops]
|2.o.|Deployed in a Container|We used Docker as a containerization platform for deployments. [View here][devops]
|2.p.|Provided sufficient documentation to install and run the prototype|We have provided an Install Guide. [View here][install]
|2.q|Prototype and platforms are openly licensed and free|The prototype and its underlying platforms and frameworks are openly licensed and free. We have placed the relevant License copies in the Evidence/Licenses folder in the code repository. [View here][licenses]





[calicares]: <http://calicares.io/>
[readme]: <https://github.com/DeloitteDigitalDC/CaliCares>
[licenses]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/licenses>
   [tips]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-Tips.pdf>
   [install]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/INSTALL.md>
   [process]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/process>
   [matrix]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-Requirements.pdf>
   [orgchart]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-OrgChart.pdf>
   [agile]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-AgileProcess.pdf>
   [api]: <https://chhs.data.ca.gov/Facilities-and-Services/Community-Care-Licensing-Foster-Family-Agency-Loca/v9bn-m9p9>
   [persona]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/ux/persona/CaliCares%20-%20User%20Persona%20v2.pdf>
   [wireframeprocess]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-WireframeProcess.pdf>
   [wireframe]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/ux/wireframes>
   [journeymap]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/ux/user-journey/CaliCares-JourneyMapv4.pdf>
   [journeyprocess]:<https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/process/CaliCares-JourneyMapProcess.pdf>
   [usertesting]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/ux/testing>
   
   [comp]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/design/visual-compositions>
   [mobilecomp]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/design/visual-compositions/mobile/chhs-mobile-nav-design-v1%5B4%5D.pdf>
   [styleguide]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/design/visual-compositions/styleguide/CHHS-Styleguide-V2.pdf>
   [assets]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/design/assets>
   
   [coderepository]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/client>
   [devops]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-DevOps.pdf>
   [stack]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-App.pdf>
   [scripts]: <https://github.com/DeloitteDigitalDC/CaliCares/tree/master/evidence/quality-assurance/scripts>
   [accessibility]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/quality-assurance/accessibility%20testing/CaliCares%20-%20Accessibility%20Testing%20-%20Edit%20General%20Information.png>
   
   [storyexport]:<https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-StoryExport.xlsx>
   [backlog]: <https://github.com/DeloitteDigitalDC/CaliCares/blob/master/evidence/CaliCares-BacklogExport.xlsx>
   