(window.webpackJsonp=window.webpackJsonp||[]).push([["98d3"],{"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"5bxx":function(t,e,n){var s={".":"RNiq","./":"RNiq","./about":"Juyh","./about.js":"Juyh","./index":"RNiq","./index.js":"RNiq","./post":"EhLH","./post.js":"EhLH"};function i(t){var e=r(t);return n(e)}function r(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="5bxx"},EhLH:function(t,e,n){"use strict";n.r(e),function(t){var s=n("q1tI"),i=n.n(s),r=n("nOHt"),a=n("0o6o");e.default=Object(r.withRouter)(function(e){console.log(e.router.query.filePath);n("KZDG");console.log(t.filepath);var s=n("5bxx")("."+e.router.query.filePath);return i.a.createElement(a.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.html}}))})}.call(this,n("3UD+")(t))},Juyh:function(t,e,n){"use strict";n.r(e);var s=n("q1tI"),i=n.n(s),r=n("0o6o");n("F51O");e.default=function(t){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"page-about"},i.a.createElement("div",{className:"about-style"},i.a.createElement("div",{className:"about-head"},i.a.createElement("img",{className:"about-img",src:"/blog/static/images/AboutMe.jpeg",alt:"avator"}),i.a.createElement("div",{className:"about-intro"},i.a.createElement("h1",{className:"about-name"},"防风"),i.a.createElement("ul",{className:"about-tag"},i.a.createElement("li",null,"前算法爱好者"),i.a.createElement("li",null,"Java程序猿"),i.a.createElement("li",null,"Kernel探索者")),i.a.createElement("div",{className:"about-skill"},i.a.createElement("h2",null,"Programming Skill"),i.a.createElement("ul",null,i.a.createElement("li",null,"C"),i.a.createElement("li",null,"Java"))))),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-desc"})),i.a.createElement("div",{className:"about-contact"},i.a.createElement("figure",{className:"about-icon"},i.a.createElement("img",{src:"/blog/static/images/icon.png",alt:"icon"})),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",{className:"fas fa-link"})," ",i.a.createElement("a",{href:"/"},"https://www.ffutop.com/"))),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",{className:"fas fa-at"})," ",i.a.createElement("a",{href:"mailto:dormousenone@gmail.com"},"dormousenone@gmail.com")),i.a.createElement("li",null,i.a.createElement("i",{className:"fas fa-map-marked-alt"})," Hangzhou, China"))))))}},KZDG:function(t){t.exports={html:{data:{},messages:[],history:[],cwd:"/Users/fangfeng/MISC/blog/ffutop",contents:'<blockquote>\n<p>本文描述的 ASM 指的是 OW2 ASM</p>\n</blockquote>\n<h2>ASM-Core 的结构</h2>\n<p><em>首先是一些概述性的内容。</em></p>\n<p>由于 ASM 操作的 JAVA 字节码有严格的格式规定，且即使随着 JVM 标准的升级也极少出现重大调整。\n因此适用面狭窄的访问者模式在该项目中被大量地使用，并且已经到了丧心病狂的程度:)</p>\n<p>从核心包声明的类来看，主要包括:</p>\n<ol>\n<li>\n<p>ClassReader - 作为结构化对象，将接收(accept)访问者的访问</p>\n</li>\n<li>\n<p>几种访问者抽象类以及相应的实现类</p>\n</li>\n</ol>\n<ul>\n<li>AnnotationVisitor -> AnnotationWriter</li>\n<li>ClassVisitor -> ClassWriter</li>\n<li>FieldVisitor -> FieldWriter</li>\n<li>MethodVisitor -> MethodWriter</li>\n<li>ModuleVisitor -> ModuleWriter</li>\n</ul>\n<ol start="3">\n<li>\n<p>Opcodes &#x26; Constants - ClassFile 中描述的大量常量符号与值</p>\n</li>\n<li>\n<p>其它一些辅助的类</p>\n</li>\n</ol>\n<ul>\n<li>Attribute - 用于处理非标准化的属性(ClassFile 允许<a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html">JVMS</a> 中未定义的 Attribute)</li>\n<li>ByteArray - 动态可自适应的 byte[] (字节数组)</li>\n<li>Context - ClassReader 在被解析(被访问)过程中用于表示“累积状态”的一个类/对象</li>\n<li>Symbol - 用于表示 ClassFile 中描述的 Constant 的基类</li>\n<li>SymbolTable - 用于存储常量池对象</li>\n<li>其它内容省略</li>\n</ul>\n<h2>ClassFile 文件格式</h2>\n<p>本节的内容可以参阅 <a href="https://dormouse-none.github.io/2018-06-11-ASM-ClassReader/">ClassFile 文件格式</a></p>\n<p>ClassFile 是 ASM 操作字节码的基础与前提。在 JVMS 定义了 .class 文件格式之后，ASM 才在此基础上进行了对 ClassFile 的字节码操作。</p>\n<p>因此，无论如何，个人认为在真正开始了解 ASM 之前，通读一遍 ClassFile 文件格式是完全有必要的。并且，在基本了解 ClassFile 内容的基础上，\n尝试对某个 .class 文件进行手工解析也不失为一种加深理解的途径。</p>\n<h2>Visitor Pattern</h2>\n<p>由于 ASM 的实现采用了偏门的访问者模式。因此，了解访问者模式也是一个必不可少的重要环节。同时在了解后也将为源码阅读者提供更清晰的解读思路。</p>\n<p>《设计模式：可复用面向对象软件的基础》一书的“5.11 VISITOR(访问者)——对象行为型模式”提供了很详尽的解释。</p>\n<p>本人对这方面的不甚了解，推荐自行查找资料。</p>\n<h2>ClassReader</h2>\n<p>ClassReader 是解析现有的 .class 文件的基本工具。同时，ClassReader 也作为一个内容的持有者，与 SymboleTable 配合，来满足访问者基本的访问需求。</p>\n<p>刨除大量的内部私有方法，ClassReader 对外开放的接口相当简单。最核心的方法仅包括 ClassReader(...) 以及 accetp(...)</p>\n<h3>ClassReader(...) 构造方法</h3>\n<p>顾名思义，构造方法用于实例化 ClassReader 对象，包括一些必须的变量的初始化。</p>\n<p>在构造函数中完成的初始化内容包括:</p>\n<ul>\n<li>校验版本号</li>\n<li>存储每个常量池项目的起始偏移量 cpInfoOffsets</li>\n<li>存储每个引导方法的起始偏移量 bootstrapMethodOffsets</li>\n<li>存储最长字符串常量的大小 maxStringLength</li>\n</ul>\n<pre><code class="language-java">  ClassReader(final byte[] classFileBuffer, final int classFileOffset, final boolean checkClassVersion) {\n    this.b = classFileBuffer;   // .class 文件缓存\n    // 检查主版本号, 第6,7个字节(从0字节开始计数)\n    if (checkClassVersion &#x26;&#x26; readShort(classFileOffset + 6) > Opcodes.V11) {\n      throw new IllegalArgumentException(\n          "Unsupported class file major version " + readShort(classFileOffset + 6));\n    }\n    // 创建常量池数组，常量池长度的定义 constant_pool_count 在第8,9字节\n    int constantPoolCount = readUnsignedShort(classFileOffset + 8);     // 读取无符号short, 即读取连续两字节作为一个short值\n    cpInfoOffsets = new int[constantPoolCount];                         // 每个常量的偏移位置\n    cpInfoValues = new Object[constantPoolCount];                       // 每个常量的实例对象\n    int currentCpInfoIndex = 1;\n    int currentCpInfoOffset = classFileOffset + 10;\n    int currentMaxStringLength = 0;                                     // 最长字符串常量\n    while (currentCpInfoIndex &#x3C; constantPoolCount) {\n      cpInfoOffsets[currentCpInfoIndex++] = currentCpInfoOffset + 1;\n      int cpInfoSize;\n      switch (classFileBuffer[currentCpInfoOffset]) {\n        case Symbol.CONSTANT_FIELDREF_TAG:\n        case Symbol.CONSTANT_METHODREF_TAG:\n        case Symbol.CONSTANT_INTERFACE_METHODREF_TAG:\n        case Symbol.CONSTANT_INTEGER_TAG:\n        case Symbol.CONSTANT_FLOAT_TAG:\n        case Symbol.CONSTANT_NAME_AND_TYPE_TAG:\n        case Symbol.CONSTANT_INVOKE_DYNAMIC_TAG:\n        case Symbol.CONSTANT_DYNAMIC_TAG:\n          cpInfoSize = 5;\n          break;\n        case Symbol.CONSTANT_LONG_TAG:\n        case Symbol.CONSTANT_DOUBLE_TAG:\n          cpInfoSize = 9;\n          currentCpInfoIndex++;\n          break;\n        case Symbol.CONSTANT_UTF8_TAG:\n          cpInfoSize = 3 + readUnsignedShort(currentCpInfoOffset + 1);\n          if (cpInfoSize > currentMaxStringLength) {\n            // The size in bytes of this CONSTANT_Utf8 structure provides a conservative estimate\n            // of the length in characters of the corresponding string, and is much cheaper to\n            // compute than this exact length.\n            currentMaxStringLength = cpInfoSize;\n          }\n          break;\n        case Symbol.CONSTANT_METHOD_HANDLE_TAG:\n          cpInfoSize = 4;\n          break;\n        case Symbol.CONSTANT_CLASS_TAG:\n        case Symbol.CONSTANT_STRING_TAG:\n        case Symbol.CONSTANT_METHOD_TYPE_TAG:\n        case Symbol.CONSTANT_PACKAGE_TAG:\n        case Symbol.CONSTANT_MODULE_TAG:\n          cpInfoSize = 3;\n          break;\n        default:\n          throw new IllegalArgumentException();\n      }\n      currentCpInfoOffset += cpInfoSize;\n    }\n    this.maxStringLength = currentMaxStringLength;\n    // The Classfile\'s access_flags field is just after the last constant pool entry.\n    this.header = currentCpInfoOffset;\n\n    // 读取 BootstrapMethods 属性(如果存在)\n    int currentAttributeOffset = getFirstAttributeOffset();\n    int[] currentBootstrapMethodOffsets = null;\n    for (int i = readUnsignedShort(currentAttributeOffset - 2); i > 0; --i) {\n      // 读取每个 attribute_info 的属性名和属性长度\n      String attributeName = readUTF8(currentAttributeOffset, new char[maxStringLength]);\n      int attributeLength = readInt(currentAttributeOffset + 2);\n      currentAttributeOffset += 6;\n      // 如果当前属性名为 BootstrapMethods ，则进入处理逻辑\n      if (Constants.BOOTSTRAP_METHODS.equals(attributeName)) {\n        // Read the num_bootstrap_methods field and create an array of this size.\n        currentBootstrapMethodOffsets = new int[readUnsignedShort(currentAttributeOffset)];\n        // Compute and store the offset of each \'bootstrap_methods\' array field entry.\n        int currentBootstrapMethodOffset = currentAttributeOffset + 2;\n        for (int j = 0; j &#x3C; currentBootstrapMethodOffsets.length; ++j) {\n          currentBootstrapMethodOffsets[j] = currentBootstrapMethodOffset;\n          // Skip the bootstrap_method_ref and num_bootstrap_arguments fields (2 bytes each),\n          // as well as the bootstrap_arguments array field (of size num_bootstrap_arguments * 2).\n          currentBootstrapMethodOffset +=\n              4 + readUnsignedShort(currentBootstrapMethodOffset + 2) * 2;\n        }\n      }\n      currentAttributeOffset += attributeLength;\n    }\n    this.bootstrapMethodOffsets = currentBootstrapMethodOffsets;\n  }\n</code></pre>\n<p>到此为止，ClassReader 已经解析了包括 magic, minor version, major version, constant pool 。\n但是，诸如 field_info, method_info, attribute_info 等仍然没有得到处理。</p>\n<h3>accept(...)</h3>\n<p>访问者模式的核心操作就是结构化对象接受(accept)访问者对象实例的访问，并将结构化内容完全暴露给访问者。</p>\n<p>从抽象的方法角度看，可以理解成:</p>\n<pre><code class="language-java">  // --- 结构化对象的 accept() 方法 ---\n  public void accept(Visitor visitor) {\n    visitor.visit(this);\n  }\n\n  // --- 访问者对象的 visit() 方法 ---\n  public Xxx visit(Element element) {\n    // 若干关于 element 的读操作 + 其它操作\n  }\n</code></pre>\n<pre><code class="language-java">public void accept(\n      final ClassVisitor classVisitor,\n      final Attribute[] attributePrototypes,\n      final int parsingOptions) {\n    // 定义 Context 作为辅助类，暂存被访问过程的“累积状态”\n    Context context = new Context();\n    context.attributePrototypes = attributePrototypes;\n    /**\n     * 解析选项: \n     * 1. SKIP_CODE - 不解析 CODE 属性 \n     * 2. SKIP_DEBUG - 不解析 DEBUG 相关的属性(例如SourceFile, SourceDebugExtension, LocalVariableTable, LocalVariableTypeTable, LineNumberTable)\n     * 4. SKIP_FRAMES - 跳过对 StackMap 和 StackMapTable 属性的解析\n     * ...\n     */\n    context.parsingOptions = parsingOptions;\n    // 从常量池读取常量所使用的缓冲数字\n    context.charBuffer = new char[maxStringLength];\n\n    // Read the access_flags, this_class, super_class, interface_count and interfaces fields.\n    // 解析访问控制, 当前类, 父类, 接口数量与接口值等\n    char[] charBuffer = context.charBuffer;\n    int currentOffset = header;\n    int accessFlags = readUnsignedShort(currentOffset);\n    String thisClass = readClass(currentOffset + 2, charBuffer);\n    String superClass = readClass(currentOffset + 4, charBuffer);\n    String[] interfaces = new String[readUnsignedShort(currentOffset + 6)];\n    currentOffset += 8;\n    for (int i = 0; i &#x3C; interfaces.length; ++i) {\n      interfaces[i] = readClass(currentOffset, charBuffer);\n      currentOffset += 2;\n    }\n\n    // Read the class attributes (the variables are ordered as in Section 4.7 of the JVMS).\n    // Attribute offsets exclude the attribute_name_index and attribute_length fields.\n    // - The offset of the InnerClasses attribute, or 0.\n    int innerClassesOffset = 0;\n    // - The offset of the EnclosingMethod attribute, or 0.\n    int enclosingMethodOffset = 0;\n    // - The string corresponding to the Signature attribute, or null.\n    String signature = null;\n    // - The string corresponding to the SourceFile attribute, or null.\n    String sourceFile = null;\n    // - The string corresponding to the SourceDebugExtension attribute, or null.\n    String sourceDebugExtension = null;\n    // - The offset of the RuntimeVisibleAnnotations attribute, or 0.\n    int runtimeVisibleAnnotationsOffset = 0;\n    // - The offset of the RuntimeInvisibleAnnotations attribute, or 0.\n    int runtimeInvisibleAnnotationsOffset = 0;\n    // - The offset of the RuntimeVisibleTypeAnnotations attribute, or 0.\n    int runtimeVisibleTypeAnnotationsOffset = 0;\n    // - The offset of the RuntimeInvisibleTypeAnnotations attribute, or 0.\n    int runtimeInvisibleTypeAnnotationsOffset = 0;\n    // - The offset of the Module attribute, or 0.\n    int moduleOffset = 0;\n    // - The offset of the ModulePackages attribute, or 0.\n    int modulePackagesOffset = 0;\n    // - The string corresponding to the ModuleMainClass attribute, or null.\n    String moduleMainClass = null;\n    // - The string corresponding to the NestHost attribute, or null.\n    String nestHostClass = null;\n    // - The offset of the NestMembers attribute, or 0.\n    int nestMembersOffset = 0;\n    // - The non standard attributes (linked with their {@link Attribute#nextAttribute} field).\n    //   This list in the &#x3C;i>reverse order&#x3C;/i> or their order in the ClassFile structure.\n    Attribute attributes = null;\n\n    // 解析 Class 持有的属性\n    int currentAttributeOffset = getFirstAttributeOffset();\n    for (int i = readUnsignedShort(currentAttributeOffset - 2); i > 0; --i) {\n      // Read the attribute_info\'s attribute_name and attribute_length fields.\n      String attributeName = readUTF8(currentAttributeOffset, charBuffer);\n      int attributeLength = readInt(currentAttributeOffset + 2);\n      currentAttributeOffset += 6;\n      // The tests are sorted in decreasing frequency order (based on frequencies observed on\n      // typical classes).\n      if (Constants.SOURCE_FILE.equals(attributeName)) {\n        sourceFile = readUTF8(currentAttributeOffset, charBuffer);\n      } else if (Constants.INNER_CLASSES.equals(attributeName)) {\n        innerClassesOffset = currentAttributeOffset;\n      } else if (Constants.ENCLOSING_METHOD.equals(attributeName)) {\n        enclosingMethodOffset = currentAttributeOffset;\n      } else if (Constants.NEST_HOST.equals(attributeName)) {\n        nestHostClass = readClass(currentAttributeOffset, charBuffer);\n      } else if (Constants.NEST_MEMBERS.equals(attributeName)) {\n        nestMembersOffset = currentAttributeOffset;\n      } else if (Constants.SIGNATURE.equals(attributeName)) {\n        signature = readUTF8(currentAttributeOffset, charBuffer);\n      } else if (Constants.RUNTIME_VISIBLE_ANNOTATIONS.equals(attributeName)) {\n        runtimeVisibleAnnotationsOffset = currentAttributeOffset;\n      } else if (Constants.RUNTIME_VISIBLE_TYPE_ANNOTATIONS.equals(attributeName)) {\n        runtimeVisibleTypeAnnotationsOffset = currentAttributeOffset;\n      } else if (Constants.DEPRECATED.equals(attributeName)) {\n        accessFlags |= Opcodes.ACC_DEPRECATED;\n      } else if (Constants.SYNTHETIC.equals(attributeName)) {\n        accessFlags |= Opcodes.ACC_SYNTHETIC;\n      } else if (Constants.SOURCE_DEBUG_EXTENSION.equals(attributeName)) {\n        sourceDebugExtension =\n            readUTF(currentAttributeOffset, attributeLength, new char[attributeLength]);\n      } else if (Constants.RUNTIME_INVISIBLE_ANNOTATIONS.equals(attributeName)) {\n        runtimeInvisibleAnnotationsOffset = currentAttributeOffset;\n      } else if (Constants.RUNTIME_INVISIBLE_TYPE_ANNOTATIONS.equals(attributeName)) {\n        runtimeInvisibleTypeAnnotationsOffset = currentAttributeOffset;\n      } else if (Constants.MODULE.equals(attributeName)) {\n        moduleOffset = currentAttributeOffset;\n      } else if (Constants.MODULE_MAIN_CLASS.equals(attributeName)) {\n        moduleMainClass = readClass(currentAttributeOffset, charBuffer);\n      } else if (Constants.MODULE_PACKAGES.equals(attributeName)) {\n        modulePackagesOffset = currentAttributeOffset;\n      } else if (Constants.BOOTSTRAP_METHODS.equals(attributeName)) {\n        // This attribute is read in the constructor.\n      } else {\n        Attribute attribute =\n            readAttribute(\n                attributePrototypes,\n                attributeName,\n                currentAttributeOffset,\n                attributeLength,\n                charBuffer,\n                -1,\n                null);\n        attribute.nextAttribute = attributes;\n        attributes = attribute;\n      }\n      currentAttributeOffset += attributeLength;\n    }\n\n    // 第一个 .visit() 。让 ClassVisitor 的实现类处理当前类的版本号, 访问控制标志, 当前类, 结构, 父类, 接口\n    // 具体 visit() 由实现类随意定制。例如，针对于那些有打印功能的访问者实现类，直接打印也不失为一种有效的访问操作\n    // Visit the class declaration. The minor_version and major_version fields start 6 bytes before\n    // the first constant pool entry, which itself starts at cpInfoOffsets[1] - 1 (by definition).\n    classVisitor.visit(\n        readInt(cpInfoOffsets[1] - 7), accessFlags, thisClass, signature, superClass, interfaces);\n\n    // 访问 SourceFile 和 SourceDebugExtenstion 属性\n    // Visit the SourceFile and SourceDebugExtenstion attributes.\n    if ((parsingOptions &#x26; SKIP_DEBUG) == 0\n        &#x26;&#x26; (sourceFile != null || sourceDebugExtension != null)) {\n      classVisitor.visitSource(sourceFile, sourceDebugExtension);\n    }\n\n    // Visit the Module, ModulePackages and ModuleMainClass attributes.\n    if (moduleOffset != 0) {\n      readModule(classVisitor, context, moduleOffset, modulePackagesOffset, moduleMainClass);\n    }\n\n    // Visit the NestHost attribute.\n    if (nestHostClass != null) {\n      classVisitor.visitNestHostExperimental(nestHostClass);\n    }\n\n    // Visit the EnclosingMethod attribute.\n    if (enclosingMethodOffset != 0) {\n      String className = readClass(enclosingMethodOffset, charBuffer);\n      int methodIndex = readUnsignedShort(enclosingMethodOffset + 2);\n      String name = methodIndex == 0 ? null : readUTF8(cpInfoOffsets[methodIndex], charBuffer);\n      String type = methodIndex == 0 ? null : readUTF8(cpInfoOffsets[methodIndex] + 2, charBuffer);\n      classVisitor.visitOuterClass(className, name, type);\n    }\n\n    // Visit the RuntimeVisibleAnnotations attribute.\n    if (runtimeVisibleAnnotationsOffset != 0) {\n      int numAnnotations = readUnsignedShort(runtimeVisibleAnnotationsOffset);\n      int currentAnnotationOffset = runtimeVisibleAnnotationsOffset + 2;\n      while (numAnnotations-- > 0) {\n        // Parse the type_index field.\n        String annotationDescriptor = readUTF8(currentAnnotationOffset, charBuffer);\n        currentAnnotationOffset += 2;\n        // Parse num_element_value_pairs and element_value_pairs and visit these values.\n        currentAnnotationOffset =\n            readElementValues(\n                classVisitor.visitAnnotation(annotationDescriptor, /* visible = */ true),\n                currentAnnotationOffset,\n                /* named = */ true,\n                charBuffer);\n      }\n    }\n\n    // Visit the RuntimeInvisibleAnnotations attribute.\n    if (runtimeInvisibleAnnotationsOffset != 0) {\n      int numAnnotations = readUnsignedShort(runtimeInvisibleAnnotationsOffset);\n      int currentAnnotationOffset = runtimeInvisibleAnnotationsOffset + 2;\n      while (numAnnotations-- > 0) {\n        // Parse the type_index field.\n        String annotationDescriptor = readUTF8(currentAnnotationOffset, charBuffer);\n        currentAnnotationOffset += 2;\n        // Parse num_element_value_pairs and element_value_pairs and visit these values.\n        currentAnnotationOffset =\n            readElementValues(\n                classVisitor.visitAnnotation(annotationDescriptor, /* visible = */ false),\n                currentAnnotationOffset,\n                /* named = */ true,\n                charBuffer);\n      }\n    }\n\n    // Visit the RuntimeVisibleTypeAnnotations attribute.\n    if (runtimeVisibleTypeAnnotationsOffset != 0) {\n      int numAnnotations = readUnsignedShort(runtimeVisibleTypeAnnotationsOffset);\n      int currentAnnotationOffset = runtimeVisibleTypeAnnotationsOffset + 2;\n      while (numAnnotations-- > 0) {\n        // Parse the target_type, target_info and target_path fields.\n        currentAnnotationOffset = readTypeAnnotationTarget(context, currentAnnotationOffset);\n        // Parse the type_index field.\n        String annotationDescriptor = readUTF8(currentAnnotationOffset, charBuffer);\n        currentAnnotationOffset += 2;\n        // Parse num_element_value_pairs and element_value_pairs and visit these values.\n        currentAnnotationOffset =\n            readElementValues(\n                classVisitor.visitTypeAnnotation(\n                    context.currentTypeAnnotationTarget,\n                    context.currentTypeAnnotationTargetPath,\n                    annotationDescriptor,\n                    /* visible = */ true),\n                currentAnnotationOffset,\n                /* named = */ true,\n                charBuffer);\n      }\n    }\n\n    // Visit the RuntimeInvisibleTypeAnnotations attribute.\n    if (runtimeInvisibleTypeAnnotationsOffset != 0) {\n      int numAnnotations = readUnsignedShort(runtimeInvisibleTypeAnnotationsOffset);\n      int currentAnnotationOffset = runtimeInvisibleTypeAnnotationsOffset + 2;\n      while (numAnnotations-- > 0) {\n        // Parse the target_type, target_info and target_path fields.\n        currentAnnotationOffset = readTypeAnnotationTarget(context, currentAnnotationOffset);\n        // Parse the type_index field.\n        String annotationDescriptor = readUTF8(currentAnnotationOffset, charBuffer);\n        currentAnnotationOffset += 2;\n        // Parse num_element_value_pairs and element_value_pairs and visit these values.\n        currentAnnotationOffset =\n            readElementValues(\n                classVisitor.visitTypeAnnotation(\n                    context.currentTypeAnnotationTarget,\n                    context.currentTypeAnnotationTargetPath,\n                    annotationDescriptor,\n                    /* visible = */ false),\n                currentAnnotationOffset,\n                /* named = */ true,\n                charBuffer);\n      }\n    }\n\n    // 访问非标准的属性\n    // Visit the non standard attributes.\n    while (attributes != null) {\n      // Copy and reset the nextAttribute field so that it can also be used in ClassWriter.\n      Attribute nextAttribute = attributes.nextAttribute;\n      attributes.nextAttribute = null;\n      classVisitor.visitAttribute(attributes);\n      attributes = nextAttribute;\n    }\n\n    // Visit the NestedMembers attribute.\n    if (nestMembersOffset != 0) {\n      int numberOfNestMembers = readUnsignedShort(nestMembersOffset);\n      int currentNestMemberOffset = nestMembersOffset + 2;\n      while (numberOfNestMembers-- > 0) {\n        classVisitor.visitNestMemberExperimental(readClass(currentNestMemberOffset, charBuffer));\n        currentNestMemberOffset += 2;\n      }\n    }\n\n    // Visit the InnerClasses attribute.\n    if (innerClassesOffset != 0) {\n      int numberOfClasses = readUnsignedShort(innerClassesOffset);\n      int currentClassesOffset = innerClassesOffset + 2;\n      while (numberOfClasses-- > 0) {\n        classVisitor.visitInnerClass(\n            readClass(currentClassesOffset, charBuffer),\n            readClass(currentClassesOffset + 2, charBuffer),\n            readUTF8(currentClassesOffset + 4, charBuffer),\n            readUnsignedShort(currentClassesOffset + 6));\n        currentClassesOffset += 8;\n      }\n    }\n\n    // 访问字段和方法\n    // Visit the fields and methods.\n    int fieldsCount = readUnsignedShort(currentOffset);\n    currentOffset += 2;\n    while (fieldsCount-- > 0) {\n      currentOffset = readField(classVisitor, context, currentOffset);\n    }\n    int methodsCount = readUnsignedShort(currentOffset);\n    currentOffset += 2;\n    while (methodsCount-- > 0) {\n      currentOffset = readMethod(classVisitor, context, currentOffset);\n    }\n\n    // Visit the end of the class.\n    classVisitor.visitEnd();\n  }\n</code></pre>\n<h3>小结</h3>\n<p>其实，将整个 ClassReader 理解成一个对 .class 字节文件的解析器不失为一种可行的认知。</p>\n<ol>\n<li>在构造方法中完成对 .class 文件 minor_version, major_version 的确认。</li>\n<li>继而完成对整个 Constants_pool 的解析</li>\n<li>以及 BootstarpMethod 属性的定位</li>\n<li>之后在 accept(...) 方法中逐一调用相应的访问者实现类实现对不同内容的访问。</li>\n</ol>\n<p>但是，要注意的是，ClassReader 绝对不会涉及到对其解析的 .class 文件内容的写操作。\n所有的写操作都基于不同的目的，在 ClassVisitor 中实现。</p>\n<h2>ClassVisitor</h2>\n<p>Java .class 的访问者，按照严格的顺序规范逐一调用 </p>\n<p>visit\n[ visitSource ] [ visitModule ][ visitNestHost ][ visitOuterClass ]\n( visitAnnotation | visitTypeAnnotation | visitAttribute )<em>\n( visitNestMember | visitInnerClass | visitField | visitMethod )</em>\nvisitEnd.</p>\n<p>各个 visitXXX 方法</p>\n<pre><code class="language-java">public abstract class ClassVisitor {\n\n  /**\n   * 访问类的首部\n      */\n    public void visit(final int version, final int access, final String name, final String signature, final String superName, final String[] interfaces) {}\n\n  /**\n   * 访问类的源文件名等\n      */\n    public void visitSource(final String source, final String debug) {}\n\n  /**\n   * 访问与类关联的模块\n      */\n    public ModuleVisitor visitModule(final String name, final int access, final String version) {}\n\n  public void visitOuterClass(final String owner, final String name, final String descriptor) {}\n\n  public AnnotationVisitor visitAnnotation(final String descriptor, final boolean visible) {}\n\n  public AnnotationVisitor visitTypeAnnotation(\n      final int typeRef, final TypePath typePath, final String descriptor, final boolean visible) {}\n\n  public void visitAttribute(final Attribute attribute) {}\n\n  public void visitInnerClass(\n      final String name, final String outerName, final String innerName, final int access) {}\n\n  /**\n   * 访问类的变量\n      */\n    public FieldVisitor visitField(\n      final int access,\n      final String name,\n      final String descriptor,\n      final String signature,\n      final Object value) {}\n\n  /**\n   * 访问类的方法\n      */\n    public MethodVisitor visitMethod(\n      final int access,\n      final String name,\n      final String descriptor,\n      final String signature,\n      final String[] exceptions) {}\n\n  public void visitEnd() {}\n}\n</code></pre>\n<p>随着 visitXxx() 方法的逐一执行，ClassVisitor 将对当前的 .class 文件越来越熟悉，并逐渐补全常量池(由 SymbolTable 持有并维护)</p>\n<h2>总结</h2>\n<p>到此为止，对整个 ClassReader &#x26; ClassVisitor 将有一个基础而简单的印象。</p>\n<p>ClassReader 通过对 .class 文件字节码的解析而获得对这个类的具体印象(更多的偏向是随意访问 .class 的各种细节)。</p>\n<p>ClassVisitor 通过 visitXxx(...) 方法，由其它对象(可以是 ClassReader, 也可以直接是 Coder)逐渐对其开放一些 .class 的细节，\n但需要 ClassVisitor 自行维护获得的内容(如果有必要的话)。由此得到对 .class 全部内容的了解(当然，如果本身 visitXxx() 得到的内容不全，则了解的自然有限)。</p>\n<pre><code class="language-plain">  __                    __                  \n / _| __ _ _ __   __ _ / _| ___ _ __   __ _ \n| |_ / _` | \'_ \\ / _` | |_ / _ \\ \'_ \\ / _` |\n|  _| (_| | | | | (_| |  _|  __/ | | | (_| |\n|_|  \\__,_|_| |_|\\__, |_|  \\___|_| |_|\\__, |\n                 |___/                |___/ \n</code></pre>'}}},MDTK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){var t=n("EhLH");return{page:t.default||t}}])},RNiq:function(t,e,n){"use strict";n.r(e);var s=n("q1tI"),i=n.n(s),r=n("YFqc"),a=n.n(r),o=n("0o6o");e.default=function(){return i.a.createElement(o.a,null,i.a.createElement("p",null,"ffutop's blog"),i.a.createElement(a.a,{href:"/about",as:"/blog/about"},i.a.createElement("a",null,"About Me")))}}},[["MDTK","5d41","9da1","ad9d"]]]);