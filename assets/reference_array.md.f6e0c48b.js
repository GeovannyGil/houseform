import{_ as e,c as t,o,Q as a}from"./chunks/framework.989a1717.js";const f=JSON.parse('{"title":"Array Field","description":"","frontmatter":{},"headers":[],"relativePath":"reference/array.md","lastUpdated":1680570652000}'),d={name:"reference/array.md"},r=a(`<h1 id="array-field" tabindex="-1">Array Field <a class="header-anchor" href="#array-field" aria-label="Permalink to &quot;Array Field&quot;">​</a></h1><p>An <code>ArrayField</code> is a wrapper used to handle arrays of form items. An example <code>ArrayField</code> usage is:</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FieldArray</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">numbers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">add</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Set value</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">FieldArray</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="array-field-props" tabindex="-1">Array Field Props <a class="header-anchor" href="#array-field-props" aria-label="Permalink to &quot;Array Field Props&quot;">​</a></h2><p>The <code>ArrayField</code> component takes the following props:</p><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>The name of the array field within the form.</td></tr><tr><td><code>initialValue</code></td><td><code>T[]</code></td><td>The initial value of the field array.</td></tr><tr><td><code>resetWithValue</code></td><td><code>T[]</code></td><td>The value to which a field array should be reset upon calling the <code>reset()</code> method.</td></tr><tr><td><code>preserveValue</code></td><td><code>boolean</code></td><td>Preserve the field&#39;s values when unmount.</td></tr><tr><td><code>listenTo</code></td><td><code>string[]</code></td><td>A list of form field names to listen to. When a listened field updates it&#39;s value, it will trigger the relevant <code>onChangeValidation</code> change detection. Useful when making one field depend on the validation of another.</td></tr><tr><td><code>children</code></td><td><code>(props: FieldArrayInstance&lt;T&gt;) =&gt; JSX.Element</code></td><td>Passed <a href="#interface-fieldarrayinstance"><code>FieldArrayInstance</code></a>, expected to return a JSX element.</td></tr><tr><td><code>onChangeValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the user has changed the field value. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>onMountValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the component is mounted. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>onSubmitValidate</code></td><td><code>() =&gt; Promise&lt;boolean&gt;</code> or <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer"><code>ZodType</code></a></td><td>The validation logic for when the user has submitted the form. Either a Zod type or Promise. If resolved, no error is passed. If rejected, rejection string is set as an error.</td></tr><tr><td><code>memoChild</code></td><td><code>any[]</code></td><td>An array of items passed to the inner <code>useMemo</code> <a href="/guides/performance-optimizations.html">which helps prevent re-renders on the field array.</a></td></tr></tbody></table><h3 id="interface-fieldarrayinstance" tabindex="-1"><em>Interface</em> <code>FieldArrayInstance</code> <a class="header-anchor" href="#interface-fieldarrayinstance" aria-label="Permalink to &quot;_Interface_ \`FieldArrayInstance\`&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>T</code></td><td><code>T</code> is the type of the Field that&#39;s passed to the <code>&lt;Field&lt;T&gt;&gt;</code> component.</td></tr><tr><td><code>setValue</code></td><td><code>(val: T) =&gt; void</code></td><td>A function useful to change the value of a field</td></tr><tr><td><code>setValues</code></td><td><code>(val: T[]) =&gt; void</code></td><td>A function useful to change the value of the form array.</td></tr><tr><td><code>errors</code></td><td><code>string[]</code></td><td>The list of errors currently applied to the field.</td></tr><tr><td><code>setErrors</code></td><td><code>(errors: string[]) =&gt; void</code></td><td>A way to set the errors present on the field.</td></tr><tr><td><code>isValid</code></td><td><code>boolean</code></td><td>A helper property to check if <code>errors</code> is an empty array.</td></tr><tr><td><code>isValidating</code></td><td><code>boolean</code></td><td>A helper property to check if the field is running a validation.</td></tr><tr><td><code>isTouched</code></td><td><code>boolean</code></td><td>A boolean to say if the field has been focused and blurred, regardless of user input.</td></tr><tr><td><code>setIsTouched</code></td><td><code>(val: boolean) =&gt; void</code></td><td></td></tr><tr><td><code>isDirty</code></td><td><code>boolean</code></td><td>A boolean to say if the field has had any kind of user input.</td></tr><tr><td><code>setIsDirty</code></td><td><code>(val: boolean) =&gt; void</code></td><td></td></tr><tr><td><code>props</code></td><td><a href="#array-field-props"><code>ArrayFieldProps</code></a></td><td>The properties originally passed to a field from the component.</td></tr><tr><td><code>add</code></td><td><code>(val: T) =&gt; void</code></td><td>A helper utility to add an item to the form array.</td></tr><tr><td><code>remove</code></td><td><code>(index: number) =&gt; void</code></td><td>A helper utility to remove an item via an index from the form array.</td></tr><tr><td><code>insert</code></td><td><code>(index: number, val: T) =&gt; void</code></td><td>A helper utility to insert an item at the index to the form array.</td></tr><tr><td><code>move</code></td><td><code>(from: number, to: number) =&gt; void</code></td><td>A helper utility to move an item from one index to another in the form array.</td></tr><tr><td><code>replace</code></td><td><code>(index: number, val: T) =&gt; void</code></td><td>A helper utility to replace an item at an index on the form array.</td></tr><tr><td><code>swap</code></td><td><code>(indexA: number, indexB: number) =&gt; void</code></td><td>A helper utility to swap two items on the form array.</td></tr><tr><td><code>validate</code></td><td><code>(rule: &#39;onChangeValidate&#39; | &#39;onSubmitValidate&#39; | &#39;onMountValidate&#39; | &#39;onBlurValidate&#39;) =&gt; void</code></td><td>A method of running manual change detection on a field arrary.</td></tr></tbody></table>`,8),s=[r];function n(l,c,p,i,y,h){return o(),t("div",null,s)}const D=e(d,[["render",n]]);export{f as __pageData,D as default};
