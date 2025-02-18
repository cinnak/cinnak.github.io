---
layout: post
title: domain 4
permalink: /posts/domain4
tags: CISSP
---
[TOC]
## 4.1 Apply secure design principles in network architectures 
### 4.1.1 Open System Interconnection (OSI) and Transmission Control Protocol/Internet Protocol (TCP/IP) models
#### 4.1.1.1 OSI model
- developed by ISO
- mnemonics for OSI layers
	- 1-7: Please Do Not Throw Sausage Pizza Away
		- Decapsulation ---> De-packaging : Unwinding the message as it **goes up** to the layers of OSI Model.
	- 7-1: All People Seem To Need Data Processing
		- Encapsulation ---> Packaging : When the payload (message) has the headers and footers added as the message **goes down to layers** in OSI model.
- OSI layers overview

| layer          | protocols/standards     | devices                                | data format                        |
| -------------- | ----------------------- | -------------------------------------- | ---------------------------------- |
| 7 Application  | DNS, DHCP, HTTP, SSH    | gateway, server, workstation, firewall | data stream                        |
| 6 Presentation | ASCII                   | __                                     | data stream                        |
| 5 Session      | SQL, SIP, PTP           | __                                     | data stream                        |
| 4 Transport    | TCP, UDP                | gateway, firewall                      | **S**egment(TCP)<br>Datagram (UDP) |
| 3 Network      | IP, ICMP, IGMP          | router                                 | **P**ackets/datagrams              |
| 2 Data link    | IEEE 802.3, IEEE 802.11 | switch, bridge                         | **F**rames                         |
| 1 Physical     | Signaling standards     | hub, cable                             | **B**its                           |


- mnemonics for data format: Some People Forget Birthday

### 4.1.2 IPv4 and IPv6
(e.g., unicast, broadcast, multicast, anycast)
### 4.1.3 Secure protocols 
e.g., 
- Internet Protocol Security (IPSec)
- Secure Shell (SSH)
- Secure Sockets Layer (SSL)/Transport Layer Security (TLS)
### 4.1.4 Implications of multilayer protocols
### 4.1.5 Converged protocols 
e.g., 
- Internet Small Computer Systems Interface (iSCSI)
- Voice over Internet Protocol (VoIP)
- InfiniBand over Ethernet
- Compute Express Link
### 4.1.6 Transport architecture 
e.g., 
- topology 
- data/control/management plane
- cut-through/store-and-forward
### 4.1.7 Performance metrics 
e.g., bandwidth, latency, jitter, throughput, signal-to-noise ratio
### 4.1.8 Traffic flows 
e.g., north-south, east-west
### 4.1.9 Physical segmentation 
e.g., in-band, out-of-band, air-gapped
### 4.1.10 Logical segmentation 
e.g., 
- virtual local area networks (VLANs)
- virtual private networks (VPNs)
- virtual routing and forwarding
- virtual domain
### 4.1.11 Micro-segmentation
e.g., 
- network overlays/encapsulation
- distributed firewalls
- routers
- intrusion detection system (IDS)/intrusion prevention system (IPS)
- zero trust
### 4.1.12 Edge networks 
e.g., ingress/egress, peering
### 4.1.13 Wireless networks 
e.g., Bluetooth, Wi-Fi, Zigbee, satellite
### 4.1.14 Cellular/mobile networks (e.g., 4G, 5G)
### 4.1.15 Content distribution networks (CDN)
### 4.1.16 Software defined networks (SDN) 
e.g., 
- application programming interface (API)
- Software-Defined Wide-Area Network
- network functions virtualization
### 4.1.17 Virtual Private Cloud (VPC)
### 4.1.18 Monitoring and management 
e.g., network observability, traffic flow/shaping, capacity management, fault detection and handling
## 4.2 Secure network components 
### 4.2.1 Operation of infrastructure 
e.g., redundant power, warranty, support
### 4.2.2 Transmission media 
e.g., physical security of media, signal propagation quality
### 4.2.3 Network Access Control (NAC) systems 
e.g., physical, and virtual solutions
### 4.2.4 Endpoint security 
e.g., host-based
### 4.3 Implement secure communication channels according to design 
### 4.3.1 Voice, video, and collaboration 
e.g., conferencing, Zoom rooms
### 4.3.2 Remote access
e.g., network administrative functions
### 4.3.3 Data communications 
e.g., backhaul networks, satellite
### 4.3.4 Third-party connectivity 
e.g., telecom providers, hardware support




