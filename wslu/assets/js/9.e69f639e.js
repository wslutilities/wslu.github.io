(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{194:function(t,s,e){"use strict";e.r(s);var a=e(28),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h3",{attrs:{id:"alpine-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alpine-linux"}},[t._v("#")]),t._v(" Alpine Linux")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" from Alpine Linux testing with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ echo "@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing/" | sudo tee -a /etc/apk/repositories\n$ sudo apk update\n$ sudo apk add wslu@testing\n')])])]),e("h3",{attrs:{id:"arch-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux"}},[t._v("#")]),t._v(" Arch Linux")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://aur.archlinux.org/packages/wslu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("wslu"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://aur.archlinux.org/packages/wslu-git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("wslu-git"),e("OutboundLink")],1),t._v(" on AUR.")]),t._v(" "),e("h3",{attrs:{id:"centos-rhel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-rhel"}},[t._v("#")]),t._v(" CentOS/RHEL")]),t._v(" "),e("p",[t._v("Add the repository for the corresponding Linux distribution:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("CentOS 7")]),t._v(": "),e("code",[t._v("sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo")])]),t._v(" "),e("li",[e("strong",[t._v("CentOS 8")]),t._v(": "),e("code",[t._v("sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo")])]),t._v(" "),e("li",[e("strong",[t._v("Red Hat Enterprise Linux 7")]),t._v(": "),e("code",[t._v("sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo")])])]),t._v(" "),e("p",[t._v("Then install with the command "),e("code",[t._v("sudo yum install wslu")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"debian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian"}},[t._v("#")]),t._v(" Debian")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('sudo apt install gnupg2 apt-transport-https\nwget -O - https://access.patrickwu.space/wslu/public.asc | sudo apt-key add -\necho "deb https://access.patrickwu.space/wslu/debian buster main" | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install wslu\n')])])]),e("h3",{attrs:{id:"fedora-remix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fedora-remix"}},[t._v("#")]),t._v(" Fedora Remix")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" from "),e("code",[t._v("COPR")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo dnf copr enable wslutilities/wslu\nsudo dnf install wslu\n")])])]),e("h3",{attrs:{id:"kali-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kali-linux"}},[t._v("#")]),t._v(" Kali Linux")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('sudo apt install gnupg2 apt-transport-https\nwget -O - https://access.patrickwu.space/wslu/public.asc | sudo apt-key add -\necho "deb https://access.patrickwu.space/wslu/kali kali-rolling main" | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install wslu\n')])])]),e("h3",{attrs:{id:"pengwin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pengwin"}},[t._v("#")]),t._v(" Pengwin")]),t._v(" "),e("p",[t._v("Preinstalled.")]),t._v(" "),e("h3",{attrs:{id:"pengwin-enterprise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pengwin-enterprise"}},[t._v("#")]),t._v(" Pengwin Enterprise")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/ScientificLinux_7/home:wslutilities.repo\nsudo yum install wslu\n")])])]),e("h3",{attrs:{id:"ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),e("p",[t._v("Preinstalled in the latest apps. On older installations of Ubuntu please install "),e("code",[t._v("ubuntu-wsl")]),t._v(" that depends on "),e("code",[t._v("wslu")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt update\nsudo apt install ubuntu-wsl\n")])])]),e("h3",{attrs:{id:"opensuse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opensuse"}},[t._v("#")]),t._v(" OpenSUSE")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_15.1/home:wslutilities.repo\nsudo zypper up\nsudo zypper in wslu`.\n")])])]),e("h3",{attrs:{id:"suse-linux-enperprise-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suse-linux-enperprise-server"}},[t._v("#")]),t._v(" SUSE Linux Enperprise Server")]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('SLESCUR_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\"//g -e s/-/_/g)"\nsudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo\nsudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo\nsudo zypper up\nsudo zypper in wslu\n')])])]),e("h3",{attrs:{id:"other-distributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-distributions"}},[t._v("#")]),t._v(" Other distributions")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("⚠ Not Recommend")])]),t._v(" "),e("p",[e("code",[t._v("curl | bash")]),t._v(" method is not secure. "),e("a",{attrs:{href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Related article"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("You can install "),e("code",[t._v("wslu")]),t._v(" with the following command on your preferred distribution: "),e("code",[t._v("curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")])]),t._v(" "),e("h3",{attrs:{id:"for-older-verions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-older-verions"}},[t._v("#")]),t._v(" For Older Verions")]),t._v(" "),e("h4",{attrs:{id:"install-from-wsl-translinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-from-wsl-translinux"}},[t._v("#")]),t._v(" Install from "),e("code",[t._v("wsl-translinux")])]),t._v(" "),e("p",[e("code",[t._v("wslu")]),t._v(" is part of "),e("a",{attrs:{href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"}},[t._v("wsl-translinux"),e("OutboundLink")],1),t._v(" apt repository.")]),t._v(" "),e("p",[t._v("Following the guidelines "),e("a",{attrs:{href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),e("OutboundLink")],1),t._v(" to add the repository. Then you can simply run "),e("code",[t._v("sudo apt install wslu")]),t._v(" to install "),e("code",[t._v("wslu")]),t._v(".")]),t._v(" "),e("p",[t._v("However, with lack of support, I moved my packages to my own apt repository.")]),t._v(" "),e("h4",{attrs:{id:"install-version-1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-version-1-2"}},[t._v("#")]),t._v(" Install version 1.2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu\ncd ~/.wslu\n./configure -i\n")])])]),e("h4",{attrs:{id:"install-version-1-1-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-version-1-1-1-0"}},[t._v("#")]),t._v(" Install version 1.1/1.0")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone --branch v1.1 https://github.com/patrick330602/wslu.git\n#for 1.0: change 1.1 to 1.0\ncd wslu\nsudo make install\n")])])]),e("p",[t._v("To uninstall, "),e("code",[t._v("run sudo make uninstall")])]),t._v(" "),e("h4",{attrs:{id:"install-pre-releases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-pre-releases"}},[t._v("#")]),t._v(" Install pre-releases")]),t._v(" "),e("p",[t._v("directly run "),e("code",[t._v("wslu-dev")]),t._v(" after cloning.")])])}),[],!1,null,null,null);s.default=r.exports}}]);