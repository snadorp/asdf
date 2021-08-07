import{r as s,o as a,c as n,a as e,w as l,F as o,b as t,d as p}from"./app.e18b9f09.js";const r={},c=t('<h1 id="versions" tabindex="-1"><a class="header-anchor" href="#versions" aria-hidden="true">#</a> Versions</h1><h2 id="install-version" tabindex="-1"><a class="header-anchor" href="#install-version" aria-hidden="true">#</a> Install Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf install erlang 17.3</span></span>\n<span class="line"></span></code></pre></div><p>If a plugin supports downloading &amp; compiling from source, you can specify <code>ref:foo</code> where <code>foo</code> is a specific branch, tag, or commit. You&#39;ll need to use the same name and reference when uninstalling too.</p><h2 id="install-latest-stable-version" tabindex="-1"><a class="header-anchor" href="#install-latest-stable-version" aria-hidden="true">#</a> Install Latest Stable Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest</span></span>\n<span class="line"><span style="color:#88846F;"># asdf install erlang latest</span></span>\n<span class="line"></span></code></pre></div><p>Install latest stable version that begins with a given string.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf install erlang latest:17</span></span>\n<span class="line"></span></code></pre></div><h2 id="list-installed-versions" tabindex="-1"><a class="header-anchor" href="#list-installed-versions" aria-hidden="true">#</a> List Installed Versions</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf list erlang</span></span>\n<span class="line"></span></code></pre></div><p>Filter versions to those that begin with a given string.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf list erlang 17</span></span>\n<span class="line"></span></code></pre></div><h2 id="list-all-available-versions" tabindex="-1"><a class="header-anchor" href="#list-all-available-versions" aria-hidden="true">#</a> List All Available Versions</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list all </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf list all erlang</span></span>\n<span class="line"></span></code></pre></div><p>Filter versions to those that begin with a given string.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf list all </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf list all erlang 17</span></span>\n<span class="line"></span></code></pre></div><h2 id="show-latest-stable-version" tabindex="-1"><a class="header-anchor" href="#show-latest-stable-version" aria-hidden="true">#</a> Show Latest Stable Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf latest </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf latest erlang</span></span>\n<span class="line"></span></code></pre></div><p>Show latest stable version that begins with a given string.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf latest </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf latest erlang 17</span></span>\n<span class="line"></span></code></pre></div><h2 id="set-current-version" tabindex="-1"><a class="header-anchor" href="#set-current-version" aria-hidden="true">#</a> Set Current Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf shell </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">...]</span></span>\n<span class="line"><span style="color:#88846F;"># asdf global elixir 1.2.4</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">asdf global </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest[:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">]</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> latest[:</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">]</span></span>\n<span class="line"><span style="color:#88846F;"># asdf global elixir latest</span></span>\n<span class="line"></span></code></pre></div><p><code>global</code> writes the version to <code>$HOME/.tool-versions</code>.</p><p><code>shell</code> set the version to an environment variable named <code>ASDF_${LANG}_VERSION</code>, for the current shell session only.</p><p><code>local</code> writes the version to <code>$PWD/.tool-versions</code>, creating it if needed.</p>',25),i=p("See the "),F=e("code",null,".tool-versions",-1),d=p(),h=p("file in the Configuration section"),y=p(" for details."),g=t('<div class="custom-container warning"><p class="custom-container-title">Alternatively</p><p>If you want to set a version only for the current shell session or for executing just a command under a particular tool version, you can set an environment variable like <code>ASDF_${TOOL}_VERSION</code>.</p></div><p>The following example runs tests on an Elixir project with version <code>1.4.0</code>. The version format is the same supported by the <code>.tool-versions</code> file.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ASDF_ELIXIR_VERSION=1.4.0 mix </span><span style="color:#66D9EF;">test</span></span>\n<span class="line"></span></code></pre></div><h2 id="fallback-to-system-version" tabindex="-1"><a class="header-anchor" href="#fallback-to-system-version" aria-hidden="true">#</a> Fallback to System Version</h2><p>To use the system version of tool <code>&lt;name&gt;</code> instead of an asdf managed version you can set the version for the tool to <code>system</code>.</p><p>Set system with either <code>global</code>, <code>local</code> or <code>shell</code> as outlined in <a href="#set-current-version">Set Current Version</a> section above.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> system</span></span>\n<span class="line"><span style="color:#88846F;"># asdf local python system</span></span>\n<span class="line"></span></code></pre></div><h2 id="view-current-version" tabindex="-1"><a class="header-anchor" href="#view-current-version" aria-hidden="true">#</a> View Current Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf current</span></span>\n<span class="line"><span style="color:#88846F;"># asdf current</span></span>\n<span class="line"><span style="color:#88846F;"># erlang 17.3 (set by /Users/kim/.tool-versions)</span></span>\n<span class="line"><span style="color:#88846F;"># nodejs 6.11.5 (set by /Users/kim/cool-node-project/.tool-versions)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">asdf current </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf current erlang</span></span>\n<span class="line"><span style="color:#88846F;"># 17.3 (set by /Users/kim/.tool-versions)</span></span>\n<span class="line"></span></code></pre></div><h2 id="uninstall-version" tabindex="-1"><a class="header-anchor" href="#uninstall-version" aria-hidden="true">#</a> Uninstall Version</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf uninstall </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf uninstall erlang 17.3</span></span>\n<span class="line"></span></code></pre></div><h2 id="shims" tabindex="-1"><a class="header-anchor" href="#shims" aria-hidden="true">#</a> Shims</h2><p>When asdf installs a package it creates shims for every executable program in that package in a <code>$ASDF_DATA_DIR/shims</code> directory (default <code>~/.asdf/shims</code>). This directory being on the <code>$PATH</code> (by means of <code>asdf.sh</code> or <code>asdf.fish</code>) is how the installed programs are made available in the environment.</p><p>The shims themselves are really simple wrappers that <code>exec</code> a helper program <code>asdf exec</code> passing it the name of the plugin and path to the executable in the installed package that the shim is wrapping.</p><p>The <code>asdf exec</code> helper determines the version of the package to use (as specified in <code>.tool-versions</code> file, selected by <code>asdf local ...</code> or <code>asdf global ...</code>), the final path to the executable in the package installation directory (this can be manipulated by the <code>exec-path</code> callback in the plugin) and the environment to execute in (also provided by the plugin - <code>exec-env</code> script), and finally it executes it.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Because this system uses <code>exec</code> calls, any scripts in the package that are meant to be sourced by the shell instead of executed need to be accessed directly instead of via the shim wrapper. The two <code>asdf</code> commands: <code>which</code> and <code>where</code> can help with this by returning the path to the installed package:</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># returns path to main executable in current version</span></span>\n<span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(asdf which </span><span style="color:#F8F8F2;">${PLUGIN}</span><span style="color:#E6DB74;">)</span><span style="color:#F8F8F2;">/../script.sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># returns path to the package installation directory</span></span>\n<span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(asdf where </span><span style="color:#F8F8F2;">${PLUGIN}</span><span style="color:#E6DB74;"> $(asdf current </span><span style="color:#F8F8F2;">${PLUGIN}</span><span style="color:#E6DB74;">))</span><span style="color:#F8F8F2;">/bin/script.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="by-passing-asdf-shims" tabindex="-1"><a class="header-anchor" href="#by-passing-asdf-shims" aria-hidden="true">#</a> By-passing asdf shims</h3>',18),u=p("If for some reason you want to by-pass asdf shims or want your environment variables automatically set upon entering your project's directory, the "),v={href:"https://github.com/asdf-community/asdf-direnv",target:"_blank",rel:"noopener noreferrer"},b=p("asdf-direnv"),f=p(" plugin can be helpful. Be sure to check its README for more details.");r.render=function(t,p){const r=s("RouterLink"),m=s("OutboundLink");return a(),n(o,null,[c,e("p",null,[i,F,d,e(r,{to:"/manage/configuration.html"},{default:l((()=>[h])),_:1}),y]),g,e("p",null,[u,e("a",v,[b,e(m)]),f])],64)};export default r;
