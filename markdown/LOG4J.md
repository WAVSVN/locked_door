LOG4J

dangerous for old java runtime enviornments 

attacks the logging system in java, a system many programs and servers use to provide logs of activity 
this exploit \ vulnerability is allows a malicious actor to execute arbitrary code on a victim machine 


public class Log4jRCE.java
[ the logging component of java ]

versions 2.0-beta7 through version 2.17.0 

Apache's official website doesnt mention 2.13.2 specifically, but it stands to reason that it would fall within this vulnerable range 



2.13.2 (2020-04-23)

Changes
- added:

Provide a Log4j implementation of System.Logger. (for LOG4J2-1360 by Ralph Goers, Kevin Leturc)
Added EventLookup to retrieve fields from the log event. (for LOG4J2-2807 by Ralph Goers)


2.17.0 (2021-12-17)

The major changes contained in this release include:

Address CVE-2021-45105 by disabling recursive evaluation of Lookups during log event processing. Recursive evaluation is still allowed while generating the configuration.

The JndiLookup, JndiContextSelector, and JMSAppender now require individual system properties to be enabled.

Remove LDAP and LDAPS as supported protocols from JNDI.



\\\\\


CVE-2021-45105 Detail

Apache Log4j2 versions [2.0-alpha1 through 2.16.0] (excluding 2.12.3 and 2.3.1) did not protect from uncontrolled recursion from self-referential lookups. 
This allows an attacker with control over Thread Context Map data to cause a denial of service when a crafted string is interpreted. This issue was fixed in Log4j 2.17.0, 2.12.3, and 2.3.1.

- uncontrolled recursion ( essentially an infinite lookup variable that can result in a process crash ) DoS 
- denial of service by abusing thread context map data whan a crafted string is interptreted ^^^



CVE-2021-44228 Detail

Apache Log4j2 [2.0-beta9 through 2.15.0] (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled.

- vulnerable JNDI features
- 


\\\\\

common weakness enumerations

 { way to identify common sources of software flaws, helping security 
 professionals discuss, find, and deal with the causes of various software 
 security vulnerabilities if they're found within system architechture, design, or code.}

CWE-20   Improper Input Validation   NIST Foundation
CWE-674  Uncontrolled Recursion      NIST Foundation







2.15.0 (2021-12-06)

This release contains a number of bug fixes and minor enhancements which are listed below.

The Log4j team has been made aware of a security vulnerability, CVE-2021-44228, that has been addressed in Log4j 2.15.0.

Log4j’s JNDI support has not restricted what names could be resolved. Some protocols are unsafe or can allow remote code execution. Log4j now limits the protocols by default to only java, ldap, and ldaps and limits the ldap protocols to only accessing Java primitive objects by default served on the local host.

One vector that allowed exposure to this vulnerability was Log4j’s allowance of Lookups to appear in log messages. As of Log4j 2.15.0 this feature is now disabled by default. While an option has been provided to enable Lookups in this fashion, users are strongly discouraged from enabling it.

Users who cannot upgrade to 2.15.0 can mitigate the exposure by:

Users of Log4j 2.10 or greater may add -Dlog4j.formatMsgNoLookups=true as a command line option or add log4j.formatMsgNoLookups=true to a log4j2.component.properties file on the classpath to prevent lookups in log event messages.

Users since Log4j 2.7 may specify %{nolookups} in the PatternLayout configuration to prevent lookups in log event messages.

Remove the JndiLookup and JndiManager classes from the log4j-core JAR. Removal of the JndiManager will cause the JndiContextSelector and JMSAppender to no longer function.


https://logging.apache.org/log4j/2.x/release-notes/index.html
https://logging.apache.org/log4j/2.x/release-notes/2.13.2.html
https://logging.apache.org/log4j/2.x/release-notes/2.17.0.html
https://nvd.nist.gov/vuln/detail/CVE-2021-45105?s=09
https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228