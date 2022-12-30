import{_ as e,p as n,q as a,a1 as l}from"./framework-96b046e1.js";const t={},i=l(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><blockquote><p>CAUTION: please remove the old packages if you have installed, they will damage your manpage folder!</p></blockquote><p>To install, just run the following command in the bash prompt:</p><p><code>curl -o- https://raw.githubusercontent.com/patrick330602/wslu/master/install.sh | bash</code></p><p>This will install to the folder <code>.wslu</code> under your home.</p><p>To install manually, run the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/patrick330602/wslu.git
<span class="token comment"># or git clone https://github.com/patrick330602/wslu.git &lt;destination&gt; for your preferred destination</span>
<span class="token builtin class-name">cd</span> /path/to/wslu/folder
./configure <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="remove-reinstall" tabindex="-1"><a class="header-anchor" href="#remove-reinstall" aria-hidden="true">#</a> Remove &amp; Reinstall</h2><ul><li>run <code>wsluconfig -u</code> will remove the link from the system but not the source folder. You can install it again by entering <code>wsluconfig -i</code>;</li><li>run <code>wsluconfig -p</code> will remove everything installed;</li><li>if there is something run, run <code>wsluconfig -r</code> to reinstall.</li></ul>`,9),s=[i];function o(r,c){return n(),a("div",null,s)}const u=e(t,[["render",o],["__file","inst.html.vue"]]);export{u as default};
