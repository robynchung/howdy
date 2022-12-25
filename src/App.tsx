import React from "react";
import Layout from "ui/Layout";

// sections
import NameSection from "sections/NameSection";

function App() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={componentRef}>
        <div className="container">
          <NameSection ref={componentRef} />

          <Layout
            leftColumns={{ xs: 2 }}
            rightColumns={{ xs: 10 }}
            leftComp={<>Skills</>}
            rightComp={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ul>
                  <li>React / Redux / Recoil </li>
                  <li>React Native </li> <li>Javascript / ES6+ </li>
                  <li>Amazon AWS / DynamoDB </li>
                  <li>Serverless framework </li>
                  <li>Node.js </li>
                  <li>Google Firebase / MySQL </li>
                  <li>Webpack</li>
                </ul>
                <ul>
                  <li>HTML5 /CSS3 / SCSS</li>
                  <li>JQuery/JSON</li>
                  <li>Github / GitLab / Bitbucket / Jira</li>
                  <li>Agile Project Management Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Flash</li>
                </ul>

                <ul>
                  <li>- Work independently - Self-Starter</li>
                  <li>- Hard working</li>
                  <li>- Team oriented</li>
                  <li>- Adapt and learn rapidly evolving tech stack</li>
                </ul>
              </div>
            }
          />

          <div>Work Experience</div>

          <Layout
            leftColumns={{ xs: 2 }}
            rightColumns={{ xs: 10 }}
            leftComp={
              <>
                <div>Front-End Engineer CleanSlate UV</div>
                <div>location range</div>
              </>
            }
            rightComp={
              <ul>
                <li>
                  - Collaborating with IoT engineers to improve hardware and
                  React Native mobile app with Swift and Android WiFi
                  connectivity and syncing data performance via Bluetooth Low
                  Energy (ESP 32)
                </li>
                <li>
                  -
                  ImplementinganenterpriseapplicationusingReact,ReactNative(iOSandAndroid),and
                  AWS for device management, reporting, and sanitizing device
                  analytic data.
                </li>
                <li>
                  -
                  Developingandimplementingfront-endarchitecturetoensuresolutionsaremaintainable,
                  modular, and work well across browsers and devices.
                </li>
                <li>
                  -
                  Creatingwireframes,prototypes,andinterfacesthatmeetclientrequirements.
                </li>
                <li>
                  -
                  CreatinganddesigningreusablegraphicUIcomponentsusingMaterialUIandbuilding
                  navigation components and providing solutions.
                </li>
                <li>
                  -
                  Fetchingalargeamountofdatafromtheback-endusingAPIgatewayRestfulservice
                </li>
                <li>
                  -
                  Deployingawebapp,connectingtoCognitoforauthenticationforclientstovariouscloud
                  environments with the use of modern tools such as AWS Amplify
                </li>
                <li>
                  -
                  BuildingRestAPIusingServerlessFramework,AWSAPIGateway,Lambda,andDyna-
                  moDB
                </li>
                <li>
                  - ManagingTestFlightbuilds,AppStore,andGooglePlayrelease.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
