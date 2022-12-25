import React from "react";
import Layout from "ui/Layout";

// sections
import NameSection from "sections/NameSection";
import SkillSection from "sections/SkillSection";

function App() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={componentRef}>
        <div className="container">
          <NameSection ref={componentRef} />

          <SkillSection />

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
