"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40240],{93645:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(66816),l=t(71871),s=t(34369),d=["components"],u={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","Merkle Key Collections"]},c=void 0,p={unversionedId:"verifiable_credentials/revoke",id:"verifiable_credentials/revoke",title:"Verifiable Credential Revocation",description:"Explain how a VC is revoked",source:"@site/external/identity.rs/documentation/docs/verifiable_credentials/revoke.mdx",sourceDirName:"verifiable_credentials",slug:"/verifiable_credentials/revoke",permalink:"/identity.rs/verifiable_credentials/revoke",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/verifiable_credentials/revoke.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","Merkle Key Collections"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/identity.rs/verifiable_credentials/create"},next:{title:"Merkle Key Collection",permalink:"/identity.rs/verifiable_credentials/merkle_key_collection"}},m=[{value:"Example",id:"example",children:[],level:2}],h={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain how Verifiable Credentials are revoked using Merkle Key Collections"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how you can revoke a ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential(VC)")," by removing a verification method (public key) from the DID Document of the Issuer. This means the VC can no longer be validated. This would invalidate every VC signed with the same public key, meaning the Issuer would have to sign every VC with a different key."),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//!\n//! The Verifiable Credential is revoked by actually removing a verification method (public key)\n//! from the DID Document of the Issuer.\n//! As such, the Verifiable Credential can no longer be validated.\n//! This would invalidate every Verifiable Credential signed with the same public key, therefore the\n//! issuer would have to sign every VC with a different key. Have a look at the Merkle Key example\n//! on how to do that practically.\n//!\n//! cargo run --example did_history\n\nuse identity::core::Timestamp;\nuse identity::credential::Credential;\nuse identity::did::MethodScope;\nuse identity::did::DID;\nuse identity::iota::ClientMap;\nuse identity::iota::CredentialValidation;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::IotaVerificationMethod;\nuse identity::iota::Receipt;\nuse identity::iota::Result;\nuse identity::prelude::*;\n\nmod common;\nmod create_did;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: ClientMap = ClientMap::new();\n\n  // Create a signed VC\n  let (issuer, signed_vc) = create_vc_helper(&client).await?;\n\n  // Remove the public key that signed the VC from the issuer\'s DID document\n  // - effectively revoking the VC as it will no longer be able to verified.\n  let (mut issuer_doc, issuer_key, issuer_receipt) = issuer;\n  issuer_doc.remove_method(issuer_doc.id().to_url().join("#newKey")?)?;\n  issuer_doc.metadata.previous_message_id = *issuer_receipt.message_id();\n  issuer_doc.metadata.updated = Timestamp::now_utc();\n  issuer_doc.sign_self(issuer_key.private(), &issuer_doc.default_signing_method()?.id())?;\n  // This is an integration chain update, so we publish the full document.\n  let update_receipt = client.publish_document(&issuer_doc).await?;\n\n  // Log the resulting Identity update\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "Issuer Update Transaction > {}",\n    explorer.message_url(update_receipt.message_id())?\n  );\n  println!(\n    "Explore the Issuer DID Document > {}",\n    explorer.resolver_url(issuer_doc.id())?\n  );\n\n  // Check the verifiable credential\n  let validation: CredentialValidation = common::check_credential(&client, &signed_vc).await?;\n  println!("VC verification result (false = revoked) > {:#?}", validation.verified);\n  assert!(!validation.verified);\n  Ok(())\n}\n\n/// Convenience function for creating a verifiable `Credential`, signed with a VerificationMethod\n/// with tag #newKey.\n///\n/// See "create_vc" example for explanation.\nasync fn create_vc_helper(\n  client: &ClientMap,\n) -> Result<(\n  (IotaDocument, KeyPair, Receipt), // issuer\n  Credential,                       // signed verifiable credential\n)> {\n  // Create a signed DID Document/KeyPair for the credential issuer (see create_did.rs).\n  let (issuer_doc, issuer_key, issuer_receipt) = create_did::run().await?;\n\n  // Create a signed DID Document/KeyPair for the credential subject (see create_did.rs).\n  let (subject_doc, ..) = create_did::run().await?;\n\n  // Add a new VerificationMethod to the issuer with tag #newKey\n  // NOTE: this allows us to revoke it without removing the default signing key.\n  let (issuer_doc, issuer_new_key, issuer_updated_receipt) =\n    common::add_new_key(client, &issuer_doc, &issuer_key, &issuer_receipt).await?;\n\n  // Create an unsigned Credential with claims about `subject` specified by `issuer`.\n  let mut credential: Credential = common::issue_degree(&issuer_doc, &subject_doc)?;\n\n  // Sign the Credential with the issuer\'s #newKey private key, so we can later revoke it\n  issuer_doc.sign_data(\n    &mut credential,\n    issuer_new_key.private(),\n    issuer_doc.default_signing_method()?.id(),\n  )?;\n\n  let issuer = (issuer_doc, issuer_key, issuer_updated_receipt);\n  Ok((issuer, credential))\n}\n\n/// Convenience function for adding a new `VerificationMethod` with tag #newKey to a DID document\n/// and performing an integration chain update, publishing it to the Tangle.\n///\n/// See "manipulate_did" for further explanation.\npub async fn add_new_key(\n  client: &ClientMap,\n  doc: &IotaDocument,\n  key: &KeyPair,\n  receipt: &Receipt,\n) -> Result<(IotaDocument, KeyPair, Receipt)> {\n  let mut updated_doc = doc.clone();\n\n  // Add #newKey to the document\n  let new_key: KeyPair = KeyPair::new_ed25519()?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::from_did(updated_doc.id().clone(), new_key.type_(), new_key.public(), "newKey")?;\n  assert!(updated_doc\n    .insert_method(method, MethodScope::VerificationMethod)\n    .is_ok());\n\n  // Prepare the update\n  updated_doc.metadata.previous_message_id = *receipt.message_id();\n  updated_doc.metadata.updated = Timestamp::now_utc();\n  updated_doc.sign_self(key.private(), &updated_doc.default_signing_method()?.id())?;\n\n  // Publish the update to the Tangle\n  let update_receipt: Receipt = client.publish_document(&updated_doc).await?;\n  Ok((updated_doc, new_key, update_receipt))\n}\n')),(0,r.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, Config, Timestamp} from \'@iota/identity-wasm\';\nimport {createVC} from \'./create_vc\';\nimport {logExplorerUrl, logResolverUrl} from \'./utils\';\n\n/**\n This example shows how to revoke a verifiable credential.\n The Verifiable Credential is revoked by actually removing a verification method (public key) from the DID Document of the Issuer.\n As such, the Verifiable Credential can no longer be validated.\n This would invalidate every Verifiable Credential signed with the same public key, therefore the issuer would have to sign every VC with a different key.\n Have a look at the Merkle Key example on how to do that practically.\n\n Note that this example uses the "main" network, if you are writing code against the test network then most function\n calls will need to include information about the network, since this is not automatically inferred from the\n arguments in all cases currently.\n\n We recommend that you ALWAYS using a CLIENT_CONFIG parameter that you define when calling any functions that take a\n ClientConfig object. This will ensure that all the API calls use a consistent node and network.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function revokeVC(clientConfig) {\n    // Create a default client configuration from the parent config network.\n    const config = Config.fromNetwork(clientConfig.network);\n\n    // Create a client instance to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    // Creates new identities and a VC (see "create_vc" example)\n    const {alice, issuer, signedVc} = await createVC(clientConfig);\n\n    // Remove the public key that signed the VC - effectively revoking the VC as it will no longer be able to verify\n    issuer.doc.removeMethod(issuer.doc.id.toUrl().join("#newKey"));\n    issuer.doc.metadataPreviousMessageId = issuer.updatedMessageId;\n    issuer.doc.metadataUpdated = Timestamp.nowUTC();\n    issuer.doc.signSelf(issuer.key, issuer.doc.defaultSigningMethod().id.toString());\n    // This is an integration chain update, so we publish the full document.\n    const {messageId} = await client.publishDocument(issuer.doc);\n\n    // Log the resulting Identity update\n    logExplorerUrl("Issuer Update Transaction:", clientConfig.explorer, messageId);\n    logResolverUrl("Explore the Issuer DID Document:", clientConfig.explorer, issuer.doc.id.toString());\n\n    // Check the verifiable credential\n    const result = await client.checkCredential(signedVc.toString());\n    console.log(`VC verification result (false = revoked): ${result.verified}`);\n}\n\nexport {revokeVC};\n'))))}f.isMDXComponent=!0},71871:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},66816:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(83117),a=t(67294),r=t(5730),o=t(54179);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(59137),d=t(86010),u="tabItem_1uMI";function c(e){var n,t,i,r=e.lazy,o=e.block,c=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=l(),k=_.tabGroupChoices,b=_.setTabGroupChoices,w=(0,a.useState)(y),C=w[0],x=w[1],I=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var V=k[m];null!=V&&V!==C&&v.some((function(e){return e.value===V}))&&x(V)}var D=function(e){var n=e.currentTarget,t=I.indexOf(n),i=v[t].value;i!==C&&(T(n),x(i),null!=m&&b(m,i))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=I.indexOf(e.currentTarget)+1;t=I[i]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":C===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:D,onClick:D},null!=t?t:n)}))),r?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,r.Z)();return a.createElement(c,(0,i.Z)({key:String(n)},e))}}}]);