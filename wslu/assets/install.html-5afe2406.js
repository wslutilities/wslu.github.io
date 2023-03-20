import{_ as l,M as d,p as t,q as r,R as e,t as i,N as s,a1 as a}from"./framework-96b046e1.js";const o={},u=a(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><h3 id="alpine-linux" tabindex="-1"><a class="header-anchor" href="#alpine-linux" aria-hidden="true">#</a> Alpine Linux</h3><p>You can install <code>wslu</code> on <strong>Alpine Linux 3.12+</strong> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apk add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>You can install <code>wslu</code> with the following methods:</p><ol><li>If not done so, initial <code>pacman-key</code> with <code>pacman-key --init</code>;</li><li>add the WSL Utilties Public Signing Key to <code>pacman</code> from the keyserver from keyserver using <code>pacman-key -r A2861ABFD897DD37</code> or download from our website and import the key:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Locally sign the key with <code>pacman-key --lsign-key A2861ABFD897DD37</code>;</li><li>add the following content in your <code>/etc/pacman.conf</code>:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>run <code>pacman -Sy &amp;&amp; pacman -S wslu</code> to install.</li></ol><h3 id="centos-7" tabindex="-1"><a class="header-anchor" href="#centos-7" aria-hidden="true">#</a> CentOS 7</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="red-hat-enterprise-linux-7-oracle-linux-7" tabindex="-1"><a class="header-anchor" href="#red-hat-enterprise-linux-7-oracle-linux-7" aria-hidden="true">#</a> Red Hat Enterprise Linux 7/Oracle Linux 7</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debian" tabindex="-1"><a class="header-anchor" href="#debian" aria-hidden="true">#</a> Debian</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc

# Debian 10
echo &quot;deb https://pkg.wslutiliti.es/debian buster main&quot; | sudo tee -a /etc/apt/sources.list
# Debian 11
echo &quot;deb https://pkg.wslutiliti.es/debian bullseye main&quot; | sudo tee -a /etc/apt/sources.list

sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fedora-and-centos-rhel-oracle-linux-almalinux-rocky-linux-8" tabindex="-1"><a class="header-anchor" href="#fedora-and-centos-rhel-oracle-linux-almalinux-rocky-linux-8" aria-hidden="true">#</a> Fedora and CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux 8+</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# for CentOS/RHEL 8 only
sudo dnf install epel-release dnf-plugins-core
sudo dnf config-manager --set-enabled PowerTools

sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fedora-remix-for-wsl" tabindex="-1"><a class="header-anchor" href="#fedora-remix-for-wsl" aria-hidden="true">#</a> Fedora Remix for WSL</h3><p>Preinstalled.</p><h3 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo &quot;deb https://pkg.wslutiliti.es/kali kali-rolling main&quot; | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pengwin" tabindex="-1"><a class="header-anchor" href="#pengwin" aria-hidden="true">#</a> Pengwin</h3><p>Preinstalled.</p><h3 id="pengwin-enterprise-7" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-7" aria-hidden="true">#</a> Pengwin Enterprise 7</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pengwin-enterprise-8" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-8" aria-hidden="true">#</a> Pengwin Enterprise 8</h3><p>Add the EPEL repository:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>`,36),c={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"INFO",-1),h=e("code",null,"universe",-1),v={href:"https://bugs.launchpad.net/ubuntu/+source/wslu",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Starting from Ubuntu 22.04 LTS, Ubuntu on WSL no longer bundled with <code>wslu</code>. Please install the PPA version.</p></div><p>Preinstalled before Ubuntu 22.04 LTS. On older installations of Ubuntu please install <code>ubuntu-wsl</code> that depends on <code>wslu</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install ubuntu-wsl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=e("code",null,"wslu",-1),g={href:"https://launchpad.net/~wslutilities/+archive/ubuntu/wslu",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo add-apt-repository ppa:wslutilities/wslu
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> OpenSUSE</h3><p>You can install <code>wslu</code> with the following command:</p><h4 id="leap" tabindex="-1"><a class="header-anchor" href="#leap" aria-hidden="true">#</a> Leap</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-leap-\${SUSE_VERSION}/wslutilities-wslu-opensuse-leap-\${SUSE_VERSION}.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tumbleweed" tabindex="-1"><a class="header-anchor" href="#tumbleweed" aria-hidden="true">#</a> Tumbleweed</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-tumbleweed/wslutilities-wslu-opensuse-tumbleweed.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suse-linux-enperprise-server" tabindex="-1"><a class="header-anchor" href="#suse-linux-enperprise-server" aria-hidden="true">#</a> SUSE Linux Enperprise Server</h3><h4 id="_12-sp5" tabindex="-1"><a class="header-anchor" href="#_12-sp5" aria-hidden="true">#</a> 12 SP5</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_12_SP5/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP5/graphics.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15" tabindex="-1"><a class="header-anchor" href="#_15" aria-hidden="true">#</a> 15</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_15/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_15_SP3/graphics.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void-linux" tabindex="-1"><a class="header-anchor" href="#void-linux" aria-hidden="true">#</a> Void Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo xbps-install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="clear-linux" tabindex="-1"><a class="header-anchor" href="#clear-linux" aria-hidden="true">#</a> Clear Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo swupd 3rd-party add wslutilities https://pkg.wslutiliti.es/clearlinux
sudo swupd 3rd-party bundle-add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="other-distributions" tabindex="-1"><a class="header-anchor" href="#other-distributions" aria-hidden="true">#</a> Other distributions</h3>`,19),w=e("p",null,[e("strong",null,"⚠ Not Recommend")],-1),f=e("code",null,"curl | bash",-1),_={href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[i("You can install "),e("code",null,"wslu"),i(" with the following command on your preferred distribution: "),e("code",null,"curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")],-1),k=e("h3",{id:"for-older-verions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#for-older-verions","aria-hidden":"true"},"#"),i(" For Older Verions")],-1),S=e("h4",{id:"install-from-wsl-translinux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-from-wsl-translinux","aria-hidden":"true"},"#"),i(" Install from "),e("code",null,"wsl-translinux")],-1),L=e("code",null,"wslu",-1),E={href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"sudo apt install wslu",-1),I=e("code",null,"wslu",-1),R=a(`<p>However, with lack of support, I moved my packages to my own apt repository.</p><h4 id="install-version-1-2" tabindex="-1"><a class="header-anchor" href="#install-version-1-2" aria-hidden="true">#</a> Install version 1.2</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu
cd ~/.wslu
./configure -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="install-version-1-1-1-0" tabindex="-1"><a class="header-anchor" href="#install-version-1-1-1-0" aria-hidden="true">#</a> Install version 1.1/1.0</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --branch v1.1 https://github.com/patrick330602/wslu.git
#for 1.0: change 1.1 to 1.0
cd wslu
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To uninstall, <code>run sudo make uninstall</code></p><h4 id="install-pre-releases" tabindex="-1"><a class="header-anchor" href="#install-pre-releases" aria-hidden="true">#</a> Install pre-releases</h4><p>directly run <code>wslu-dev</code> after cloning.</p>`,8);function z(A,N){const n=d("ExternalLinkIcon");return t(),r("div",null,[u,e("div",c,[p,e("p",null,[i("For Ubuntu "),h,i(" version, you should only report bug at "),e("a",v,[i("Launchpad"),s(n)]),i("; for the PPA version, you should report bugs at the GitHub issues.")])]),m,e("p",null,[i("To install the latest version of "),b,i(", you can install via our PPA: "),e("a",g,[i("https://launchpad.net/~wslutilities/+archive/ubuntu/wslu"),s(n)])]),x,e("blockquote",null,[w,e("p",null,[f,i(" method is not secure. "),e("a",_,[i("Related article"),s(n)])])]),y,k,S,e("p",null,[L,i(" is part of "),e("a",E,[i("wsl-translinux"),s(n)]),i(" apt repository.")]),e("p",null,[i("Following the guidelines "),e("a",P,[i("Here"),s(n)]),i(" to add the repository. Then you can simply run "),O,i(" to install "),I,i(".")]),R])}const q=l(o,[["render",z],["__file","install.html.vue"]]);export{q as default};
