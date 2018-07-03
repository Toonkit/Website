# Toontown: Corporate Clash Technical Issues FAQ

Read this before posting about your issue in the `#technology`. The purpose of this document is to provide a central hub for common issues relating to Toontown: Corporate Clash, and how to solve them. To submit a solution, please create a [pull request](https://github.com/Palmidence/Toontown/pulls) by editing the appropriate text with a description of how to fix the issue.

You may submit both questions and issues: for **gameplay-related issues**, please make sure that the issue is reproducable by other users before submitting a solution, and that it isn't too obscure.

## Technical

#### **Q:** What are C++ VS2015 Redistributable Packages? Where do I install Visual Studio Redistributable Packages?
 
>Visual C++ Redistributable Packages install runtime components of Visual C++ Libraries on a computer that does not have Visual C++ installed. The libraries are required to run applications that are developed by using the corresponding version of Visual C++. 

This is required to play Corporate Clash. These packages can be downloaded on [Microsoft's official website](https://www.microsoft.com/en-us/download/details.aspx?id=48145). Scroll down to `Visual Studio 2015` and follow the instructions.

#### **Q:** How do I check the status of Corporate Clash?

When experiencing issues, it's helpful to first [visit the Status page](https://status.corporateclash.net/). This describes if the services are experiencing any outages, or are running as expected. The services it reports on are the Main Game, the Website, and the Login API.

## Launcher

#### **Q:** When I click play in the launcher, it's stuck on "Come back soon!" and nothing launches

**A:** **Nothing here!** Submit a solution by creating a [pull request](https://github.com/Palmidence/Toontown/pulls) and verify your solution works.

#### **Q:** I'm constantly getting `A Fatal Error occurred while downloading  a new version of the launcher. Error Code 1` when I try to launch the game, how do I fix this?

Two instances of the launcher may be running simutaneously, and it cannot update.

To solve this problem on Windows:
- Open `Task Manager`
- End all instances of `Clash Launcher`
- End all instances of `ccbstp`
- If the issue persists, restart your computer.
- If the issue persists, reinstall the game.

To solve this problem on Mac:
_No support is available for this OS yet. Check back soon!_

## Gameplay

#### **Q:** My game is missing some files, how do I fix this?

First, make sure that the version you are playing on is the most up-to-date version: the launcher automatically serves and handles updates. To update your game, you may close and reopen the launcher. If the issue persists, you must uninstall and then reinstall the game. This occurs when components might be missing in your game files, such as textures and models not appearing.
