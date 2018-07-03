# Toontown: Corporate Clash Technical Issues FAQ

Read this before posting about your issue in the `#technology`. The purpose of this document is to provide a central hub for common issues relating to Toontown: Corporate Clash, and how to solve them. To submit a solution, please create a [pull request](https://github.com/Palmidence/Toontown/pulls) by editing the appropriate text with a description of how to fix the issue.

You may submit both questions and issues: for **gameplay-related issues**, please make sure that the issue is reproducable by other users before submitting a solution, and that it isn't too obscure.

>**Credits:** Vice#4812, Bin#7773

## Technical

#### **Q:** What are C++ VS2015 Redistributable Packages? Where do I install Visual Studio Redistributable Packages? How do I fix `MVSCP140.DLL / RUNTIME.DLL were not found`?
 
>Visual C++ Redistributable Packages install runtime components of Visual C++ Libraries on a computer that does not have Visual C++ installed. The libraries are required to run applications that are developed by using the corresponding version of Visual C++.

This is required to play Corporate Clash. These packages can be downloaded on [Microsoft's official website](https://www.microsoft.com/en-us/download/details.aspx?id=48145). Scroll down to `Visual Studio 2015` and follow the instructions. Both `.DLL` files are a part of the VS2015 Redistributable packages, and errors will be thrown if they either do not function, or do not exist.

#### **Q:** How do I check the status of Corporate Clash?

When experiencing issues, it's helpful to first [visit the Status page](https://status.corporateclash.net/). This describes if the services are experiencing any outages, or are running as expected. The services it reports on are the Main Game, the Website, and the Login API.

#### **Q:** I tried to reinstall Corporate Clash and it isn't working, how do I fix this?

Before you try to reinstall the game, delete all of the old files. Corporate Clash's files can be found in the `C:\Program Files (x86)\Corporate Clash` directory on Windows. A broken, outdated version may be conflicting with the new installation if the files are not deleted, thus causing issues when trying to reinstall the game.

To install the game again, visit [corporateclash.net/play](https://corporateclash.net/play)

## Launcher

#### **Q:** When I click play in the launcher, it's stuck on "Come back soon!" and nothing launches

To solve this problem on Windows:
- Try ending any current processes/instances of the launcher and/or client using `Task Manager` (`Clash Launcher, `ccbstp`).
- Try right clicking the launcher and clicking `Run as Administrator`, to override any permissions issues.
- Try checking your antivirus or firewall to ensure that features of the launcher aren't being blocked.
- Try restarting your computer and reopening the launcher.
- If none of the above work, try reinstalling the Corporate Clash launcher and game.
- If none of the above work, try asking for further assistance in `#technology` with your computer information.
- _NOTE:_ Ensure that you have the latest version of the game, and ensure that you have the C++ VS2015 Redistributable Packages.
- _NOTE:_ If you can't find either process, try switching to the "Details" tab of `Task Manager` and searching there

#### **Q:** My launcher isn't opening at all, and isn't displaying any errors! What gives?

To solve this problem:
- Run the Corporate Clash uninstaller to remove the game files
- Delete the Corporate Clash folder in C:\Program Files (x86) if it's still there
- Download and run the uninstall utility to completely remove all remaining CC files by clicking [here](https://drive.google.com/file/d/1aqk_CyY4NRV2W8umeUOBuL_PZgpj2llS/view?usp=sharing)
- Reinstall the game by going [here](https://corporateclash.net/play)

If this doesn't work, please tell us!

#### **Q:** I'm constantly getting `A Fatal Error occurred while downloading  a new version of the launcher. Error Code 1` when I try to launch the game, how do I fix this?

Two instances of the launcher may be running simutaneously, and it cannot update.

To solve this problem on Windows:
- Open `Task Manager`
- End all instances of `Clash Launcher`
- End all instances of `ccbstp`
- If the issue persists, restart your computer.
- If the issue persists, reinstall the game.
- _NOTE:_ If you can't find either process, try switching to the "Details" tab of `Task Manager` and searching there

To solve this problem on Mac:
- _No support is available for this OS yet. Check back soon!_

## Gameplay

#### **Q:** My game is missing some files, how do I fix this?

First, make sure that the version you are playing on is the most up-to-date version: the launcher automatically serves and handles updates. To update your game, you may close and reopen the launcher. If the issue persists, you must uninstall and then reinstall the game. This occurs when components might be missing in your game files, such as textures and models not appearing.

#### **Q:** My game says that my internet connection to the servers has been broken, but my internet's working fine! What's going wrong?

- Check #announcements or [visit the Status page](https://status.corporateclash.net/) to see if there is currently a server outage
- If there is, you'll have to wait for the Corporate Clash team to fix whatever issues they are encountering
- If there is no server outage and other people are still able to play, chances are the servers are overloaded and crashes will be very common until the number of current players/logins has dropped. Please note the only thing you can do in this situation is to keep trying or wait for the servers to be less stressed.
