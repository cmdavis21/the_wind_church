/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ARN: `scalar.ARN` as const,
	AbandonedCheckout:{
		lineItems:{

		}
	},
	AbandonedCheckoutLineItem:{
		discountAllocations:{

		}
	},
	AbandonedCheckoutSortKeys: "enum" as const,
	Abandonment:{
		productsAddedToCart:{

		},
		productsViewed:{

		}
	},
	AbandonmentAbandonmentType: "enum" as const,
	AbandonmentDeliveryState: "enum" as const,
	AbandonmentEmailState: "enum" as const,
	AbandonmentEmailStateUpdateUserErrorCode: "enum" as const,
	AbandonmentUpdateActivitiesDeliveryStatusesUserErrorCode: "enum" as const,
	AccountType: "enum" as const,
	AdjustmentsSortKeys: "enum" as const,
	AppCatalog:{
		apps:{

		}
	},
	AppDeveloperType: "enum" as const,
	AppInstallation:{
		allSubscriptions:{
			sortKey:"AppSubscriptionSortKeys"
		},
		credits:{
			sortKey:"AppTransactionSortKeys"
		},
		metafield:{

		},
		metafields:{

		},
		oneTimePurchases:{
			sortKey:"AppTransactionSortKeys"
		},
		revenueAttributionRecords:{
			sortKey:"AppRevenueAttributionRecordSortKeys"
		}
	},
	AppInstallationCategory: "enum" as const,
	AppInstallationPrivacy: "enum" as const,
	AppInstallationSortKeys: "enum" as const,
	AppPlanInput:{
		appUsagePricingDetails:"AppUsagePricingInput",
		appRecurringPricingDetails:"AppRecurringPricingInput"
	},
	AppPricingInterval: "enum" as const,
	AppPublicCategory: "enum" as const,
	AppPurchaseStatus: "enum" as const,
	AppRecurringPricingInput:{
		interval:"AppPricingInterval",
		price:"MoneyInput",
		discount:"AppSubscriptionDiscountInput"
	},
	AppRevenueAttributionRecordSortKeys: "enum" as const,
	AppRevenueAttributionType: "enum" as const,
	AppRevokeAccessScopesAppRevokeScopeErrorCode: "enum" as const,
	AppSubscriptionDiscountInput:{
		value:"AppSubscriptionDiscountValueInput"
	},
	AppSubscriptionDiscountValueInput:{
		amount:"Decimal"
	},
	AppSubscriptionLineItem:{
		usageRecords:{
			sortKey:"AppUsageRecordSortKeys"
		}
	},
	AppSubscriptionLineItemInput:{
		plan:"AppPlanInput"
	},
	AppSubscriptionReplacementBehavior: "enum" as const,
	AppSubscriptionSortKeys: "enum" as const,
	AppSubscriptionStatus: "enum" as const,
	AppSubscriptionTrialExtendUserErrorCode: "enum" as const,
	AppTransactionSortKeys: "enum" as const,
	AppUninstallAppUninstallErrorCode: "enum" as const,
	AppUsagePricingInput:{
		cappedAmount:"MoneyInput"
	},
	AppUsageRecordSortKeys: "enum" as const,
	Article:{
		comments:{

		},
		commentsCount:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		translations:{

		}
	},
	ArticleBlogInput:{

	},
	ArticleCreateInput:{
		body:"HTML",
		summary:"HTML",
		publishDate:"DateTime",
		metafields:"MetafieldInput",
		image:"ArticleImageInput",
		author:"AuthorInput"
	},
	ArticleCreateUserErrorCode: "enum" as const,
	ArticleDeleteUserErrorCode: "enum" as const,
	ArticleImageInput:{

	},
	ArticleSortKeys: "enum" as const,
	ArticleTagSort: "enum" as const,
	ArticleUpdateInput:{
		body:"HTML",
		summary:"HTML",
		publishDate:"DateTime",
		metafields:"MetafieldInput",
		image:"ArticleImageInput",
		author:"AuthorInput"
	},
	ArticleUpdateUserErrorCode: "enum" as const,
	AttributeInput:{

	},
	Audience: "enum" as const,
	AuthorInput:{

	},
	AutomaticDiscountSortKeys: "enum" as const,
	BackupRegionUpdateInput:{
		countryCode:"CountryCode"
	},
	BadgeType: "enum" as const,
	BalanceTransactionSortKeys: "enum" as const,
	BankingFinanceAppAccess: "enum" as const,
	BigInt: `scalar.BigInt` as const,
	BillingAttemptUserErrorCode: "enum" as const,
	Blog:{
		articles:{

		},
		articlesCount:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		translations:{

		}
	},
	BlogCreateInput:{
		metafields:"MetafieldInput",
		commentPolicy:"CommentPolicy"
	},
	BlogCreateUserErrorCode: "enum" as const,
	BlogDeleteUserErrorCode: "enum" as const,
	BlogSortKeys: "enum" as const,
	BlogUpdateInput:{
		metafields:"MetafieldInput",
		commentPolicy:"CommentPolicy"
	},
	BlogUpdateUserErrorCode: "enum" as const,
	BulkMutationErrorCode: "enum" as const,
	BulkOperationErrorCode: "enum" as const,
	BulkOperationStatus: "enum" as const,
	BulkOperationType: "enum" as const,
	BulkOperationUserErrorCode: "enum" as const,
	BulkProductResourceFeedbackCreateUserErrorCode: "enum" as const,
	BundlesDraftOrderBundleLineItemComponentInput:{

	},
	BusinessCustomerErrorCode: "enum" as const,
	BuyerExperienceConfigurationInput:{
		deposit:"DepositInput"
	},
	BuyerSignalInput:{
		countryCode:"CountryCode"
	},
	CalculateExchangeLineItemInput:{
		appliedDiscount:"ExchangeLineItemAppliedDiscountInput"
	},
	CalculateReturnInput:{
		returnLineItems:"CalculateReturnLineItemInput",
		exchangeLineItems:"CalculateExchangeLineItemInput",
		returnShippingFee:"ReturnShippingFeeInput"
	},
	CalculateReturnLineItemInput:{
		restockingFee:"RestockingFeeInput"
	},
	CalculatedOrder:{
		addedDiscountApplications:{

		},
		addedLineItems:{

		},
		lineItems:{

		},
		stagedChanges:{

		}
	},
	CalculatedShippingLineStagedStatus: "enum" as const,
	CarrierServiceCreateUserErrorCode: "enum" as const,
	CarrierServiceDeleteUserErrorCode: "enum" as const,
	CarrierServiceSortKeys: "enum" as const,
	CarrierServiceUpdateUserErrorCode: "enum" as const,
	CartTransform:{
		metafield:{

		},
		metafields:{

		}
	},
	CartTransformCreateUserErrorCode: "enum" as const,
	CartTransformDeleteUserErrorCode: "enum" as const,
	CashTrackingSession:{
		adjustments:{
			sortKey:"AdjustmentsSortKeys"
		},
		cashTransactions:{
			sortKey:"CashTrackingSessionTransactionsSortKeys"
		}
	},
	CashTrackingSessionTransactionsSortKeys: "enum" as const,
	CashTrackingSessionsSortKeys: "enum" as const,
	CatalogContextInput:{

	},
	CatalogCreateInput:{
		status:"CatalogStatus",
		context:"CatalogContextInput"
	},
	CatalogSortKeys: "enum" as const,
	CatalogStatus: "enum" as const,
	CatalogType: "enum" as const,
	CatalogUpdateInput:{
		status:"CatalogStatus",
		context:"CatalogContextInput"
	},
	CatalogUserErrorCode: "enum" as const,
	Channel:{
		collectionPublicationsV3:{

		},
		collections:{

		},
		hasCollection:{

		},
		productPublications:{

		},
		productPublicationsV3:{

		},
		products:{

		},
		productsCount:{

		}
	},
	CheckoutBrandingBackground: "enum" as const,
	CheckoutBrandingBackgroundStyle: "enum" as const,
	CheckoutBrandingBorder: "enum" as const,
	CheckoutBrandingBorderStyle: "enum" as const,
	CheckoutBrandingBorderWidth: "enum" as const,
	CheckoutBrandingButtonColorRolesInput:{
		hover:"CheckoutBrandingColorRolesInput"
	},
	CheckoutBrandingButtonInput:{
		background:"CheckoutBrandingBackgroundStyle",
		border:"CheckoutBrandingSimpleBorder",
		cornerRadius:"CheckoutBrandingCornerRadius",
		blockPadding:"CheckoutBrandingSpacing",
		inlinePadding:"CheckoutBrandingSpacing",
		typography:"CheckoutBrandingTypographyStyleInput"
	},
	CheckoutBrandingBuyerJourneyInput:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingCartLinkContentType: "enum" as const,
	CheckoutBrandingCartLinkInput:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingCheckboxInput:{
		cornerRadius:"CheckoutBrandingCornerRadius"
	},
	CheckoutBrandingChoiceListGroupInput:{
		spacing:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingChoiceListInput:{
		group:"CheckoutBrandingChoiceListGroupInput"
	},
	CheckoutBrandingColorGlobalInput:{

	},
	CheckoutBrandingColorRolesInput:{

	},
	CheckoutBrandingColorSchemeInput:{
		base:"CheckoutBrandingColorRolesInput",
		control:"CheckoutBrandingControlColorRolesInput",
		primaryButton:"CheckoutBrandingButtonColorRolesInput",
		secondaryButton:"CheckoutBrandingButtonColorRolesInput"
	},
	CheckoutBrandingColorSchemeSelection: "enum" as const,
	CheckoutBrandingColorSchemesInput:{
		scheme1:"CheckoutBrandingColorSchemeInput",
		scheme2:"CheckoutBrandingColorSchemeInput",
		scheme3:"CheckoutBrandingColorSchemeInput",
		scheme4:"CheckoutBrandingColorSchemeInput"
	},
	CheckoutBrandingColorSelection: "enum" as const,
	CheckoutBrandingColorsInput:{
		global:"CheckoutBrandingColorGlobalInput",
		schemes:"CheckoutBrandingColorSchemesInput"
	},
	CheckoutBrandingContainerDividerInput:{
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingContentInput:{
		divider:"CheckoutBrandingContainerDividerInput"
	},
	CheckoutBrandingControlColorRolesInput:{
		selected:"CheckoutBrandingColorRolesInput"
	},
	CheckoutBrandingControlInput:{
		color:"CheckoutBrandingColorSelection",
		cornerRadius:"CheckoutBrandingCornerRadius",
		border:"CheckoutBrandingSimpleBorder",
		labelPosition:"CheckoutBrandingLabelPosition"
	},
	CheckoutBrandingCornerRadius: "enum" as const,
	CheckoutBrandingCornerRadiusVariablesInput:{

	},
	CheckoutBrandingCustomFontGroupInput:{
		base:"CheckoutBrandingCustomFontInput",
		bold:"CheckoutBrandingCustomFontInput",
		loadingStrategy:"CheckoutBrandingFontLoadingStrategy"
	},
	CheckoutBrandingCustomFontInput:{

	},
	CheckoutBrandingCustomizationsInput:{
		global:"CheckoutBrandingGlobalInput",
		header:"CheckoutBrandingHeaderInput",
		headingLevel1:"CheckoutBrandingHeadingLevelInput",
		headingLevel2:"CheckoutBrandingHeadingLevelInput",
		headingLevel3:"CheckoutBrandingHeadingLevelInput",
		footer:"CheckoutBrandingFooterInput",
		main:"CheckoutBrandingMainInput",
		orderSummary:"CheckoutBrandingOrderSummaryInput",
		control:"CheckoutBrandingControlInput",
		textField:"CheckoutBrandingTextFieldInput",
		checkbox:"CheckoutBrandingCheckboxInput",
		select:"CheckoutBrandingSelectInput",
		primaryButton:"CheckoutBrandingButtonInput",
		secondaryButton:"CheckoutBrandingButtonInput",
		favicon:"CheckoutBrandingImageInput",
		choiceList:"CheckoutBrandingChoiceListInput",
		merchandiseThumbnail:"CheckoutBrandingMerchandiseThumbnailInput",
		expressCheckout:"CheckoutBrandingExpressCheckoutInput",
		content:"CheckoutBrandingContentInput",
		buyerJourney:"CheckoutBrandingBuyerJourneyInput",
		cartLink:"CheckoutBrandingCartLinkInput",
		divider:"CheckoutBrandingDividerStyleInput"
	},
	CheckoutBrandingDesignSystemInput:{
		colors:"CheckoutBrandingColorsInput",
		typography:"CheckoutBrandingTypographyInput",
		cornerRadius:"CheckoutBrandingCornerRadiusVariablesInput"
	},
	CheckoutBrandingDividerStyleInput:{
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth"
	},
	CheckoutBrandingExpressCheckoutButtonInput:{
		cornerRadius:"CheckoutBrandingCornerRadius"
	},
	CheckoutBrandingExpressCheckoutInput:{
		button:"CheckoutBrandingExpressCheckoutButtonInput"
	},
	CheckoutBrandingFontGroupInput:{
		shopifyFontGroup:"CheckoutBrandingShopifyFontGroupInput",
		customFontGroup:"CheckoutBrandingCustomFontGroupInput"
	},
	CheckoutBrandingFontLoadingStrategy: "enum" as const,
	CheckoutBrandingFontSizeInput:{

	},
	CheckoutBrandingFooterAlignment: "enum" as const,
	CheckoutBrandingFooterContentInput:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingFooterInput:{
		position:"CheckoutBrandingFooterPosition",
		alignment:"CheckoutBrandingFooterAlignment",
		content:"CheckoutBrandingFooterContentInput",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		padding:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingFooterPosition: "enum" as const,
	CheckoutBrandingGlobalCornerRadius: "enum" as const,
	CheckoutBrandingGlobalInput:{
		cornerRadius:"CheckoutBrandingGlobalCornerRadius",
		typography:"CheckoutBrandingTypographyStyleGlobalInput"
	},
	CheckoutBrandingHeaderAlignment: "enum" as const,
	CheckoutBrandingHeaderCartLinkInput:{
		contentType:"CheckoutBrandingCartLinkContentType",
		image:"CheckoutBrandingImageInput"
	},
	CheckoutBrandingHeaderInput:{
		alignment:"CheckoutBrandingHeaderAlignment",
		position:"CheckoutBrandingHeaderPosition",
		logo:"CheckoutBrandingLogoInput",
		banner:"CheckoutBrandingImageInput",
		cartLink:"CheckoutBrandingHeaderCartLinkInput",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		padding:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingHeaderPosition: "enum" as const,
	CheckoutBrandingHeadingLevelInput:{
		typography:"CheckoutBrandingTypographyStyleInput"
	},
	CheckoutBrandingImageInput:{

	},
	CheckoutBrandingInput:{
		designSystem:"CheckoutBrandingDesignSystemInput",
		customizations:"CheckoutBrandingCustomizationsInput"
	},
	CheckoutBrandingLabelPosition: "enum" as const,
	CheckoutBrandingLogoInput:{
		image:"CheckoutBrandingImageInput",
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingMainInput:{
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		backgroundImage:"CheckoutBrandingImageInput",
		divider:"CheckoutBrandingContainerDividerInput",
		section:"CheckoutBrandingMainSectionInput"
	},
	CheckoutBrandingMainSectionInput:{
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		background:"CheckoutBrandingBackground",
		cornerRadius:"CheckoutBrandingCornerRadius",
		border:"CheckoutBrandingSimpleBorder",
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		shadow:"CheckoutBrandingShadow",
		padding:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingMerchandiseThumbnailBadgeBackground: "enum" as const,
	CheckoutBrandingMerchandiseThumbnailBadgeInput:{
		background:"CheckoutBrandingMerchandiseThumbnailBadgeBackground"
	},
	CheckoutBrandingMerchandiseThumbnailInput:{
		border:"CheckoutBrandingSimpleBorder",
		cornerRadius:"CheckoutBrandingCornerRadius",
		fit:"CheckoutBrandingObjectFit",
		badge:"CheckoutBrandingMerchandiseThumbnailBadgeInput"
	},
	CheckoutBrandingObjectFit: "enum" as const,
	CheckoutBrandingOrderSummaryInput:{
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		backgroundImage:"CheckoutBrandingImageInput",
		divider:"CheckoutBrandingContainerDividerInput",
		section:"CheckoutBrandingOrderSummarySectionInput"
	},
	CheckoutBrandingOrderSummarySectionInput:{
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		background:"CheckoutBrandingBackground",
		cornerRadius:"CheckoutBrandingCornerRadius",
		border:"CheckoutBrandingSimpleBorder",
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		shadow:"CheckoutBrandingShadow",
		padding:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingSelectInput:{
		border:"CheckoutBrandingBorder",
		typography:"CheckoutBrandingTypographyStyleInput"
	},
	CheckoutBrandingShadow: "enum" as const,
	CheckoutBrandingShopifyFontGroupInput:{
		loadingStrategy:"CheckoutBrandingFontLoadingStrategy"
	},
	CheckoutBrandingSimpleBorder: "enum" as const,
	CheckoutBrandingSpacing: "enum" as const,
	CheckoutBrandingSpacingKeyword: "enum" as const,
	CheckoutBrandingTextFieldInput:{
		border:"CheckoutBrandingBorder",
		typography:"CheckoutBrandingTypographyStyleInput"
	},
	CheckoutBrandingTypographyFont: "enum" as const,
	CheckoutBrandingTypographyInput:{
		size:"CheckoutBrandingFontSizeInput",
		primary:"CheckoutBrandingFontGroupInput",
		secondary:"CheckoutBrandingFontGroupInput"
	},
	CheckoutBrandingTypographyKerning: "enum" as const,
	CheckoutBrandingTypographyLetterCase: "enum" as const,
	CheckoutBrandingTypographySize: "enum" as const,
	CheckoutBrandingTypographyStyleGlobalInput:{
		letterCase:"CheckoutBrandingTypographyLetterCase",
		kerning:"CheckoutBrandingTypographyKerning"
	},
	CheckoutBrandingTypographyStyleInput:{
		font:"CheckoutBrandingTypographyFont",
		size:"CheckoutBrandingTypographySize",
		weight:"CheckoutBrandingTypographyWeight",
		letterCase:"CheckoutBrandingTypographyLetterCase",
		kerning:"CheckoutBrandingTypographyKerning"
	},
	CheckoutBrandingTypographyWeight: "enum" as const,
	CheckoutBrandingUpsertUserErrorCode: "enum" as const,
	CheckoutBrandingVisibility: "enum" as const,
	CheckoutProfileSortKeys: "enum" as const,
	ChildProductRelationInput:{
		selectedParentOptionValues:"SelectedVariantOptionInput"
	},
	CodeDiscountSortKeys: "enum" as const,
	Collection:{
		description:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		hasProduct:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		products:{
			sortKey:"ProductCollectionSortKeys"
		},
		publicationCount:{

		},
		publications:{

		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsCount:{

		},
		resourcePublicationsV2:{
			catalogType:"CatalogType"
		},
		translations:{

		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		}
	},
	CollectionAddProductsV2UserErrorCode: "enum" as const,
	CollectionDeleteInput:{

	},
	CollectionIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	CollectionInput:{
		image:"ImageInput",
		ruleSet:"CollectionRuleSetInput",
		sortOrder:"CollectionSortOrder",
		metafields:"MetafieldInput",
		seo:"SEOInput"
	},
	CollectionPublicationInput:{

	},
	CollectionPublishInput:{
		collectionPublications:"CollectionPublicationInput"
	},
	CollectionReorderProductsUserErrorCode: "enum" as const,
	CollectionRuleColumn: "enum" as const,
	CollectionRuleInput:{
		column:"CollectionRuleColumn",
		relation:"CollectionRuleRelation"
	},
	CollectionRuleRelation: "enum" as const,
	CollectionRuleSetInput:{
		rules:"CollectionRuleInput"
	},
	CollectionSortKeys: "enum" as const,
	CollectionSortOrder: "enum" as const,
	CollectionUnpublishInput:{
		collectionPublications:"CollectionPublicationInput"
	},
	Color: `scalar.Color` as const,
	ColumnDataType: "enum" as const,
	CombinedListing:{
		combinedListingChildren:{

		}
	},
	CombinedListingUpdateUserErrorCode: "enum" as const,
	CombinedListingsRole: "enum" as const,
	Comment:{
		events:{
			sortKey:"EventSortKeys"
		}
	},
	CommentApproveUserErrorCode: "enum" as const,
	CommentDeleteUserErrorCode: "enum" as const,
	CommentNotSpamUserErrorCode: "enum" as const,
	CommentPolicy: "enum" as const,
	CommentSortKeys: "enum" as const,
	CommentSpamUserErrorCode: "enum" as const,
	CommentStatus: "enum" as const,
	Company:{
		contactRoles:{
			sortKey:"CompanyContactRoleSortKeys"
		},
		contacts:{
			sortKey:"CompanyContactSortKeys"
		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		},
		locations:{
			sortKey:"CompanyLocationSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		}
	},
	CompanyAddress:{
		formattedAddress:{

		}
	},
	CompanyAddressInput:{
		countryCode:"CountryCode"
	},
	CompanyAddressType: "enum" as const,
	CompanyContact:{
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		roleAssignments:{
			sortKey:"CompanyContactRoleAssignmentSortKeys"
		}
	},
	CompanyContactInput:{

	},
	CompanyContactRoleAssign:{

	},
	CompanyContactRoleAssignmentSortKeys: "enum" as const,
	CompanyContactRoleSortKeys: "enum" as const,
	CompanyContactSortKeys: "enum" as const,
	CompanyCreateInput:{
		company:"CompanyInput",
		companyContact:"CompanyContactInput",
		companyLocation:"CompanyLocationInput"
	},
	CompanyInput:{
		customerSince:"DateTime"
	},
	CompanyLocation:{
		catalogs:{

		},
		catalogsCount:{

		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		},
		inCatalog:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		roleAssignments:{
			sortKey:"CompanyContactRoleAssignmentSortKeys"
		},
		staffMemberAssignments:{
			sortKey:"CompanyLocationStaffMemberAssignmentSortKeys"
		},
		storeCreditAccounts:{

		}
	},
	CompanyLocationCatalog:{
		companyLocations:{
			sortKey:"CompanyLocationSortKeys"
		}
	},
	CompanyLocationInput:{
		buyerExperienceConfiguration:"BuyerExperienceConfigurationInput",
		billingAddress:"CompanyAddressInput",
		shippingAddress:"CompanyAddressInput",
		taxExemptions:"TaxExemption"
	},
	CompanyLocationRoleAssign:{

	},
	CompanyLocationSortKeys: "enum" as const,
	CompanyLocationStaffMemberAssignmentSortKeys: "enum" as const,
	CompanyLocationUpdateInput:{
		buyerExperienceConfiguration:"BuyerExperienceConfigurationInput"
	},
	CompanyLocationsCondition:{
		companyLocations:{

		}
	},
	CompanySortKeys: "enum" as const,
	ConsentPolicyErrorCode: "enum" as const,
	ConsentPolicyInput:{
		countryCode:"PrivacyCountryCode"
	},
	ContextualPricingContext:{
		country:"CountryCode"
	},
	ContextualPublicationContext:{
		country:"CountryCode"
	},
	CookieBanner:{
		translations:{

		}
	},
	CountPrecision: "enum" as const,
	CountryCode: "enum" as const,
	CountryHarmonizedSystemCodeInput:{
		countryCode:"CountryCode"
	},
	CreateMediaInput:{
		mediaContentType:"MediaContentType"
	},
	CropRegion: "enum" as const,
	CurrencyCode: "enum" as const,
	CustomShippingPackageInput:{
		weight:"WeightInput",
		dimensions:"ObjectDimensionsInput",
		type:"ShippingPackageType"
	},
	Customer:{
		addresses:{

		},
		addressesV2:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		paymentMethods:{

		},
		storeCreditAccounts:{

		},
		subscriptionContracts:{

		}
	},
	CustomerAccountNativePagePageType: "enum" as const,
	CustomerAccountsVersion: "enum" as const,
	CustomerCancelDataErasureErrorCode: "enum" as const,
	CustomerConsentCollectedFrom: "enum" as const,
	CustomerDeleteInput:{

	},
	CustomerEmailAddressMarketingState: "enum" as const,
	CustomerEmailAddressOpenTrackingLevel: "enum" as const,
	CustomerEmailMarketingConsentInput:{
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerEmailMarketingState",
		consentUpdatedAt:"DateTime"
	},
	CustomerEmailMarketingConsentUpdateInput:{
		emailMarketingConsent:"CustomerEmailMarketingConsentInput"
	},
	CustomerEmailMarketingConsentUpdateUserErrorCode: "enum" as const,
	CustomerEmailMarketingState: "enum" as const,
	CustomerIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	CustomerInput:{
		addresses:"MailingAddressInput",
		metafields:"MetafieldInput",
		emailMarketingConsent:"CustomerEmailMarketingConsentInput",
		smsMarketingConsent:"CustomerSmsMarketingConsentInput",
		taxExemptions:"TaxExemption"
	},
	CustomerJourneySummary:{
		moments:{

		}
	},
	CustomerMarketingOptInLevel: "enum" as const,
	CustomerMergeErrorCode: "enum" as const,
	CustomerMergeErrorFieldType: "enum" as const,
	CustomerMergeOverrideFields:{

	},
	CustomerMergePreviewDefaultFields:{
		addresses:{

		},
		discountNodes:{
			sortKey:"DiscountSortKeys"
		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		giftCards:{
			sortKey:"GiftCardSortKeys"
		},
		orders:{
			sortKey:"OrderSortKeys"
		}
	},
	CustomerMergeRequestStatus: "enum" as const,
	CustomerPaymentMethod:{
		mandates:{

		},
		subscriptionContracts:{

		}
	},
	CustomerPaymentMethodCreateFromDuplicationDataUserErrorCode: "enum" as const,
	CustomerPaymentMethodGetDuplicationDataUserErrorCode: "enum" as const,
	CustomerPaymentMethodGetUpdateUrlUserErrorCode: "enum" as const,
	CustomerPaymentMethodRemoteInput:{
		stripePaymentMethod:"RemoteStripePaymentMethodInput",
		authorizeNetCustomerPaymentProfile:"RemoteAuthorizeNetCustomerPaymentProfileInput",
		braintreePaymentMethod:"RemoteBraintreePaymentMethodInput"
	},
	CustomerPaymentMethodRemoteUserErrorCode: "enum" as const,
	CustomerPaymentMethodRevocationReason: "enum" as const,
	CustomerPaymentMethodUserErrorCode: "enum" as const,
	CustomerPredictedSpendTier: "enum" as const,
	CustomerProductSubscriberStatus: "enum" as const,
	CustomerRequestDataErasureErrorCode: "enum" as const,
	CustomerRfmGroup: "enum" as const,
	CustomerSavedSearchSortKeys: "enum" as const,
	CustomerSegmentMember:{
		metafield:{

		},
		metafields:{

		}
	},
	CustomerSegmentMembersQueryInput:{

	},
	CustomerSegmentMembersQueryUserErrorCode: "enum" as const,
	CustomerSendAccountInviteEmailUserErrorCode: "enum" as const,
	CustomerSetIdentifiers:{
		customId:"UniqueMetafieldValueInput"
	},
	CustomerSetInput:{
		addresses:"MailingAddressInput",
		taxExemptions:"TaxExemption"
	},
	CustomerSetUserErrorCode: "enum" as const,
	CustomerSmsMarketingConsentErrorCode: "enum" as const,
	CustomerSmsMarketingConsentInput:{
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerSmsMarketingState",
		consentUpdatedAt:"DateTime"
	},
	CustomerSmsMarketingConsentUpdateInput:{
		smsMarketingConsent:"CustomerSmsMarketingConsentInput"
	},
	CustomerSmsMarketingState: "enum" as const,
	CustomerSortKeys: "enum" as const,
	CustomerState: "enum" as const,
	DataSaleOptOutUserErrorCode: "enum" as const,
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	DayOfTheWeek: "enum" as const,
	Decimal: `scalar.Decimal` as const,
	DelegateAccessTokenCreateUserErrorCode: "enum" as const,
	DelegateAccessTokenDestroyUserErrorCode: "enum" as const,
	DelegateAccessTokenInput:{

	},
	DeletionEventSortKeys: "enum" as const,
	DeletionEventSubjectType: "enum" as const,
	DeliveryCarrierService:{
		availableServicesForCountries:{
			countryCodes:"CountryCode"
		}
	},
	DeliveryCarrierServiceCreateInput:{
		callbackUrl:"URL"
	},
	DeliveryCarrierServiceUpdateInput:{
		callbackUrl:"URL"
	},
	DeliveryConditionField: "enum" as const,
	DeliveryConditionOperator: "enum" as const,
	DeliveryCountryInput:{
		code:"CountryCode",
		provinces:"DeliveryProvinceInput"
	},
	DeliveryCustomization:{
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	DeliveryCustomizationErrorCode: "enum" as const,
	DeliveryCustomizationInput:{
		metafields:"MetafieldInput"
	},
	DeliveryLegacyModeBlockedReason: "enum" as const,
	DeliveryLocalPickupTime: "enum" as const,
	DeliveryLocationGroup:{
		locations:{
			sortKey:"LocationSortKeys"
		}
	},
	DeliveryLocationGroupZone:{
		methodDefinitions:{
			type:"DeliveryMethodDefinitionType",
			sortKey:"MethodDefinitionSortKeys"
		}
	},
	DeliveryLocationGroupZoneInput:{
		countries:"DeliveryCountryInput",
		methodDefinitionsToCreate:"DeliveryMethodDefinitionInput",
		methodDefinitionsToUpdate:"DeliveryMethodDefinitionInput"
	},
	DeliveryLocationLocalPickupEnableInput:{
		pickupTime:"DeliveryLocalPickupTime"
	},
	DeliveryLocationLocalPickupSettingsErrorCode: "enum" as const,
	DeliveryMethodDefinitionInput:{
		rateDefinition:"DeliveryRateDefinitionInput",
		participant:"DeliveryParticipantInput",
		weightConditionsToCreate:"DeliveryWeightConditionInput",
		priceConditionsToCreate:"DeliveryPriceConditionInput",
		conditionsToUpdate:"DeliveryUpdateConditionInput"
	},
	DeliveryMethodDefinitionType: "enum" as const,
	DeliveryMethodType: "enum" as const,
	DeliveryParticipantInput:{
		fixedFee:"MoneyInput",
		participantServices:"DeliveryParticipantServiceInput"
	},
	DeliveryParticipantServiceInput:{

	},
	DeliveryPriceConditionInput:{
		criteria:"MoneyInput",
		operator:"DeliveryConditionOperator"
	},
	DeliveryProfile:{
		profileItems:{

		},
		profileLocationGroups:{

		},
		sellingPlanGroups:{

		},
		unassignedLocationsPaginated:{

		}
	},
	DeliveryProfileInput:{
		profileLocationGroups:"DeliveryProfileLocationGroupInput",
		locationGroupsToCreate:"DeliveryProfileLocationGroupInput",
		locationGroupsToUpdate:"DeliveryProfileLocationGroupInput"
	},
	DeliveryProfileItem:{
		variants:{

		}
	},
	DeliveryProfileLocationGroup:{
		locationGroupZones:{

		}
	},
	DeliveryProfileLocationGroupInput:{
		zonesToCreate:"DeliveryLocationGroupZoneInput",
		zonesToUpdate:"DeliveryLocationGroupZoneInput"
	},
	DeliveryPromiseParticipantOwnerType: "enum" as const,
	DeliveryPromiseProviderUpsertUserErrorCode: "enum" as const,
	DeliveryProvinceInput:{

	},
	DeliveryRateDefinitionInput:{
		price:"MoneyInput"
	},
	DeliverySettingInput:{

	},
	DeliveryUpdateConditionInput:{
		field:"DeliveryConditionField",
		operator:"DeliveryConditionOperator"
	},
	DeliveryWeightConditionInput:{
		criteria:"WeightInput",
		operator:"DeliveryConditionOperator"
	},
	DepositInput:{

	},
	DigitalWallet: "enum" as const,
	DiscountAmountInput:{
		amount:"Decimal"
	},
	DiscountApplicationAllocationMethod: "enum" as const,
	DiscountApplicationLevel: "enum" as const,
	DiscountApplicationTargetSelection: "enum" as const,
	DiscountApplicationTargetType: "enum" as const,
	DiscountAutomaticAppInput:{
		combinesWith:"DiscountCombinesWithInput",
		discountClasses:"DiscountClass",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		metafields:"MetafieldInput"
	},
	DiscountAutomaticBasicInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		minimumRequirement:"DiscountMinimumRequirementInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountAutomaticBxgy:{
		events:{
			sortKey:"EventSortKeys"
		}
	},
	DiscountAutomaticBxgyInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		usesPerOrderLimit:"UnsignedInt64",
		customerBuys:"DiscountCustomerBuysInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountAutomaticFreeShippingInput:{
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		combinesWith:"DiscountCombinesWithInput",
		minimumRequirement:"DiscountMinimumRequirementInput",
		destination:"DiscountShippingDestinationSelectionInput",
		maximumShippingPrice:"Decimal"
	},
	DiscountAutomaticNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	DiscountBuyerSelection: "enum" as const,
	DiscountClass: "enum" as const,
	DiscountCodeApp:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeAppInput:{
		combinesWith:"DiscountCombinesWithInput",
		discountClasses:"DiscountClass",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		metafields:"MetafieldInput"
	},
	DiscountCodeBasic:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeBasicInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		minimumRequirement:"DiscountMinimumRequirementInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountCodeBxgy:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeBxgyInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		customerBuys:"DiscountCustomerBuysInput",
		customerGets:"DiscountCustomerGetsInput"
	},
	DiscountCodeFreeShipping:{
		codes:{
			sortKey:"DiscountCodeSortKeys"
		}
	},
	DiscountCodeFreeShippingInput:{
		combinesWith:"DiscountCombinesWithInput",
		startsAt:"DateTime",
		endsAt:"DateTime",
		context:"DiscountContextInput",
		minimumRequirement:"DiscountMinimumRequirementInput",
		destination:"DiscountShippingDestinationSelectionInput",
		maximumShippingPrice:"Decimal"
	},
	DiscountCodeNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	DiscountCodeSortKeys: "enum" as const,
	DiscountCollections:{
		collections:{

		}
	},
	DiscountCollectionsInput:{

	},
	DiscountCombinesWithInput:{

	},
	DiscountContextInput:{
		all:"DiscountBuyerSelection",
		customers:"DiscountCustomersInput",
		customerSegments:"DiscountCustomerSegmentsInput"
	},
	DiscountCountriesInput:{
		add:"CountryCode",
		remove:"CountryCode"
	},
	DiscountCustomerBuysInput:{
		value:"DiscountCustomerBuysValueInput",
		items:"DiscountItemsInput"
	},
	DiscountCustomerBuysValueInput:{
		quantity:"UnsignedInt64",
		amount:"Decimal"
	},
	DiscountCustomerGetsInput:{
		value:"DiscountCustomerGetsValueInput",
		items:"DiscountItemsInput"
	},
	DiscountCustomerGetsValueInput:{
		discountOnQuantity:"DiscountOnQuantityInput",
		discountAmount:"DiscountAmountInput"
	},
	DiscountCustomerSegmentsInput:{

	},
	DiscountCustomerSelectionInput:{
		customers:"DiscountCustomersInput",
		customerSegments:"DiscountCustomerSegmentsInput"
	},
	DiscountCustomersInput:{

	},
	DiscountEffectInput:{
		amount:"Decimal"
	},
	DiscountErrorCode: "enum" as const,
	DiscountItemsInput:{
		products:"DiscountProductsInput",
		collections:"DiscountCollectionsInput"
	},
	DiscountMinimumQuantityInput:{
		greaterThanOrEqualToQuantity:"UnsignedInt64"
	},
	DiscountMinimumRequirementInput:{
		quantity:"DiscountMinimumQuantityInput",
		subtotal:"DiscountMinimumSubtotalInput"
	},
	DiscountMinimumSubtotalInput:{
		greaterThanOrEqualToSubtotal:"Decimal"
	},
	DiscountNode:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	DiscountOnQuantityInput:{
		quantity:"UnsignedInt64",
		effect:"DiscountEffectInput"
	},
	DiscountProducts:{
		productVariants:{

		},
		products:{

		}
	},
	DiscountProductsInput:{

	},
	DiscountRedeemCodeBulkCreation:{
		codes:{

		}
	},
	DiscountRedeemCodeInput:{

	},
	DiscountShareableUrlTargetType: "enum" as const,
	DiscountShippingDestinationSelectionInput:{
		countries:"DiscountCountriesInput"
	},
	DiscountSortKeys: "enum" as const,
	DiscountStatus: "enum" as const,
	DiscountTargetType: "enum" as const,
	DiscountType: "enum" as const,
	DisputeEvidenceUpdateUserErrorCode: "enum" as const,
	DisputeStatus: "enum" as const,
	DisputeType: "enum" as const,
	DistanceUnit: "enum" as const,
	DraftOrder:{
		events:{
			sortKey:"EventSortKeys"
		},
		lineItems:{

		},
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		},
		localizedFields:{
			countryCodes:"CountryCode",
			purposes:"LocalizedFieldPurpose"
		},
		metafield:{

		},
		metafields:{

		}
	},
	DraftOrderAppliedDiscountInput:{
		amountWithCurrency:"MoneyInput",
		valueType:"DraftOrderAppliedDiscountType"
	},
	DraftOrderAppliedDiscountType: "enum" as const,
	DraftOrderAvailableDeliveryOptionsInput:{
		appliedDiscount:"DraftOrderAppliedDiscountInput",
		lineItems:"DraftOrderLineItemInput",
		shippingAddress:"MailingAddressInput",
		marketRegionCountryCode:"CountryCode",
		purchasingEntity:"PurchasingEntityInput"
	},
	DraftOrderDeleteInput:{

	},
	DraftOrderInput:{
		appliedDiscount:"DraftOrderAppliedDiscountInput",
		billingAddress:"MailingAddressInput",
		customAttributes:"AttributeInput",
		lineItems:"DraftOrderLineItemInput",
		metafields:"MetafieldInput",
		localizedFields:"LocalizedFieldInput",
		shippingAddress:"MailingAddressInput",
		shippingLine:"ShippingLineInput",
		reserveInventoryUntil:"DateTime",
		presentmentCurrencyCode:"CurrencyCode",
		paymentTerms:"PaymentTermsInput",
		purchasingEntity:"PurchasingEntityInput"
	},
	DraftOrderLineItemComponentInput:{

	},
	DraftOrderLineItemInput:{
		appliedDiscount:"DraftOrderAppliedDiscountInput",
		customAttributes:"AttributeInput",
		originalUnitPriceWithCurrency:"MoneyInput",
		weight:"WeightInput",
		components:"DraftOrderLineItemComponentInput",
		priceOverride:"MoneyInput"
	},
	DraftOrderSortKeys: "enum" as const,
	DraftOrderStatus: "enum" as const,
	EmailInput:{

	},
	ErrorsServerPixelUserErrorCode: "enum" as const,
	ErrorsWebPixelUserErrorCode: "enum" as const,
	EventBridgeWebhookSubscriptionInput:{
		format:"WebhookSubscriptionFormat",
		metafields:"HasMetafieldsMetafieldIdentifierInput",
		arn:"ARN"
	},
	EventSortKeys: "enum" as const,
	EventSubjectType: "enum" as const,
	ExchangeLineItemAppliedDiscountInput:{
		value:"ExchangeLineItemAppliedDiscountValueInput"
	},
	ExchangeLineItemAppliedDiscountValueInput:{
		amount:"MoneyInput"
	},
	ExchangeLineItemInput:{
		appliedDiscount:"ExchangeLineItemAppliedDiscountInput"
	},
	ExchangeLineItemRemoveFromReturnInput:{

	},
	FileContentType: "enum" as const,
	FileCreateInput:{
		contentType:"FileContentType",
		duplicateResolutionMode:"FileCreateInputDuplicateResolutionMode"
	},
	FileCreateInputDuplicateResolutionMode: "enum" as const,
	FileErrorCode: "enum" as const,
	FileSetInput:{
		contentType:"FileContentType",
		duplicateResolutionMode:"FileCreateInputDuplicateResolutionMode"
	},
	FileSortKeys: "enum" as const,
	FileStatus: "enum" as const,
	FileUpdateInput:{

	},
	FilesErrorCode: "enum" as const,
	FormattedString: `scalar.FormattedString` as const,
	Fulfillment:{
		events:{
			sortKey:"FulfillmentEventSortKeys"
		},
		fulfillmentLineItems:{

		},
		fulfillmentOrders:{

		},
		trackingInfo:{

		}
	},
	FulfillmentConstraintRule:{
		metafield:{

		},
		metafields:{

		}
	},
	FulfillmentConstraintRuleCreateUserErrorCode: "enum" as const,
	FulfillmentConstraintRuleDeleteUserErrorCode: "enum" as const,
	FulfillmentConstraintRuleUpdateUserErrorCode: "enum" as const,
	FulfillmentDisplayStatus: "enum" as const,
	FulfillmentEventInput:{
		estimatedDeliveryAt:"DateTime",
		happenedAt:"DateTime",
		status:"FulfillmentEventStatus"
	},
	FulfillmentEventSortKeys: "enum" as const,
	FulfillmentEventStatus: "enum" as const,
	FulfillmentHoldReason: "enum" as const,
	FulfillmentInput:{
		trackingInfo:"FulfillmentTrackingInput",
		lineItemsByFulfillmentOrder:"FulfillmentOrderLineItemsInput",
		originAddress:"FulfillmentOriginAddressInput"
	},
	FulfillmentOrder:{
		fulfillmentOrdersForMerge:{

		},
		fulfillments:{

		},
		lineItems:{

		},
		locationsForMove:{

		},
		merchantRequests:{
			kind:"FulfillmentOrderMerchantRequestKind"
		}
	},
	FulfillmentOrderAction: "enum" as const,
	FulfillmentOrderAssignmentStatus: "enum" as const,
	FulfillmentOrderHoldInput:{
		reason:"FulfillmentHoldReason",
		fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
	},
	FulfillmentOrderHoldUserErrorCode: "enum" as const,
	FulfillmentOrderLineItemInput:{

	},
	FulfillmentOrderLineItemsInput:{
		fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
	},
	FulfillmentOrderLineItemsPreparedForPickupInput:{
		lineItemsByFulfillmentOrder:"PreparedFulfillmentOrderLineItemsInput"
	},
	FulfillmentOrderLineItemsPreparedForPickupUserErrorCode: "enum" as const,
	FulfillmentOrderLocationForMove:{
		availableLineItems:{

		},
		unavailableLineItems:{

		}
	},
	FulfillmentOrderMerchantRequestKind: "enum" as const,
	FulfillmentOrderMergeInput:{
		mergeIntents:"FulfillmentOrderMergeInputMergeIntent"
	},
	FulfillmentOrderMergeInputMergeIntent:{
		fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
	},
	FulfillmentOrderMergeUserErrorCode: "enum" as const,
	FulfillmentOrderRejectionReason: "enum" as const,
	FulfillmentOrderReleaseHoldUserErrorCode: "enum" as const,
	FulfillmentOrderRequestStatus: "enum" as const,
	FulfillmentOrderRescheduleUserErrorCode: "enum" as const,
	FulfillmentOrderSortKeys: "enum" as const,
	FulfillmentOrderSplitInput:{
		fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
	},
	FulfillmentOrderSplitUserErrorCode: "enum" as const,
	FulfillmentOrderStatus: "enum" as const,
	FulfillmentOrdersRerouteUserErrorCode: "enum" as const,
	FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode: "enum" as const,
	FulfillmentOriginAddressInput:{

	},
	FulfillmentServiceDeleteInventoryAction: "enum" as const,
	FulfillmentServiceType: "enum" as const,
	FulfillmentStatus: "enum" as const,
	FulfillmentTrackingInput:{
		url:"URL",
		urls:"URL"
	},
	FulfillmentV2Input:{
		trackingInfo:"FulfillmentTrackingInput",
		lineItemsByFulfillmentOrder:"FulfillmentOrderLineItemsInput",
		originAddress:"FulfillmentOriginAddressInput"
	},
	GiftCard:{
		transactions:{

		}
	},
	GiftCardCreateInput:{
		initialValue:"Decimal",
		expiresOn:"Date",
		recipientAttributes:"GiftCardRecipientInput"
	},
	GiftCardCreditInput:{
		creditAmount:"MoneyInput",
		processedAt:"DateTime"
	},
	GiftCardCreditTransaction:{
		metafield:{

		},
		metafields:{

		}
	},
	GiftCardDeactivateUserErrorCode: "enum" as const,
	GiftCardDebitInput:{
		debitAmount:"MoneyInput",
		processedAt:"DateTime"
	},
	GiftCardDebitTransaction:{
		metafield:{

		},
		metafields:{

		}
	},
	GiftCardErrorCode: "enum" as const,
	GiftCardRecipientInput:{
		sendNotificationAt:"DateTime"
	},
	GiftCardSendNotificationToCustomerUserErrorCode: "enum" as const,
	GiftCardSendNotificationToRecipientUserErrorCode: "enum" as const,
	GiftCardSortKeys: "enum" as const,
	GiftCardTransaction:{
		metafield:{

		},
		metafields:{

		}
	},
	GiftCardTransactionUserErrorCode: "enum" as const,
	GiftCardUpdateInput:{
		expiresOn:"Date",
		recipientAttributes:"GiftCardRecipientInput"
	},
	HTML: `scalar.HTML` as const,
	HasEvents:{
		events:{
			sortKey:"EventSortKeys"
		}
	},
	HasLocalizationExtensions:{
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		}
	},
	HasLocalizedFields:{
		localizedFields:{
			countryCodes:"CountryCode",
			purposes:"LocalizedFieldPurpose"
		}
	},
	HasMetafieldDefinitions:{
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		}
	},
	HasMetafields:{
		metafield:{

		},
		metafields:{

		}
	},
	HasMetafieldsMetafieldIdentifierInput:{

	},
	HasPublishedTranslations:{
		translations:{

		}
	},
	HasStoreCreditAccounts:{
		storeCreditAccounts:{

		}
	},
	Image:{
		metafield:{

		},
		metafields:{

		},
		transformedSrc:{
			crop:"CropRegion",
			preferredContentType:"ImageContentType"
		},
		translations:{

		},
		url:{
			transform:"ImageTransformInput"
		}
	},
	ImageContentType: "enum" as const,
	ImageInput:{

	},
	ImageTransformInput:{
		crop:"CropRegion",
		preferredContentType:"ImageContentType"
	},
	InclusiveDutiesPricingStrategy: "enum" as const,
	InclusiveTaxPricingStrategy: "enum" as const,
	IncomingRequestLineItemInput:{

	},
	InventoryAdjustQuantitiesInput:{
		changes:"InventoryChangeInput"
	},
	InventoryAdjustQuantitiesUserErrorCode: "enum" as const,
	InventoryAdjustmentGroup:{
		changes:{

		}
	},
	InventoryBulkToggleActivationInput:{

	},
	InventoryBulkToggleActivationUserErrorCode: "enum" as const,
	InventoryChangeInput:{

	},
	InventoryItem:{
		countryHarmonizedSystemCodes:{

		},
		inventoryLevel:{

		},
		inventoryLevels:{

		}
	},
	InventoryItemInput:{
		cost:"Decimal",
		countryCodeOfOrigin:"CountryCode",
		countryHarmonizedSystemCodes:"CountryHarmonizedSystemCodeInput",
		measurement:"InventoryItemMeasurementInput"
	},
	InventoryItemMeasurementInput:{
		weight:"WeightInput"
	},
	InventoryLevel:{
		quantities:{

		},
		scheduledChanges:{
			sortKey:"ScheduledChangeSortKeys"
		}
	},
	InventoryLevelInput:{

	},
	InventoryMoveQuantitiesInput:{
		changes:"InventoryMoveQuantityChange"
	},
	InventoryMoveQuantitiesUserErrorCode: "enum" as const,
	InventoryMoveQuantityChange:{
		from:"InventoryMoveQuantityTerminalInput",
		to:"InventoryMoveQuantityTerminalInput"
	},
	InventoryMoveQuantityTerminalInput:{

	},
	InventoryQuantityInput:{

	},
	InventoryScheduledChangeInput:{
		expectedAt:"DateTime"
	},
	InventoryScheduledChangeItemInput:{
		ledgerDocumentUri:"URL",
		scheduledChanges:"InventoryScheduledChangeInput"
	},
	InventorySetOnHandQuantitiesInput:{
		setQuantities:"InventorySetQuantityInput"
	},
	InventorySetOnHandQuantitiesUserErrorCode: "enum" as const,
	InventorySetQuantitiesInput:{
		quantities:"InventoryQuantityInput"
	},
	InventorySetQuantitiesUserErrorCode: "enum" as const,
	InventorySetQuantityInput:{

	},
	InventorySetScheduledChangesInput:{
		items:"InventoryScheduledChangeItemInput",
		referenceDocumentUri:"URL"
	},
	InventorySetScheduledChangesUserErrorCode: "enum" as const,
	InventoryShipment:{
		lineItems:{
			sortKey:"ShipmentLineItemSortKeys"
		},
		lineItemsCount:{

		}
	},
	InventoryShipmentAddItemsUserErrorCode: "enum" as const,
	InventoryShipmentCreateInTransitUserErrorCode: "enum" as const,
	InventoryShipmentCreateInput:{
		trackingInput:"InventoryShipmentTrackingInput",
		lineItems:"InventoryShipmentLineItemInput",
		dateCreated:"DateTime"
	},
	InventoryShipmentCreateUserErrorCode: "enum" as const,
	InventoryShipmentDeleteUserErrorCode: "enum" as const,
	InventoryShipmentLineItemInput:{

	},
	InventoryShipmentMarkInTransitUserErrorCode: "enum" as const,
	InventoryShipmentReceiveItemInput:{
		reason:"InventoryShipmentReceiveLineItemReason"
	},
	InventoryShipmentReceiveLineItemReason: "enum" as const,
	InventoryShipmentReceiveUserErrorCode: "enum" as const,
	InventoryShipmentRemoveItemsUserErrorCode: "enum" as const,
	InventoryShipmentSetTrackingUserErrorCode: "enum" as const,
	InventoryShipmentStatus: "enum" as const,
	InventoryShipmentTrackingInput:{
		trackingUrl:"URL",
		arrivesAt:"DateTime"
	},
	InventoryShipmentUpdateItemQuantitiesInput:{

	},
	InventoryShipmentUpdateItemQuantitiesUserErrorCode: "enum" as const,
	InventoryTransfer:{
		events:{
			sortKey:"EventSortKeys"
		},
		lineItems:{

		},
		lineItemsCount:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		shipments:{

		}
	},
	InventoryTransferCancelUserErrorCode: "enum" as const,
	InventoryTransferCreateAsReadyToShipInput:{
		lineItems:"InventoryTransferLineItemInput",
		dateCreated:"DateTime"
	},
	InventoryTransferCreateAsReadyToShipUserErrorCode: "enum" as const,
	InventoryTransferCreateInput:{
		lineItems:"InventoryTransferLineItemInput",
		dateCreated:"DateTime"
	},
	InventoryTransferCreateUserErrorCode: "enum" as const,
	InventoryTransferDeleteUserErrorCode: "enum" as const,
	InventoryTransferDuplicateUserErrorCode: "enum" as const,
	InventoryTransferEditInput:{
		dateCreated:"Date"
	},
	InventoryTransferEditUserErrorCode: "enum" as const,
	InventoryTransferLineItemInput:{

	},
	InventoryTransferMarkAsReadyToShipUserErrorCode: "enum" as const,
	InventoryTransferRemoveItemsInput:{

	},
	InventoryTransferRemoveItemsUserErrorCode: "enum" as const,
	InventoryTransferSetItemsInput:{
		lineItems:"InventoryTransferLineItemInput"
	},
	InventoryTransferSetItemsUserErrorCode: "enum" as const,
	InventoryTransferStatus: "enum" as const,
	JSON: `scalar.JSON` as const,
	LanguageCode: "enum" as const,
	LengthUnit: "enum" as const,
	LineItem:{
		discountedTotalSet:{

		},
		taxLines:{

		}
	},
	Link:{
		translations:{

		}
	},
	LinkedMetafieldCreateInput:{

	},
	LinkedMetafieldInput:{

	},
	LinkedMetafieldUpdateInput:{

	},
	LocalizableContentType: "enum" as const,
	LocalizationExtensionInput:{
		key:"LocalizationExtensionKey"
	},
	LocalizationExtensionKey: "enum" as const,
	LocalizationExtensionPurpose: "enum" as const,
	LocalizedFieldInput:{
		key:"LocalizedFieldKey"
	},
	LocalizedFieldKey: "enum" as const,
	LocalizedFieldPurpose: "enum" as const,
	Location:{
		inventoryLevel:{

		},
		inventoryLevels:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	LocationActivateUserErrorCode: "enum" as const,
	LocationAddAddressInput:{
		countryCode:"CountryCode"
	},
	LocationAddInput:{
		address:"LocationAddAddressInput",
		metafields:"MetafieldInput"
	},
	LocationAddUserErrorCode: "enum" as const,
	LocationDeactivateUserErrorCode: "enum" as const,
	LocationDeleteUserErrorCode: "enum" as const,
	LocationEditAddressInput:{
		countryCode:"CountryCode"
	},
	LocationEditInput:{
		address:"LocationEditAddressInput",
		metafields:"MetafieldInput"
	},
	LocationEditUserErrorCode: "enum" as const,
	LocationIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	LocationSortKeys: "enum" as const,
	LocationsCondition:{
		locations:{

		}
	},
	MailingAddress:{
		formatted:{

		}
	},
	MailingAddressInput:{
		countryCode:"CountryCode"
	},
	MailingAddressValidationResult: "enum" as const,
	MandateResourceType: "enum" as const,
	Market:{
		assignedCustomization:{

		},
		catalogs:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		regions:{

		},
		webPresences:{

		}
	},
	MarketCatalog:{
		markets:{
			type:"MarketType",
			status:"MarketStatus"
		},
		marketsCount:{
			type:"MarketType",
			status:"MarketStatus"
		}
	},
	MarketConditionApplicationType: "enum" as const,
	MarketConditionType: "enum" as const,
	MarketConditionsCompanyLocationsInput:{
		applicationLevel:"MarketConditionApplicationType"
	},
	MarketConditionsInput:{
		companyLocationsCondition:"MarketConditionsCompanyLocationsInput",
		locationsCondition:"MarketConditionsLocationsInput",
		regionsCondition:"MarketConditionsRegionsInput"
	},
	MarketConditionsLocationsInput:{
		applicationLevel:"MarketConditionApplicationType"
	},
	MarketConditionsRegionInput:{
		countryCode:"CountryCode"
	},
	MarketConditionsRegionsInput:{
		regions:"MarketConditionsRegionInput",
		applicationLevel:"MarketConditionApplicationType"
	},
	MarketConditionsUpdateInput:{
		conditionsToAdd:"MarketConditionsInput",
		conditionsToDelete:"MarketConditionsInput"
	},
	MarketCreateInput:{
		conditions:"MarketConditionsInput",
		status:"MarketStatus",
		currencySettings:"MarketCurrencySettingsUpdateInput",
		priceInclusions:"MarketPriceInclusionsInput"
	},
	MarketCurrencySettingsUpdateInput:{
		baseCurrency:"CurrencyCode",
		baseCurrencyManualRate:"Decimal"
	},
	MarketCurrencySettingsUserErrorCode: "enum" as const,
	MarketLocalizableResource:{
		marketLocalizations:{

		}
	},
	MarketLocalizableResourceType: "enum" as const,
	MarketLocalizationRegisterInput:{

	},
	MarketPriceInclusionsInput:{
		taxPricingStrategy:"InclusiveTaxPricingStrategy",
		dutiesPricingStrategy:"InclusiveDutiesPricingStrategy"
	},
	MarketRegionCreateInput:{
		countryCode:"CountryCode"
	},
	MarketStatus: "enum" as const,
	MarketType: "enum" as const,
	MarketUpdateInput:{
		conditions:"MarketConditionsUpdateInput",
		status:"MarketStatus",
		currencySettings:"MarketCurrencySettingsUpdateInput",
		priceInclusions:"MarketPriceInclusionsInput"
	},
	MarketUserErrorCode: "enum" as const,
	MarketWebPresence:{
		markets:{

		}
	},
	MarketWebPresenceCreateInput:{

	},
	MarketWebPresenceUpdateInput:{

	},
	MarketingActivityBudgetInput:{
		budgetType:"MarketingBudgetBudgetType",
		total:"MoneyInput"
	},
	MarketingActivityCreateExternalInput:{
		utm:"UTMInput",
		budget:"MarketingActivityBudgetInput",
		adSpend:"MoneyInput",
		status:"MarketingActivityExternalStatus",
		remoteUrl:"URL",
		remotePreviewImageUrl:"URL",
		tactic:"MarketingTactic",
		marketingChannelType:"MarketingChannel",
		scheduledStart:"DateTime",
		scheduledEnd:"DateTime",
		start:"DateTime",
		end:"DateTime",
		hierarchyLevel:"MarketingActivityHierarchyLevel"
	},
	MarketingActivityCreateInput:{
		status:"MarketingActivityStatus"
	},
	MarketingActivityExtensionAppErrorCode: "enum" as const,
	MarketingActivityExternalStatus: "enum" as const,
	MarketingActivityHierarchyLevel: "enum" as const,
	MarketingActivitySortKeys: "enum" as const,
	MarketingActivityStatus: "enum" as const,
	MarketingActivityStatusBadgeType: "enum" as const,
	MarketingActivityUpdateExternalInput:{
		budget:"MarketingActivityBudgetInput",
		adSpend:"MoneyInput",
		remoteUrl:"URL",
		remotePreviewImageUrl:"URL",
		tactic:"MarketingTactic",
		marketingChannelType:"MarketingChannel",
		scheduledStart:"DateTime",
		scheduledEnd:"DateTime",
		start:"DateTime",
		end:"DateTime",
		status:"MarketingActivityExternalStatus"
	},
	MarketingActivityUpdateInput:{

	},
	MarketingActivityUpsertExternalInput:{
		utm:"UTMInput",
		budget:"MarketingActivityBudgetInput",
		adSpend:"MoneyInput",
		status:"MarketingActivityExternalStatus",
		remoteUrl:"URL",
		remotePreviewImageUrl:"URL",
		tactic:"MarketingTactic",
		marketingChannelType:"MarketingChannel",
		scheduledStart:"DateTime",
		scheduledEnd:"DateTime",
		start:"DateTime",
		end:"DateTime",
		hierarchyLevel:"MarketingActivityHierarchyLevel"
	},
	MarketingActivityUserErrorCode: "enum" as const,
	MarketingBudgetBudgetType: "enum" as const,
	MarketingChannel: "enum" as const,
	MarketingEngagementInput:{
		occurredOn:"Date",
		adSpend:"MoneyInput",
		utcOffset:"UtcOffset",
		sales:"MoneyInput",
		orders:"Decimal",
		firstTimeCustomers:"Decimal",
		returningCustomers:"Decimal"
	},
	MarketingEventSortKeys: "enum" as const,
	MarketingTactic: "enum" as const,
	MarketsResolvedValues:{
		catalogs:{

		},
		webPresences:{

		}
	},
	MarketsSortKeys: "enum" as const,
	MediaContentType: "enum" as const,
	MediaErrorCode: "enum" as const,
	MediaHost: "enum" as const,
	MediaImage:{
		metafield:{

		},
		metafields:{

		},
		translations:{

		}
	},
	MediaPreviewImageStatus: "enum" as const,
	MediaStatus: "enum" as const,
	MediaUserErrorCode: "enum" as const,
	MediaWarningCode: "enum" as const,
	Menu:{
		items:{

		},
		translations:{

		}
	},
	MenuCreateUserErrorCode: "enum" as const,
	MenuDeleteUserErrorCode: "enum" as const,
	MenuItemCreateInput:{
		type:"MenuItemType",
		items:"MenuItemCreateInput"
	},
	MenuItemType: "enum" as const,
	MenuItemUpdateInput:{
		type:"MenuItemType",
		items:"MenuItemUpdateInput"
	},
	MenuSortKeys: "enum" as const,
	MenuUpdateUserErrorCode: "enum" as const,
	MerchandiseDiscountClass: "enum" as const,
	Metafield:{
		references:{

		}
	},
	MetafieldAccessInput:{
		admin:"MetafieldAdminAccessInput",
		storefront:"MetafieldStorefrontAccessInput",
		customerAccount:"MetafieldCustomerAccountAccessInput"
	},
	MetafieldAccessUpdateInput:{
		admin:"MetafieldAdminAccessInput",
		storefront:"MetafieldStorefrontAccessInput",
		customerAccount:"MetafieldCustomerAccountAccessInput"
	},
	MetafieldAdminAccess: "enum" as const,
	MetafieldAdminAccessInput: "enum" as const,
	MetafieldCapabilityAdminFilterableInput:{

	},
	MetafieldCapabilityCreateInput:{
		smartCollectionCondition:"MetafieldCapabilitySmartCollectionConditionInput",
		adminFilterable:"MetafieldCapabilityAdminFilterableInput",
		uniqueValues:"MetafieldCapabilityUniqueValuesInput"
	},
	MetafieldCapabilitySmartCollectionConditionInput:{

	},
	MetafieldCapabilityUniqueValuesInput:{

	},
	MetafieldCapabilityUpdateInput:{
		smartCollectionCondition:"MetafieldCapabilitySmartCollectionConditionInput",
		adminFilterable:"MetafieldCapabilityAdminFilterableInput",
		uniqueValues:"MetafieldCapabilityUniqueValuesInput"
	},
	MetafieldCustomerAccountAccess: "enum" as const,
	MetafieldCustomerAccountAccessInput: "enum" as const,
	MetafieldDefinition:{
		metafields:{
			validationStatus:"MetafieldValidationStatus"
		},
		metafieldsCount:{
			validationStatus:"MetafieldValidationStatus"
		}
	},
	MetafieldDefinitionAdminFilterStatus: "enum" as const,
	MetafieldDefinitionConstraintStatus: "enum" as const,
	MetafieldDefinitionConstraintSubtypeIdentifier:{

	},
	MetafieldDefinitionConstraintValueUpdateInput:{

	},
	MetafieldDefinitionConstraints:{
		values:{

		}
	},
	MetafieldDefinitionConstraintsInput:{

	},
	MetafieldDefinitionConstraintsUpdatesInput:{
		values:"MetafieldDefinitionConstraintValueUpdateInput"
	},
	MetafieldDefinitionCreateUserErrorCode: "enum" as const,
	MetafieldDefinitionDeleteUserErrorCode: "enum" as const,
	MetafieldDefinitionIdentifierInput:{
		ownerType:"MetafieldOwnerType"
	},
	MetafieldDefinitionInput:{
		ownerType:"MetafieldOwnerType",
		validations:"MetafieldDefinitionValidationInput",
		access:"MetafieldAccessInput",
		constraints:"MetafieldDefinitionConstraintsInput",
		capabilities:"MetafieldCapabilityCreateInput"
	},
	MetafieldDefinitionPinUserErrorCode: "enum" as const,
	MetafieldDefinitionPinnedStatus: "enum" as const,
	MetafieldDefinitionSortKeys: "enum" as const,
	MetafieldDefinitionUnpinUserErrorCode: "enum" as const,
	MetafieldDefinitionUpdateInput:{
		ownerType:"MetafieldOwnerType",
		validations:"MetafieldDefinitionValidationInput",
		access:"MetafieldAccessUpdateInput",
		constraintsUpdates:"MetafieldDefinitionConstraintsUpdatesInput",
		capabilities:"MetafieldCapabilityUpdateInput"
	},
	MetafieldDefinitionUpdateUserErrorCode: "enum" as const,
	MetafieldDefinitionValidationInput:{

	},
	MetafieldDefinitionValidationStatus: "enum" as const,
	MetafieldIdentifierInput:{

	},
	MetafieldInput:{

	},
	MetafieldOwnerType: "enum" as const,
	MetafieldStorefrontAccess: "enum" as const,
	MetafieldStorefrontAccessInput: "enum" as const,
	MetafieldValidationStatus: "enum" as const,
	MetafieldValueType: "enum" as const,
	MetafieldsSetInput:{

	},
	MetafieldsSetUserErrorCode: "enum" as const,
	Metaobject:{
		field:{

		},
		referencedBy:{

		}
	},
	MetaobjectAccessInput:{
		admin:"MetaobjectAdminAccessInput",
		storefront:"MetaobjectStorefrontAccess"
	},
	MetaobjectAdminAccess: "enum" as const,
	MetaobjectAdminAccessInput: "enum" as const,
	MetaobjectBulkDeleteWhereCondition:{

	},
	MetaobjectCapabilityCreateInput:{
		publishable:"MetaobjectCapabilityPublishableInput",
		translatable:"MetaobjectCapabilityTranslatableInput",
		renderable:"MetaobjectCapabilityRenderableInput",
		onlineStore:"MetaobjectCapabilityOnlineStoreInput"
	},
	MetaobjectCapabilityDataInput:{
		publishable:"MetaobjectCapabilityDataPublishableInput",
		onlineStore:"MetaobjectCapabilityDataOnlineStoreInput"
	},
	MetaobjectCapabilityDataOnlineStoreInput:{

	},
	MetaobjectCapabilityDataPublishableInput:{
		status:"MetaobjectStatus"
	},
	MetaobjectCapabilityDefinitionDataOnlineStoreInput:{

	},
	MetaobjectCapabilityDefinitionDataRenderableInput:{

	},
	MetaobjectCapabilityOnlineStoreInput:{
		data:"MetaobjectCapabilityDefinitionDataOnlineStoreInput"
	},
	MetaobjectCapabilityPublishableInput:{

	},
	MetaobjectCapabilityRenderableInput:{
		data:"MetaobjectCapabilityDefinitionDataRenderableInput"
	},
	MetaobjectCapabilityTranslatableInput:{

	},
	MetaobjectCapabilityType: "enum" as const,
	MetaobjectCapabilityUpdateInput:{
		publishable:"MetaobjectCapabilityPublishableInput",
		translatable:"MetaobjectCapabilityTranslatableInput",
		renderable:"MetaobjectCapabilityRenderableInput",
		onlineStore:"MetaobjectCapabilityOnlineStoreInput"
	},
	MetaobjectCreateInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectDefinition:{
		metaobjects:{

		}
	},
	MetaobjectDefinitionCreateInput:{
		fieldDefinitions:"MetaobjectFieldDefinitionCreateInput",
		access:"MetaobjectAccessInput",
		capabilities:"MetaobjectCapabilityCreateInput"
	},
	MetaobjectDefinitionUpdateInput:{
		fieldDefinitions:"MetaobjectFieldDefinitionOperationInput",
		access:"MetaobjectAccessInput",
		capabilities:"MetaobjectCapabilityUpdateInput"
	},
	MetaobjectField:{
		references:{

		}
	},
	MetaobjectFieldCapabilityAdminFilterableInput:{

	},
	MetaobjectFieldDefinitionCapabilityCreateInput:{
		adminFilterable:"MetaobjectFieldCapabilityAdminFilterableInput"
	},
	MetaobjectFieldDefinitionCreateInput:{
		validations:"MetafieldDefinitionValidationInput",
		capabilities:"MetaobjectFieldDefinitionCapabilityCreateInput"
	},
	MetaobjectFieldDefinitionDeleteInput:{

	},
	MetaobjectFieldDefinitionOperationInput:{
		create:"MetaobjectFieldDefinitionCreateInput",
		update:"MetaobjectFieldDefinitionUpdateInput",
		delete:"MetaobjectFieldDefinitionDeleteInput"
	},
	MetaobjectFieldDefinitionUpdateInput:{
		validations:"MetafieldDefinitionValidationInput",
		capabilities:"MetaobjectFieldDefinitionCapabilityCreateInput"
	},
	MetaobjectFieldInput:{

	},
	MetaobjectHandleInput:{

	},
	MetaobjectStatus: "enum" as const,
	MetaobjectStorefrontAccess: "enum" as const,
	MetaobjectUpdateInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectUpsertInput:{
		fields:"MetaobjectFieldInput",
		capabilities:"MetaobjectCapabilityDataInput"
	},
	MetaobjectUserErrorCode: "enum" as const,
	MethodDefinitionSortKeys: "enum" as const,
	MobilePlatformApplicationCreateAndroidInput:{

	},
	MobilePlatformApplicationCreateAppleInput:{

	},
	MobilePlatformApplicationCreateInput:{
		android:"MobilePlatformApplicationCreateAndroidInput",
		apple:"MobilePlatformApplicationCreateAppleInput"
	},
	MobilePlatformApplicationUpdateAndroidInput:{

	},
	MobilePlatformApplicationUpdateAppleInput:{

	},
	MobilePlatformApplicationUpdateInput:{
		android:"MobilePlatformApplicationUpdateAndroidInput",
		apple:"MobilePlatformApplicationUpdateAppleInput"
	},
	MobilePlatformApplicationUserErrorCode: "enum" as const,
	Money: `scalar.Money` as const,
	MoneyBagInput:{
		shopMoney:"MoneyInput",
		presentmentMoney:"MoneyInput"
	},
	MoneyInput:{
		amount:"Decimal",
		currencyCode:"CurrencyCode"
	},
	MoveInput:{
		newPosition:"UnsignedInt64"
	},
	Mutation:{
		abandonmentEmailStateUpdate:{
			emailState:"AbandonmentEmailState",
			emailSentAt:"DateTime"
		},
		abandonmentUpdateActivitiesDeliveryStatuses:{
			deliveryStatus:"AbandonmentDeliveryState",
			deliveredAt:"DateTime"
		},
		appPurchaseOneTimeCreate:{
			price:"MoneyInput",
			returnUrl:"URL"
		},
		appRevokeAccessScopes:{

		},
		appSubscriptionCancel:{

		},
		appSubscriptionCreate:{
			lineItems:"AppSubscriptionLineItemInput",
			returnUrl:"URL",
			replacementBehavior:"AppSubscriptionReplacementBehavior"
		},
		appSubscriptionLineItemUpdate:{
			cappedAmount:"MoneyInput"
		},
		appSubscriptionTrialExtend:{

		},
		appUsageRecordCreate:{
			price:"MoneyInput"
		},
		articleCreate:{
			article:"ArticleCreateInput",
			blog:"ArticleBlogInput"
		},
		articleDelete:{

		},
		articleUpdate:{
			article:"ArticleUpdateInput",
			blog:"ArticleBlogInput"
		},
		backupRegionUpdate:{
			region:"BackupRegionUpdateInput"
		},
		blogCreate:{
			blog:"BlogCreateInput"
		},
		blogDelete:{

		},
		blogUpdate:{
			blog:"BlogUpdateInput"
		},
		bulkOperationCancel:{

		},
		bulkOperationRunMutation:{

		},
		bulkOperationRunQuery:{

		},
		bulkProductResourceFeedbackCreate:{
			feedbackInput:"ProductResourceFeedbackInput"
		},
		carrierServiceCreate:{
			input:"DeliveryCarrierServiceCreateInput"
		},
		carrierServiceDelete:{

		},
		carrierServiceUpdate:{
			input:"DeliveryCarrierServiceUpdateInput"
		},
		cartTransformCreate:{
			metafields:"MetafieldInput"
		},
		cartTransformDelete:{

		},
		catalogContextUpdate:{
			contextsToAdd:"CatalogContextInput",
			contextsToRemove:"CatalogContextInput"
		},
		catalogCreate:{
			input:"CatalogCreateInput"
		},
		catalogDelete:{

		},
		catalogUpdate:{
			input:"CatalogUpdateInput"
		},
		checkoutBrandingUpsert:{
			checkoutBrandingInput:"CheckoutBrandingInput"
		},
		collectionAddProducts:{

		},
		collectionAddProductsV2:{

		},
		collectionCreate:{
			input:"CollectionInput"
		},
		collectionDelete:{
			input:"CollectionDeleteInput"
		},
		collectionPublish:{
			input:"CollectionPublishInput"
		},
		collectionRemoveProducts:{

		},
		collectionReorderProducts:{
			moves:"MoveInput"
		},
		collectionUnpublish:{
			input:"CollectionUnpublishInput"
		},
		collectionUpdate:{
			input:"CollectionInput"
		},
		combinedListingUpdate:{
			productsAdded:"ChildProductRelationInput",
			productsEdited:"ChildProductRelationInput",
			optionsAndValues:"OptionAndValueInput"
		},
		commentApprove:{

		},
		commentDelete:{

		},
		commentNotSpam:{

		},
		commentSpam:{

		},
		companiesDelete:{

		},
		companyAddressDelete:{

		},
		companyAssignCustomerAsContact:{

		},
		companyAssignMainContact:{

		},
		companyContactAssignRole:{

		},
		companyContactAssignRoles:{
			rolesToAssign:"CompanyContactRoleAssign"
		},
		companyContactCreate:{
			input:"CompanyContactInput"
		},
		companyContactDelete:{

		},
		companyContactRemoveFromCompany:{

		},
		companyContactRevokeRole:{

		},
		companyContactRevokeRoles:{

		},
		companyContactSendWelcomeEmail:{
			email:"EmailInput"
		},
		companyContactUpdate:{
			input:"CompanyContactInput"
		},
		companyContactsDelete:{

		},
		companyCreate:{
			input:"CompanyCreateInput"
		},
		companyDelete:{

		},
		companyLocationAssignAddress:{
			address:"CompanyAddressInput",
			addressTypes:"CompanyAddressType"
		},
		companyLocationAssignRoles:{
			rolesToAssign:"CompanyLocationRoleAssign"
		},
		companyLocationAssignStaffMembers:{

		},
		companyLocationAssignTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		companyLocationCreate:{
			input:"CompanyLocationInput"
		},
		companyLocationCreateTaxRegistration:{

		},
		companyLocationDelete:{

		},
		companyLocationRemoveStaffMembers:{

		},
		companyLocationRevokeRoles:{

		},
		companyLocationRevokeTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		companyLocationRevokeTaxRegistration:{

		},
		companyLocationTaxSettingsUpdate:{
			exemptionsToAssign:"TaxExemption",
			exemptionsToRemove:"TaxExemption"
		},
		companyLocationUpdate:{
			input:"CompanyLocationUpdateInput"
		},
		companyLocationsDelete:{

		},
		companyRevokeMainContact:{

		},
		companyUpdate:{
			input:"CompanyInput"
		},
		consentPolicyUpdate:{
			consentPolicies:"ConsentPolicyInput"
		},
		customerAddTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerAddressCreate:{
			address:"MailingAddressInput"
		},
		customerAddressDelete:{

		},
		customerAddressUpdate:{
			address:"MailingAddressInput"
		},
		customerCancelDataErasure:{

		},
		customerCreate:{
			input:"CustomerInput"
		},
		customerDelete:{
			input:"CustomerDeleteInput"
		},
		customerEmailMarketingConsentUpdate:{
			input:"CustomerEmailMarketingConsentUpdateInput"
		},
		customerGenerateAccountActivationUrl:{

		},
		customerMerge:{
			overrideFields:"CustomerMergeOverrideFields"
		},
		customerPaymentMethodCreateFromDuplicationData:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodCreditCardCreate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodCreditCardUpdate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodGetDuplicationData:{

		},
		customerPaymentMethodGetUpdateUrl:{

		},
		customerPaymentMethodPaypalBillingAgreementCreate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodPaypalBillingAgreementUpdate:{
			billingAddress:"MailingAddressInput"
		},
		customerPaymentMethodRemoteCreate:{
			remoteReference:"CustomerPaymentMethodRemoteInput"
		},
		customerPaymentMethodRevoke:{

		},
		customerPaymentMethodSendUpdateEmail:{
			email:"EmailInput"
		},
		customerRemoveTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerReplaceTaxExemptions:{
			taxExemptions:"TaxExemption"
		},
		customerRequestDataErasure:{

		},
		customerSegmentMembersQueryCreate:{
			input:"CustomerSegmentMembersQueryInput"
		},
		customerSendAccountInviteEmail:{
			email:"EmailInput"
		},
		customerSet:{
			input:"CustomerSetInput",
			identifier:"CustomerSetIdentifiers"
		},
		customerSmsMarketingConsentUpdate:{
			input:"CustomerSmsMarketingConsentUpdateInput"
		},
		customerUpdate:{
			input:"CustomerInput"
		},
		customerUpdateDefaultAddress:{

		},
		dataSaleOptOut:{

		},
		delegateAccessTokenCreate:{
			input:"DelegateAccessTokenInput"
		},
		delegateAccessTokenDestroy:{

		},
		deliveryCustomizationActivation:{

		},
		deliveryCustomizationCreate:{
			deliveryCustomization:"DeliveryCustomizationInput"
		},
		deliveryCustomizationDelete:{

		},
		deliveryCustomizationUpdate:{
			deliveryCustomization:"DeliveryCustomizationInput"
		},
		deliveryProfileCreate:{
			profile:"DeliveryProfileInput"
		},
		deliveryProfileRemove:{

		},
		deliveryProfileUpdate:{
			profile:"DeliveryProfileInput"
		},
		deliveryPromiseParticipantsUpdate:{

		},
		deliveryPromiseProviderUpsert:{

		},
		deliverySettingUpdate:{
			setting:"DeliverySettingInput"
		},
		deliveryShippingOriginAssign:{

		},
		discountAutomaticActivate:{

		},
		discountAutomaticAppCreate:{
			automaticAppDiscount:"DiscountAutomaticAppInput"
		},
		discountAutomaticAppUpdate:{
			automaticAppDiscount:"DiscountAutomaticAppInput"
		},
		discountAutomaticBasicCreate:{
			automaticBasicDiscount:"DiscountAutomaticBasicInput"
		},
		discountAutomaticBasicUpdate:{
			automaticBasicDiscount:"DiscountAutomaticBasicInput"
		},
		discountAutomaticBulkDelete:{

		},
		discountAutomaticBxgyCreate:{
			automaticBxgyDiscount:"DiscountAutomaticBxgyInput"
		},
		discountAutomaticBxgyUpdate:{
			automaticBxgyDiscount:"DiscountAutomaticBxgyInput"
		},
		discountAutomaticDeactivate:{

		},
		discountAutomaticDelete:{

		},
		discountAutomaticFreeShippingCreate:{
			freeShippingAutomaticDiscount:"DiscountAutomaticFreeShippingInput"
		},
		discountAutomaticFreeShippingUpdate:{
			freeShippingAutomaticDiscount:"DiscountAutomaticFreeShippingInput"
		},
		discountCodeActivate:{

		},
		discountCodeAppCreate:{
			codeAppDiscount:"DiscountCodeAppInput"
		},
		discountCodeAppUpdate:{
			codeAppDiscount:"DiscountCodeAppInput"
		},
		discountCodeBasicCreate:{
			basicCodeDiscount:"DiscountCodeBasicInput"
		},
		discountCodeBasicUpdate:{
			basicCodeDiscount:"DiscountCodeBasicInput"
		},
		discountCodeBulkActivate:{

		},
		discountCodeBulkDeactivate:{

		},
		discountCodeBulkDelete:{

		},
		discountCodeBxgyCreate:{
			bxgyCodeDiscount:"DiscountCodeBxgyInput"
		},
		discountCodeBxgyUpdate:{
			bxgyCodeDiscount:"DiscountCodeBxgyInput"
		},
		discountCodeDeactivate:{

		},
		discountCodeDelete:{

		},
		discountCodeFreeShippingCreate:{
			freeShippingCodeDiscount:"DiscountCodeFreeShippingInput"
		},
		discountCodeFreeShippingUpdate:{
			freeShippingCodeDiscount:"DiscountCodeFreeShippingInput"
		},
		discountCodeRedeemCodeBulkDelete:{

		},
		discountRedeemCodeBulkAdd:{
			codes:"DiscountRedeemCodeInput"
		},
		disputeEvidenceUpdate:{
			input:"ShopifyPaymentsDisputeEvidenceUpdateInput"
		},
		draftOrderBulkAddTags:{

		},
		draftOrderBulkDelete:{

		},
		draftOrderBulkRemoveTags:{

		},
		draftOrderCalculate:{
			input:"DraftOrderInput"
		},
		draftOrderComplete:{

		},
		draftOrderCreate:{
			input:"DraftOrderInput"
		},
		draftOrderCreateFromOrder:{

		},
		draftOrderDelete:{
			input:"DraftOrderDeleteInput"
		},
		draftOrderDuplicate:{

		},
		draftOrderInvoicePreview:{
			email:"EmailInput"
		},
		draftOrderInvoiceSend:{
			email:"EmailInput"
		},
		draftOrderUpdate:{
			input:"DraftOrderInput"
		},
		eventBridgeServerPixelUpdate:{
			arn:"ARN"
		},
		eventBridgeWebhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"EventBridgeWebhookSubscriptionInput"
		},
		eventBridgeWebhookSubscriptionUpdate:{
			webhookSubscription:"EventBridgeWebhookSubscriptionInput"
		},
		fileAcknowledgeUpdateFailed:{

		},
		fileCreate:{
			files:"FileCreateInput"
		},
		fileDelete:{

		},
		fileUpdate:{
			files:"FileUpdateInput"
		},
		flowGenerateSignature:{

		},
		flowTriggerReceive:{
			payload:"JSON"
		},
		fulfillmentCancel:{

		},
		fulfillmentConstraintRuleCreate:{
			deliveryMethodTypes:"DeliveryMethodType",
			metafields:"MetafieldInput"
		},
		fulfillmentConstraintRuleDelete:{

		},
		fulfillmentConstraintRuleUpdate:{
			deliveryMethodTypes:"DeliveryMethodType"
		},
		fulfillmentCreate:{
			fulfillment:"FulfillmentInput"
		},
		fulfillmentCreateV2:{
			fulfillment:"FulfillmentV2Input"
		},
		fulfillmentEventCreate:{
			fulfillmentEvent:"FulfillmentEventInput"
		},
		fulfillmentOrderAcceptCancellationRequest:{

		},
		fulfillmentOrderAcceptFulfillmentRequest:{
			estimatedShippedAt:"DateTime"
		},
		fulfillmentOrderCancel:{

		},
		fulfillmentOrderClose:{

		},
		fulfillmentOrderHold:{
			fulfillmentHold:"FulfillmentOrderHoldInput"
		},
		fulfillmentOrderLineItemsPreparedForPickup:{
			input:"FulfillmentOrderLineItemsPreparedForPickupInput"
		},
		fulfillmentOrderMerge:{
			fulfillmentOrderMergeInputs:"FulfillmentOrderMergeInput"
		},
		fulfillmentOrderMove:{
			fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
		},
		fulfillmentOrderOpen:{

		},
		fulfillmentOrderRejectCancellationRequest:{

		},
		fulfillmentOrderRejectFulfillmentRequest:{
			reason:"FulfillmentOrderRejectionReason",
			lineItems:"IncomingRequestLineItemInput"
		},
		fulfillmentOrderReleaseHold:{

		},
		fulfillmentOrderReschedule:{
			fulfillAt:"DateTime"
		},
		fulfillmentOrderSplit:{
			fulfillmentOrderSplits:"FulfillmentOrderSplitInput"
		},
		fulfillmentOrderSubmitCancellationRequest:{

		},
		fulfillmentOrderSubmitFulfillmentRequest:{
			fulfillmentOrderLineItems:"FulfillmentOrderLineItemInput"
		},
		fulfillmentOrdersReroute:{

		},
		fulfillmentOrdersSetFulfillmentDeadline:{
			fulfillmentDeadline:"DateTime"
		},
		fulfillmentServiceCreate:{
			callbackUrl:"URL"
		},
		fulfillmentServiceDelete:{
			inventoryAction:"FulfillmentServiceDeleteInventoryAction"
		},
		fulfillmentServiceUpdate:{
			callbackUrl:"URL"
		},
		fulfillmentTrackingInfoUpdate:{
			trackingInfoInput:"FulfillmentTrackingInput"
		},
		fulfillmentTrackingInfoUpdateV2:{
			trackingInfoInput:"FulfillmentTrackingInput"
		},
		giftCardCreate:{
			input:"GiftCardCreateInput"
		},
		giftCardCredit:{
			creditInput:"GiftCardCreditInput"
		},
		giftCardDeactivate:{

		},
		giftCardDebit:{
			debitInput:"GiftCardDebitInput"
		},
		giftCardSendNotificationToCustomer:{

		},
		giftCardSendNotificationToRecipient:{

		},
		giftCardUpdate:{
			input:"GiftCardUpdateInput"
		},
		inventoryActivate:{

		},
		inventoryAdjustQuantities:{
			input:"InventoryAdjustQuantitiesInput"
		},
		inventoryBulkToggleActivation:{
			inventoryItemUpdates:"InventoryBulkToggleActivationInput"
		},
		inventoryDeactivate:{

		},
		inventoryItemUpdate:{
			input:"InventoryItemInput"
		},
		inventoryMoveQuantities:{
			input:"InventoryMoveQuantitiesInput"
		},
		inventorySetOnHandQuantities:{
			input:"InventorySetOnHandQuantitiesInput"
		},
		inventorySetQuantities:{
			input:"InventorySetQuantitiesInput"
		},
		inventorySetScheduledChanges:{
			input:"InventorySetScheduledChangesInput"
		},
		inventoryShipmentAddItems:{
			lineItems:"InventoryShipmentLineItemInput"
		},
		inventoryShipmentCreate:{
			input:"InventoryShipmentCreateInput"
		},
		inventoryShipmentCreateInTransit:{
			input:"InventoryShipmentCreateInput"
		},
		inventoryShipmentDelete:{

		},
		inventoryShipmentMarkInTransit:{
			dateShipped:"DateTime"
		},
		inventoryShipmentReceive:{
			lineItems:"InventoryShipmentReceiveItemInput",
			dateReceived:"DateTime",
			bulkReceiveAction:"InventoryShipmentReceiveLineItemReason"
		},
		inventoryShipmentRemoveItems:{

		},
		inventoryShipmentSetTracking:{
			tracking:"InventoryShipmentTrackingInput"
		},
		inventoryShipmentUpdateItemQuantities:{
			items:"InventoryShipmentUpdateItemQuantitiesInput"
		},
		inventoryTransferCancel:{

		},
		inventoryTransferCreate:{
			input:"InventoryTransferCreateInput"
		},
		inventoryTransferCreateAsReadyToShip:{
			input:"InventoryTransferCreateAsReadyToShipInput"
		},
		inventoryTransferDelete:{

		},
		inventoryTransferDuplicate:{

		},
		inventoryTransferEdit:{
			input:"InventoryTransferEditInput"
		},
		inventoryTransferMarkAsReadyToShip:{

		},
		inventoryTransferRemoveItems:{
			input:"InventoryTransferRemoveItemsInput"
		},
		inventoryTransferSetItems:{
			input:"InventoryTransferSetItemsInput"
		},
		locationActivate:{

		},
		locationAdd:{
			input:"LocationAddInput"
		},
		locationDeactivate:{

		},
		locationDelete:{

		},
		locationEdit:{
			input:"LocationEditInput"
		},
		locationLocalPickupDisable:{

		},
		locationLocalPickupEnable:{
			localPickupSettings:"DeliveryLocationLocalPickupEnableInput"
		},
		marketCreate:{
			input:"MarketCreateInput"
		},
		marketCurrencySettingsUpdate:{
			input:"MarketCurrencySettingsUpdateInput"
		},
		marketDelete:{

		},
		marketLocalizationsRegister:{
			marketLocalizations:"MarketLocalizationRegisterInput"
		},
		marketLocalizationsRemove:{

		},
		marketRegionDelete:{

		},
		marketRegionsCreate:{
			regions:"MarketRegionCreateInput"
		},
		marketRegionsDelete:{

		},
		marketUpdate:{
			input:"MarketUpdateInput"
		},
		marketWebPresenceCreate:{
			webPresence:"MarketWebPresenceCreateInput"
		},
		marketWebPresenceDelete:{

		},
		marketWebPresenceUpdate:{
			webPresence:"MarketWebPresenceUpdateInput"
		},
		marketingActivityCreate:{
			input:"MarketingActivityCreateInput"
		},
		marketingActivityCreateExternal:{
			input:"MarketingActivityCreateExternalInput"
		},
		marketingActivityDeleteExternal:{

		},
		marketingActivityUpdate:{
			input:"MarketingActivityUpdateInput"
		},
		marketingActivityUpdateExternal:{
			input:"MarketingActivityUpdateExternalInput",
			utm:"UTMInput"
		},
		marketingActivityUpsertExternal:{
			input:"MarketingActivityUpsertExternalInput"
		},
		marketingEngagementCreate:{
			marketingEngagement:"MarketingEngagementInput"
		},
		marketingEngagementsDelete:{

		},
		menuCreate:{
			items:"MenuItemCreateInput"
		},
		menuDelete:{

		},
		menuUpdate:{
			items:"MenuItemUpdateInput"
		},
		metafieldDefinitionCreate:{
			definition:"MetafieldDefinitionInput"
		},
		metafieldDefinitionDelete:{
			identifier:"MetafieldDefinitionIdentifierInput"
		},
		metafieldDefinitionPin:{
			identifier:"MetafieldDefinitionIdentifierInput"
		},
		metafieldDefinitionUnpin:{
			identifier:"MetafieldDefinitionIdentifierInput"
		},
		metafieldDefinitionUpdate:{
			definition:"MetafieldDefinitionUpdateInput"
		},
		metafieldsDelete:{
			metafields:"MetafieldIdentifierInput"
		},
		metafieldsSet:{
			metafields:"MetafieldsSetInput"
		},
		metaobjectBulkDelete:{
			where:"MetaobjectBulkDeleteWhereCondition"
		},
		metaobjectCreate:{
			metaobject:"MetaobjectCreateInput"
		},
		metaobjectDefinitionCreate:{
			definition:"MetaobjectDefinitionCreateInput"
		},
		metaobjectDefinitionDelete:{

		},
		metaobjectDefinitionUpdate:{
			definition:"MetaobjectDefinitionUpdateInput"
		},
		metaobjectDelete:{

		},
		metaobjectUpdate:{
			metaobject:"MetaobjectUpdateInput"
		},
		metaobjectUpsert:{
			handle:"MetaobjectHandleInput",
			metaobject:"MetaobjectUpsertInput"
		},
		mobilePlatformApplicationCreate:{
			input:"MobilePlatformApplicationCreateInput"
		},
		mobilePlatformApplicationDelete:{

		},
		mobilePlatformApplicationUpdate:{
			input:"MobilePlatformApplicationUpdateInput"
		},
		orderCancel:{
			refundMethod:"OrderCancelRefundMethodInput",
			reason:"OrderCancelReason"
		},
		orderCapture:{
			input:"OrderCaptureInput"
		},
		orderClose:{
			input:"OrderCloseInput"
		},
		orderCreate:{
			order:"OrderCreateOrderInput",
			options:"OrderCreateOptionsInput"
		},
		orderCreateMandatePayment:{
			amount:"MoneyInput"
		},
		orderCreateManualPayment:{
			amount:"MoneyInput",
			processedAt:"DateTime"
		},
		orderCustomerRemove:{

		},
		orderCustomerSet:{

		},
		orderDelete:{

		},
		orderEditAddCustomItem:{
			price:"MoneyInput"
		},
		orderEditAddLineItemDiscount:{
			discount:"OrderEditAppliedDiscountInput"
		},
		orderEditAddShippingLine:{
			shippingLine:"OrderEditAddShippingLineInput"
		},
		orderEditAddVariant:{

		},
		orderEditBegin:{

		},
		orderEditCommit:{

		},
		orderEditRemoveDiscount:{

		},
		orderEditRemoveLineItemDiscount:{

		},
		orderEditRemoveShippingLine:{

		},
		orderEditSetQuantity:{

		},
		orderEditUpdateDiscount:{
			discount:"OrderEditAppliedDiscountInput"
		},
		orderEditUpdateShippingLine:{
			shippingLine:"OrderEditUpdateShippingLineInput"
		},
		orderInvoiceSend:{
			email:"EmailInput"
		},
		orderMarkAsPaid:{
			input:"OrderMarkAsPaidInput"
		},
		orderOpen:{
			input:"OrderOpenInput"
		},
		orderRiskAssessmentCreate:{
			orderRiskAssessmentInput:"OrderRiskAssessmentCreateInput"
		},
		orderUpdate:{
			input:"OrderInput"
		},
		pageCreate:{
			page:"PageCreateInput"
		},
		pageDelete:{

		},
		pageUpdate:{
			page:"PageUpdateInput"
		},
		paymentCustomizationActivation:{

		},
		paymentCustomizationCreate:{
			paymentCustomization:"PaymentCustomizationInput"
		},
		paymentCustomizationDelete:{

		},
		paymentCustomizationUpdate:{
			paymentCustomization:"PaymentCustomizationInput"
		},
		paymentReminderSend:{

		},
		paymentTermsCreate:{
			paymentTermsAttributes:"PaymentTermsCreateInput"
		},
		paymentTermsDelete:{
			input:"PaymentTermsDeleteInput"
		},
		paymentTermsUpdate:{
			input:"PaymentTermsUpdateInput"
		},
		priceListCreate:{
			input:"PriceListCreateInput"
		},
		priceListDelete:{

		},
		priceListFixedPricesAdd:{
			prices:"PriceListPriceInput"
		},
		priceListFixedPricesByProductUpdate:{
			pricesToAdd:"PriceListProductPriceInput"
		},
		priceListFixedPricesDelete:{

		},
		priceListFixedPricesUpdate:{
			pricesToAdd:"PriceListPriceInput"
		},
		priceListUpdate:{
			input:"PriceListUpdateInput"
		},
		privacyFeaturesDisable:{
			featuresToDisable:"PrivacyFeaturesEnum"
		},
		productBundleCreate:{
			input:"ProductBundleCreateInput"
		},
		productBundleUpdate:{
			input:"ProductBundleUpdateInput"
		},
		productChangeStatus:{
			status:"ProductStatus"
		},
		productCreate:{
			product:"ProductCreateInput",
			media:"CreateMediaInput"
		},
		productCreateMedia:{
			media:"CreateMediaInput"
		},
		productDelete:{
			input:"ProductDeleteInput"
		},
		productDeleteMedia:{

		},
		productDuplicate:{
			newStatus:"ProductStatus"
		},
		productFeedCreate:{
			input:"ProductFeedInput"
		},
		productFeedDelete:{

		},
		productFullSync:{
			beforeUpdatedAt:"DateTime",
			updatedAtSince:"DateTime"
		},
		productJoinSellingPlanGroups:{

		},
		productLeaveSellingPlanGroups:{

		},
		productOptionUpdate:{
			option:"OptionUpdateInput",
			optionValuesToAdd:"OptionValueCreateInput",
			optionValuesToUpdate:"OptionValueUpdateInput",
			variantStrategy:"ProductOptionUpdateVariantStrategy"
		},
		productOptionsCreate:{
			options:"OptionCreateInput",
			variantStrategy:"ProductOptionCreateVariantStrategy"
		},
		productOptionsDelete:{
			strategy:"ProductOptionDeleteStrategy"
		},
		productOptionsReorder:{
			options:"OptionReorderInput"
		},
		productPublish:{
			input:"ProductPublishInput"
		},
		productReorderMedia:{
			moves:"MoveInput"
		},
		productSet:{
			input:"ProductSetInput",
			identifier:"ProductSetIdentifiers"
		},
		productUnpublish:{
			input:"ProductUnpublishInput"
		},
		productUpdate:{
			product:"ProductUpdateInput",
			media:"CreateMediaInput"
		},
		productUpdateMedia:{
			media:"UpdateMediaInput"
		},
		productVariantAppendMedia:{
			variantMedia:"ProductVariantAppendMediaInput"
		},
		productVariantDetachMedia:{
			variantMedia:"ProductVariantDetachMediaInput"
		},
		productVariantJoinSellingPlanGroups:{

		},
		productVariantLeaveSellingPlanGroups:{

		},
		productVariantRelationshipBulkUpdate:{
			input:"ProductVariantRelationshipUpdateInput"
		},
		productVariantsBulkCreate:{
			variants:"ProductVariantsBulkInput",
			media:"CreateMediaInput",
			strategy:"ProductVariantsBulkCreateStrategy"
		},
		productVariantsBulkDelete:{

		},
		productVariantsBulkReorder:{
			positions:"ProductVariantPositionInput"
		},
		productVariantsBulkUpdate:{
			variants:"ProductVariantsBulkInput",
			media:"CreateMediaInput"
		},
		pubSubServerPixelUpdate:{

		},
		pubSubWebhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"PubSubWebhookSubscriptionInput"
		},
		pubSubWebhookSubscriptionUpdate:{
			webhookSubscription:"PubSubWebhookSubscriptionInput"
		},
		publicationCreate:{
			input:"PublicationCreateInput"
		},
		publicationDelete:{

		},
		publicationUpdate:{
			input:"PublicationUpdateInput"
		},
		publishablePublish:{
			input:"PublicationInput"
		},
		publishablePublishToCurrentChannel:{

		},
		publishableUnpublish:{
			input:"PublicationInput"
		},
		publishableUnpublishToCurrentChannel:{

		},
		quantityPricingByVariantUpdate:{
			input:"QuantityPricingByVariantUpdateInput"
		},
		quantityRulesAdd:{
			quantityRules:"QuantityRuleInput"
		},
		quantityRulesDelete:{

		},
		refundCreate:{
			input:"RefundInput"
		},
		removeFromReturn:{
			returnLineItems:"ReturnLineItemRemoveFromReturnInput",
			exchangeLineItems:"ExchangeLineItemRemoveFromReturnInput"
		},
		returnApproveRequest:{
			input:"ReturnApproveRequestInput"
		},
		returnCancel:{

		},
		returnClose:{

		},
		returnCreate:{
			returnInput:"ReturnInput"
		},
		returnDeclineRequest:{
			input:"ReturnDeclineRequestInput"
		},
		returnLineItemRemoveFromReturn:{
			returnLineItems:"ReturnLineItemRemoveFromReturnInput"
		},
		returnProcess:{
			input:"ReturnProcessInput"
		},
		returnRefund:{
			returnRefundInput:"ReturnRefundInput"
		},
		returnReopen:{

		},
		returnRequest:{
			input:"ReturnRequestInput"
		},
		reverseDeliveryCreateWithShipping:{
			reverseDeliveryLineItems:"ReverseDeliveryLineItemInput",
			trackingInput:"ReverseDeliveryTrackingInput",
			labelInput:"ReverseDeliveryLabelInput"
		},
		reverseDeliveryShippingUpdate:{
			trackingInput:"ReverseDeliveryTrackingInput",
			labelInput:"ReverseDeliveryLabelInput"
		},
		reverseFulfillmentOrderDispose:{
			dispositionInputs:"ReverseFulfillmentOrderDisposeInput"
		},
		savedSearchCreate:{
			input:"SavedSearchCreateInput"
		},
		savedSearchDelete:{
			input:"SavedSearchDeleteInput"
		},
		savedSearchUpdate:{
			input:"SavedSearchUpdateInput"
		},
		scriptTagCreate:{
			input:"ScriptTagInput"
		},
		scriptTagDelete:{

		},
		scriptTagUpdate:{
			input:"ScriptTagInput"
		},
		segmentCreate:{

		},
		segmentDelete:{

		},
		segmentUpdate:{

		},
		sellingPlanGroupAddProductVariants:{

		},
		sellingPlanGroupAddProducts:{

		},
		sellingPlanGroupCreate:{
			input:"SellingPlanGroupInput",
			resources:"SellingPlanGroupResourceInput"
		},
		sellingPlanGroupDelete:{

		},
		sellingPlanGroupRemoveProductVariants:{

		},
		sellingPlanGroupRemoveProducts:{

		},
		sellingPlanGroupUpdate:{
			input:"SellingPlanGroupInput"
		},
		shippingPackageDelete:{

		},
		shippingPackageMakeDefault:{

		},
		shippingPackageUpdate:{
			shippingPackage:"CustomShippingPackageInput"
		},
		shopLocaleDisable:{

		},
		shopLocaleEnable:{

		},
		shopLocaleUpdate:{
			shopLocale:"ShopLocaleInput"
		},
		shopPolicyUpdate:{
			shopPolicy:"ShopPolicyInput"
		},
		shopResourceFeedbackCreate:{
			input:"ResourceFeedbackCreateInput"
		},
		shopifyPaymentsPayoutAlternateCurrencyCreate:{
			currency:"CurrencyCode"
		},
		stagedUploadTargetGenerate:{
			input:"StagedUploadTargetGenerateInput"
		},
		stagedUploadTargetsGenerate:{
			input:"StageImageInput"
		},
		stagedUploadsCreate:{
			input:"StagedUploadInput"
		},
		standardMetafieldDefinitionEnable:{
			ownerType:"MetafieldOwnerType",
			capabilities:"MetafieldCapabilityCreateInput",
			access:"StandardMetafieldDefinitionAccessInput"
		},
		standardMetaobjectDefinitionEnable:{

		},
		storeCreditAccountCredit:{
			creditInput:"StoreCreditAccountCreditInput"
		},
		storeCreditAccountDebit:{
			debitInput:"StoreCreditAccountDebitInput"
		},
		storefrontAccessTokenCreate:{
			input:"StorefrontAccessTokenInput"
		},
		storefrontAccessTokenDelete:{
			input:"StorefrontAccessTokenDeleteInput"
		},
		subscriptionBillingAttemptCreate:{
			subscriptionBillingAttemptInput:"SubscriptionBillingAttemptInput"
		},
		subscriptionBillingCycleBulkCharge:{
			billingAttemptExpectedDateRange:"SubscriptionBillingCyclesDateRangeSelector",
			filters:"SubscriptionBillingCycleBulkFilters",
			inventoryPolicy:"SubscriptionBillingAttemptInventoryPolicy"
		},
		subscriptionBillingCycleBulkSearch:{
			billingAttemptExpectedDateRange:"SubscriptionBillingCyclesDateRangeSelector",
			filters:"SubscriptionBillingCycleBulkFilters"
		},
		subscriptionBillingCycleCharge:{
			billingCycleSelector:"SubscriptionBillingCycleSelector",
			inventoryPolicy:"SubscriptionBillingAttemptInventoryPolicy"
		},
		subscriptionBillingCycleContractDraftCommit:{

		},
		subscriptionBillingCycleContractDraftConcatenate:{
			concatenatedBillingCycleContracts:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleContractEdit:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleEditDelete:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleEditsDelete:{
			targetSelection:"SubscriptionBillingCyclesTargetSelection"
		},
		subscriptionBillingCycleScheduleEdit:{
			billingCycleInput:"SubscriptionBillingCycleInput",
			input:"SubscriptionBillingCycleScheduleEditInput"
		},
		subscriptionBillingCycleSkip:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleUnskip:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionContractActivate:{

		},
		subscriptionContractAtomicCreate:{
			input:"SubscriptionContractAtomicCreateInput"
		},
		subscriptionContractCancel:{

		},
		subscriptionContractCreate:{
			input:"SubscriptionContractCreateInput"
		},
		subscriptionContractExpire:{

		},
		subscriptionContractFail:{

		},
		subscriptionContractPause:{

		},
		subscriptionContractProductChange:{
			input:"SubscriptionContractProductChangeInput"
		},
		subscriptionContractSetNextBillingDate:{
			date:"DateTime"
		},
		subscriptionContractUpdate:{

		},
		subscriptionDraftCommit:{

		},
		subscriptionDraftDiscountAdd:{
			input:"SubscriptionManualDiscountInput"
		},
		subscriptionDraftDiscountCodeApply:{

		},
		subscriptionDraftDiscountRemove:{

		},
		subscriptionDraftDiscountUpdate:{
			input:"SubscriptionManualDiscountInput"
		},
		subscriptionDraftFreeShippingDiscountAdd:{
			input:"SubscriptionFreeShippingDiscountInput"
		},
		subscriptionDraftFreeShippingDiscountUpdate:{
			input:"SubscriptionFreeShippingDiscountInput"
		},
		subscriptionDraftLineAdd:{
			input:"SubscriptionLineInput"
		},
		subscriptionDraftLineRemove:{

		},
		subscriptionDraftLineUpdate:{
			input:"SubscriptionLineUpdateInput"
		},
		subscriptionDraftUpdate:{
			input:"SubscriptionDraftInput"
		},
		tagsAdd:{

		},
		tagsRemove:{

		},
		taxAppConfigure:{

		},
		themeCreate:{
			source:"URL",
			role:"ThemeRole"
		},
		themeDelete:{

		},
		themeDuplicate:{

		},
		themeFilesCopy:{
			files:"ThemeFilesCopyFileInput"
		},
		themeFilesDelete:{

		},
		themeFilesUpsert:{
			files:"OnlineStoreThemeFilesUpsertFileInput"
		},
		themePublish:{

		},
		themeUpdate:{
			input:"OnlineStoreThemeInput"
		},
		transactionVoid:{

		},
		translationsRegister:{
			translations:"TranslationInput"
		},
		translationsRemove:{

		},
		urlRedirectBulkDeleteByIds:{

		},
		urlRedirectBulkDeleteBySavedSearch:{

		},
		urlRedirectBulkDeleteBySearch:{

		},
		urlRedirectCreate:{
			urlRedirect:"UrlRedirectInput"
		},
		urlRedirectDelete:{

		},
		urlRedirectImportCreate:{
			url:"URL"
		},
		urlRedirectImportSubmit:{

		},
		urlRedirectUpdate:{
			urlRedirect:"UrlRedirectInput"
		},
		validationCreate:{
			validation:"ValidationCreateInput"
		},
		validationDelete:{

		},
		validationUpdate:{
			validation:"ValidationUpdateInput"
		},
		webPixelCreate:{
			webPixel:"WebPixelInput"
		},
		webPixelDelete:{

		},
		webPixelUpdate:{
			webPixel:"WebPixelInput"
		},
		webPresenceCreate:{
			input:"WebPresenceCreateInput"
		},
		webPresenceDelete:{

		},
		webPresenceUpdate:{
			input:"WebPresenceUpdateInput"
		},
		webhookSubscriptionCreate:{
			topic:"WebhookSubscriptionTopic",
			webhookSubscription:"WebhookSubscriptionInput"
		},
		webhookSubscriptionDelete:{

		},
		webhookSubscriptionUpdate:{
			webhookSubscription:"WebhookSubscriptionInput"
		}
	},
	NotificationUsage: "enum" as const,
	ObjectDimensionsInput:{
		unit:"LengthUnit"
	},
	OnlineStoreTheme:{
		files:{

		},
		translations:{

		}
	},
	OnlineStoreThemeFileBodyInput:{
		type:"OnlineStoreThemeFileBodyInputType"
	},
	OnlineStoreThemeFileBodyInputType: "enum" as const,
	OnlineStoreThemeFileResultType: "enum" as const,
	OnlineStoreThemeFilesUpsertFileInput:{
		body:"OnlineStoreThemeFileBodyInput"
	},
	OnlineStoreThemeFilesUserErrorsCode: "enum" as const,
	OnlineStoreThemeInput:{

	},
	OptionAndValueInput:{
		linkedMetafield:"LinkedMetafieldInput"
	},
	OptionCreateInput:{
		values:"OptionValueCreateInput",
		linkedMetafield:"LinkedMetafieldCreateInput"
	},
	OptionReorderInput:{
		values:"OptionValueReorderInput"
	},
	OptionSetInput:{
		values:"OptionValueSetInput",
		linkedMetafield:"LinkedMetafieldCreateInput"
	},
	OptionUpdateInput:{
		linkedMetafield:"LinkedMetafieldUpdateInput"
	},
	OptionValueCreateInput:{

	},
	OptionValueReorderInput:{

	},
	OptionValueSetInput:{

	},
	OptionValueUpdateInput:{

	},
	Order:{
		agreements:{

		},
		discountApplications:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		exchangeV2s:{

		},
		fulfillmentOrders:{

		},
		fulfillments:{

		},
		lineItems:{

		},
		localizationExtensions:{
			countryCodes:"CountryCode",
			purposes:"LocalizationExtensionPurpose"
		},
		localizedFields:{
			countryCodes:"CountryCode",
			purposes:"LocalizedFieldPurpose"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		nonFulfillableLineItems:{

		},
		refunds:{

		},
		returns:{

		},
		risks:{

		},
		shippingLines:{

		},
		statusPageUrl:{
			audience:"Audience",
			notificationUsage:"NotificationUsage"
		},
		suggestedRefund:{
			shippingAmount:"Money",
			refundLineItems:"RefundLineItemInput",
			refundDuties:"RefundDutyInput",
			refundMethodAllocation:"RefundMethodAllocation"
		},
		transactions:{

		}
	},
	OrderActionType: "enum" as const,
	OrderAdjustmentDiscrepancyReason: "enum" as const,
	OrderAdjustmentInputDiscrepancyReason: "enum" as const,
	OrderAgreement:{
		sales:{

		}
	},
	OrderCancelReason: "enum" as const,
	OrderCancelRefundMethodInput:{
		storeCreditRefund:"OrderCancelStoreCreditRefundInput"
	},
	OrderCancelStoreCreditRefundInput:{
		expiresAt:"DateTime"
	},
	OrderCancelUserErrorCode: "enum" as const,
	OrderCaptureInput:{
		amount:"Money",
		currency:"CurrencyCode"
	},
	OrderCloseInput:{

	},
	OrderCreateAssociateCustomerAttributesInput:{

	},
	OrderCreateCustomAttributeInput:{

	},
	OrderCreateCustomerAddressInput:{

	},
	OrderCreateCustomerInput:{
		toAssociate:"OrderCreateAssociateCustomerAttributesInput",
		toUpsert:"OrderCreateUpsertCustomerAttributesInput"
	},
	OrderCreateDiscountCodeInput:{
		itemPercentageDiscountCode:"OrderCreatePercentageDiscountCodeAttributesInput",
		itemFixedDiscountCode:"OrderCreateFixedDiscountCodeAttributesInput",
		freeShippingDiscountCode:"OrderCreateFreeShippingDiscountCodeAttributesInput"
	},
	OrderCreateFinancialStatus: "enum" as const,
	OrderCreateFixedDiscountCodeAttributesInput:{
		amountSet:"MoneyBagInput"
	},
	OrderCreateFreeShippingDiscountCodeAttributesInput:{

	},
	OrderCreateFulfillmentInput:{
		originAddress:"FulfillmentOriginAddressInput",
		shipmentStatus:"FulfillmentEventStatus"
	},
	OrderCreateFulfillmentStatus: "enum" as const,
	OrderCreateInputsInventoryBehavior: "enum" as const,
	OrderCreateLineItemInput:{
		priceSet:"MoneyBagInput",
		properties:"OrderCreateLineItemPropertyInput",
		taxLines:"OrderCreateTaxLineInput",
		weight:"WeightInput"
	},
	OrderCreateLineItemPropertyInput:{

	},
	OrderCreateMandatePaymentUserErrorCode: "enum" as const,
	OrderCreateManualPaymentOrderCreateManualPaymentErrorCode: "enum" as const,
	OrderCreateOptionsInput:{
		inventoryBehaviour:"OrderCreateInputsInventoryBehavior"
	},
	OrderCreateOrderInput:{
		billingAddress:"MailingAddressInput",
		closedAt:"DateTime",
		currency:"CurrencyCode",
		customAttributes:"OrderCreateCustomAttributeInput",
		customer:"OrderCreateCustomerInput",
		discountCode:"OrderCreateDiscountCodeInput",
		financialStatus:"OrderCreateFinancialStatus",
		fulfillment:"OrderCreateFulfillmentInput",
		fulfillmentStatus:"OrderCreateFulfillmentStatus",
		lineItems:"OrderCreateLineItemInput",
		metafields:"MetafieldInput",
		presentmentCurrency:"CurrencyCode",
		processedAt:"DateTime",
		referringSite:"URL",
		shippingAddress:"MailingAddressInput",
		shippingLines:"OrderCreateShippingLineInput",
		sourceUrl:"URL",
		taxLines:"OrderCreateTaxLineInput",
		transactions:"OrderCreateOrderTransactionInput"
	},
	OrderCreateOrderTransactionInput:{
		amountSet:"MoneyBagInput",
		kind:"OrderTransactionKind",
		processedAt:"DateTime",
		receiptJson:"JSON",
		status:"OrderTransactionStatus"
	},
	OrderCreatePercentageDiscountCodeAttributesInput:{

	},
	OrderCreateShippingLineInput:{
		priceSet:"MoneyBagInput",
		taxLines:"OrderCreateTaxLineInput"
	},
	OrderCreateTaxLineInput:{
		priceSet:"MoneyBagInput",
		rate:"Decimal"
	},
	OrderCreateUpsertCustomerAttributesInput:{
		addresses:"OrderCreateCustomerAddressInput"
	},
	OrderCreateUserErrorCode: "enum" as const,
	OrderCustomerRemoveUserErrorCode: "enum" as const,
	OrderCustomerSetUserErrorCode: "enum" as const,
	OrderDeleteUserErrorCode: "enum" as const,
	OrderDisplayFinancialStatus: "enum" as const,
	OrderDisplayFulfillmentStatus: "enum" as const,
	OrderEditAddShippingLineInput:{
		price:"MoneyInput"
	},
	OrderEditAddShippingLineUserErrorCode: "enum" as const,
	OrderEditAgreement:{
		sales:{

		}
	},
	OrderEditAppliedDiscountInput:{
		fixedValue:"MoneyInput"
	},
	OrderEditRemoveDiscountUserErrorCode: "enum" as const,
	OrderEditRemoveShippingLineUserErrorCode: "enum" as const,
	OrderEditUpdateDiscountUserErrorCode: "enum" as const,
	OrderEditUpdateShippingLineInput:{
		price:"MoneyInput"
	},
	OrderEditUpdateShippingLineUserErrorCode: "enum" as const,
	OrderIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	OrderInput:{
		shippingAddress:"MailingAddressInput",
		customAttributes:"AttributeInput",
		metafields:"MetafieldInput",
		localizedFields:"LocalizedFieldInput"
	},
	OrderInvoiceSendUserErrorCode: "enum" as const,
	OrderMarkAsPaidInput:{

	},
	OrderOpenInput:{

	},
	OrderPaymentStatusResult: "enum" as const,
	OrderReturnStatus: "enum" as const,
	OrderRiskAssessmentCreateInput:{
		riskLevel:"RiskAssessmentResult",
		facts:"OrderRiskAssessmentFactInput"
	},
	OrderRiskAssessmentCreateUserErrorCode: "enum" as const,
	OrderRiskAssessmentFactInput:{
		sentiment:"RiskFactSentiment"
	},
	OrderRiskLevel: "enum" as const,
	OrderRiskRecommendationResult: "enum" as const,
	OrderSortKeys: "enum" as const,
	OrderTransactionErrorCode: "enum" as const,
	OrderTransactionInput:{
		amount:"Money",
		kind:"OrderTransactionKind"
	},
	OrderTransactionKind: "enum" as const,
	OrderTransactionStatus: "enum" as const,
	Page:{
		events:{
			sortKey:"EventSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		translations:{

		}
	},
	PageCreateInput:{
		publishDate:"DateTime",
		metafields:"MetafieldInput"
	},
	PageCreateUserErrorCode: "enum" as const,
	PageDeleteUserErrorCode: "enum" as const,
	PageSortKeys: "enum" as const,
	PageUpdateInput:{
		publishDate:"DateTime",
		metafields:"MetafieldInput"
	},
	PageUpdateUserErrorCode: "enum" as const,
	PaymentCustomization:{
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	PaymentCustomizationErrorCode: "enum" as const,
	PaymentCustomizationInput:{
		metafields:"MetafieldInput"
	},
	PaymentMethods: "enum" as const,
	PaymentReminderSendUserErrorCode: "enum" as const,
	PaymentScheduleInput:{
		issuedAt:"DateTime",
		dueAt:"DateTime"
	},
	PaymentTerms:{
		paymentSchedules:{

		}
	},
	PaymentTermsCreateInput:{
		paymentSchedules:"PaymentScheduleInput"
	},
	PaymentTermsCreateUserErrorCode: "enum" as const,
	PaymentTermsDeleteInput:{

	},
	PaymentTermsDeleteUserErrorCode: "enum" as const,
	PaymentTermsInput:{
		paymentSchedules:"PaymentScheduleInput"
	},
	PaymentTermsType: "enum" as const,
	PaymentTermsUpdateInput:{
		paymentTermsAttributes:"PaymentTermsInput"
	},
	PaymentTermsUpdateUserErrorCode: "enum" as const,
	PayoutSortKeys: "enum" as const,
	PaypalExpressSubscriptionsGatewayStatus: "enum" as const,
	PreparedFulfillmentOrderLineItemsInput:{

	},
	PriceCalculationType: "enum" as const,
	PriceInput:{
		calculation:"PriceCalculationType",
		price:"Money"
	},
	PriceList:{
		prices:{
			originType:"PriceListPriceOriginType"
		},
		quantityRules:{
			originType:"QuantityRuleOriginType"
		}
	},
	PriceListAdjustmentInput:{
		type:"PriceListAdjustmentType"
	},
	PriceListAdjustmentSettingsInput:{
		compareAtMode:"PriceListCompareAtMode"
	},
	PriceListAdjustmentType: "enum" as const,
	PriceListCompareAtMode: "enum" as const,
	PriceListCreateInput:{
		currency:"CurrencyCode",
		parent:"PriceListParentCreateInput"
	},
	PriceListFixedPricesByProductBulkUpdateUserErrorCode: "enum" as const,
	PriceListParentCreateInput:{
		adjustment:"PriceListAdjustmentInput",
		settings:"PriceListAdjustmentSettingsInput"
	},
	PriceListParentUpdateInput:{
		adjustment:"PriceListAdjustmentInput",
		settings:"PriceListAdjustmentSettingsInput"
	},
	PriceListPrice:{
		quantityPriceBreaks:{
			sortKey:"QuantityPriceBreakSortKeys"
		}
	},
	PriceListPriceInput:{
		price:"MoneyInput",
		compareAtPrice:"MoneyInput"
	},
	PriceListPriceOriginType: "enum" as const,
	PriceListPriceUserErrorCode: "enum" as const,
	PriceListProductPriceInput:{
		price:"MoneyInput"
	},
	PriceListSortKeys: "enum" as const,
	PriceListUpdateInput:{
		currency:"CurrencyCode",
		parent:"PriceListParentUpdateInput"
	},
	PriceListUserErrorCode: "enum" as const,
	PriceRule:{
		discountCodes:{
			sortKey:"DiscountCodeSortKeys"
		},
		events:{
			sortKey:"EventSortKeys"
		}
	},
	PriceRuleAllocationMethod: "enum" as const,
	PriceRuleCustomerSelection:{
		customers:{
			sortKey:"CustomerSortKeys"
		}
	},
	PriceRuleFeature: "enum" as const,
	PriceRuleItemEntitlements:{
		collections:{

		},
		productVariants:{

		},
		products:{

		}
	},
	PriceRuleLineItemPrerequisites:{
		collections:{

		},
		productVariants:{

		},
		products:{

		}
	},
	PriceRuleShareableUrlTargetType: "enum" as const,
	PriceRuleStatus: "enum" as const,
	PriceRuleTarget: "enum" as const,
	PriceRuleTrait: "enum" as const,
	PrivacyCountryCode: "enum" as const,
	PrivacyFeaturesDisableUserErrorCode: "enum" as const,
	PrivacyFeaturesEnum: "enum" as const,
	Product:{
		bundleComponents:{

		},
		collections:{
			sortKey:"CollectionSortKeys"
		},
		contextualPricing:{
			context:"ContextualPricingContext"
		},
		description:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		images:{
			sortKey:"ProductImageSortKeys"
		},
		inCollection:{

		},
		media:{
			sortKey:"ProductMediaSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		options:{

		},
		productComponents:{

		},
		productParents:{

		},
		productPublications:{

		},
		publicationCount:{

		},
		publications:{

		},
		publishedInContext:{
			context:"ContextualPublicationContext"
		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsCount:{

		},
		resourcePublicationsV2:{
			catalogType:"CatalogType"
		},
		restrictedForResource:{

		},
		sellingPlanGroups:{

		},
		translations:{

		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		},
		variants:{
			sortKey:"ProductVariantSortKeys"
		}
	},
	ProductBundleComponent:{
		componentVariants:{

		}
	},
	ProductBundleComponentInput:{
		optionSelections:"ProductBundleComponentOptionSelectionInput",
		quantityOption:"ProductBundleComponentQuantityOptionInput"
	},
	ProductBundleComponentOptionSelectionInput:{

	},
	ProductBundleComponentOptionSelectionStatus: "enum" as const,
	ProductBundleComponentQuantityOptionInput:{
		values:"ProductBundleComponentQuantityOptionValueInput"
	},
	ProductBundleComponentQuantityOptionValueInput:{

	},
	ProductBundleCreateInput:{
		components:"ProductBundleComponentInput"
	},
	ProductBundleMutationUserErrorCode: "enum" as const,
	ProductBundleUpdateInput:{
		components:"ProductBundleComponentInput"
	},
	ProductChangeStatusUserErrorCode: "enum" as const,
	ProductClaimOwnershipInput:{

	},
	ProductCollectionSortKeys: "enum" as const,
	ProductComponentType:{
		componentVariants:{

		},
		nonComponentVariants:{

		}
	},
	ProductCreateInput:{
		seo:"SEOInput",
		combinedListingRole:"CombinedListingsRole",
		metafields:"MetafieldInput",
		productOptions:"OptionCreateInput",
		status:"ProductStatus",
		claimOwnership:"ProductClaimOwnershipInput"
	},
	ProductDeleteInput:{

	},
	ProductFeedCreateUserErrorCode: "enum" as const,
	ProductFeedDeleteUserErrorCode: "enum" as const,
	ProductFeedInput:{
		language:"LanguageCode",
		country:"CountryCode"
	},
	ProductFeedStatus: "enum" as const,
	ProductFullSyncUserErrorCode: "enum" as const,
	ProductIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	ProductImageSortKeys: "enum" as const,
	ProductInput:{
		seo:"SEOInput",
		combinedListingRole:"CombinedListingsRole",
		metafields:"MetafieldInput",
		productOptions:"OptionCreateInput",
		status:"ProductStatus",
		claimOwnership:"ProductClaimOwnershipInput"
	},
	ProductMediaSortKeys: "enum" as const,
	ProductOperationStatus: "enum" as const,
	ProductOption:{
		translations:{

		}
	},
	ProductOptionCreateVariantStrategy: "enum" as const,
	ProductOptionDeleteStrategy: "enum" as const,
	ProductOptionUpdateUserErrorCode: "enum" as const,
	ProductOptionUpdateVariantStrategy: "enum" as const,
	ProductOptionValue:{
		translations:{

		}
	},
	ProductOptionsCreateUserErrorCode: "enum" as const,
	ProductOptionsDeleteUserErrorCode: "enum" as const,
	ProductOptionsReorderUserErrorCode: "enum" as const,
	ProductPublicationInput:{
		publishDate:"DateTime"
	},
	ProductPublishInput:{
		productPublications:"ProductPublicationInput"
	},
	ProductResourceFeedbackInput:{
		state:"ResourceFeedbackState",
		feedbackGeneratedAt:"DateTime",
		productUpdatedAt:"DateTime"
	},
	ProductSetIdentifiers:{
		customId:"UniqueMetafieldValueInput"
	},
	ProductSetInput:{
		seo:"SEOInput",
		metafields:"MetafieldInput",
		variants:"ProductVariantSetInput",
		files:"FileSetInput",
		status:"ProductStatus",
		productOptions:"OptionSetInput",
		claimOwnership:"ProductClaimOwnershipInput",
		combinedListingRole:"CombinedListingsRole"
	},
	ProductSetInventoryInput:{

	},
	ProductSetUserErrorCode: "enum" as const,
	ProductSortKeys: "enum" as const,
	ProductStatus: "enum" as const,
	ProductUnpublishInput:{
		productPublications:"ProductPublicationInput"
	},
	ProductUpdateInput:{
		seo:"SEOInput",
		metafields:"MetafieldInput",
		status:"ProductStatus"
	},
	ProductVariant:{
		contextualPricing:{
			context:"ContextualPricingContext"
		},
		events:{
			sortKey:"EventSortKeys"
		},
		media:{

		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		presentmentPrices:{
			presentmentCurrencies:"CurrencyCode"
		},
		productParents:{

		},
		productVariantComponents:{

		},
		sellingPlanGroups:{

		},
		translations:{

		}
	},
	ProductVariantAppendMediaInput:{

	},
	ProductVariantContextualPricing:{
		quantityPriceBreaks:{
			sortKey:"QuantityPriceBreakSortKeys"
		}
	},
	ProductVariantDetachMediaInput:{

	},
	ProductVariantGroupRelationshipInput:{

	},
	ProductVariantIdentifierInput:{
		customId:"UniqueMetafieldValueInput"
	},
	ProductVariantInventoryPolicy: "enum" as const,
	ProductVariantPositionInput:{

	},
	ProductVariantRelationshipBulkUpdateUserErrorCode: "enum" as const,
	ProductVariantRelationshipUpdateInput:{
		productVariantRelationshipsToCreate:"ProductVariantGroupRelationshipInput",
		productVariantRelationshipsToUpdate:"ProductVariantGroupRelationshipInput",
		priceInput:"PriceInput"
	},
	ProductVariantSetInput:{
		compareAtPrice:"Money",
		file:"FileSetInput",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantities:"ProductSetInventoryInput",
		inventoryItem:"InventoryItemInput",
		metafields:"MetafieldInput",
		optionValues:"VariantOptionValueInput",
		price:"Money",
		unitPriceMeasurement:"UnitPriceMeasurementInput"
	},
	ProductVariantSortKeys: "enum" as const,
	ProductVariantsBulkCreateStrategy: "enum" as const,
	ProductVariantsBulkCreateUserErrorCode: "enum" as const,
	ProductVariantsBulkDeleteUserErrorCode: "enum" as const,
	ProductVariantsBulkInput:{
		compareAtPrice:"Money",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantities:"InventoryLevelInput",
		inventoryItem:"InventoryItemInput",
		metafields:"MetafieldInput",
		optionValues:"VariantOptionValueInput",
		price:"Money",
		unitPriceMeasurement:"UnitPriceMeasurementInput"
	},
	ProductVariantsBulkReorderUserErrorCode: "enum" as const,
	ProductVariantsBulkUpdateUserErrorCode: "enum" as const,
	ProfileItemSortKeys: "enum" as const,
	PubSubWebhookSubscriptionCreateUserErrorCode: "enum" as const,
	PubSubWebhookSubscriptionInput:{
		format:"WebhookSubscriptionFormat",
		metafields:"HasMetafieldsMetafieldIdentifierInput"
	},
	PubSubWebhookSubscriptionUpdateUserErrorCode: "enum" as const,
	Publication:{
		collectionPublicationsV3:{

		},
		collections:{

		},
		hasCollection:{

		},
		includedProducts:{
			sortKey:"ProductSortKeys"
		},
		includedProductsCount:{

		},
		productPublicationsV3:{

		},
		products:{
			sortKey:"ProductSortKeys"
		}
	},
	PublicationCreateInput:{
		defaultState:"PublicationCreateInputPublicationDefaultState"
	},
	PublicationCreateInputPublicationDefaultState: "enum" as const,
	PublicationInput:{
		publishDate:"DateTime"
	},
	PublicationUpdateInput:{

	},
	PublicationUserErrorCode: "enum" as const,
	Publishable:{
		publicationCount:{

		},
		publishedOnChannel:{

		},
		publishedOnPublication:{

		},
		resourcePublications:{

		},
		resourcePublicationsCount:{

		},
		resourcePublicationsV2:{
			catalogType:"CatalogType"
		},
		unpublishedChannels:{

		},
		unpublishedPublications:{

		}
	},
	PurchasingCompanyInput:{

	},
	PurchasingEntityInput:{
		purchasingCompany:"PurchasingCompanyInput"
	},
	QuantityPriceBreakInput:{
		price:"MoneyInput"
	},
	QuantityPriceBreakSortKeys: "enum" as const,
	QuantityPricingByVariantUpdateInput:{
		quantityPriceBreaksToAdd:"QuantityPriceBreakInput",
		quantityRulesToAdd:"QuantityRuleInput",
		pricesToAdd:"PriceListPriceInput"
	},
	QuantityPricingByVariantUserErrorCode: "enum" as const,
	QuantityRuleInput:{

	},
	QuantityRuleOriginType: "enum" as const,
	QuantityRuleUserErrorCode: "enum" as const,
	QueryRoot:{
		abandonedCheckouts:{
			sortKey:"AbandonedCheckoutSortKeys"
		},
		abandonedCheckoutsCount:{

		},
		abandonment:{

		},
		abandonmentByAbandonedCheckoutId:{

		},
		app:{

		},
		appByHandle:{

		},
		appByKey:{

		},
		appDiscountType:{

		},
		appDiscountTypesNodes:{

		},
		appInstallation:{

		},
		appInstallations:{
			sortKey:"AppInstallationSortKeys",
			category:"AppInstallationCategory",
			privacy:"AppInstallationPrivacy"
		},
		article:{

		},
		articleAuthors:{

		},
		articleTags:{
			sort:"ArticleTagSort"
		},
		articles:{
			sortKey:"ArticleSortKeys"
		},
		assignedFulfillmentOrders:{
			assignmentStatus:"FulfillmentOrderAssignmentStatus",
			sortKey:"FulfillmentOrderSortKeys"
		},
		automaticDiscount:{

		},
		automaticDiscountNode:{

		},
		automaticDiscountNodes:{
			sortKey:"AutomaticDiscountSortKeys"
		},
		automaticDiscountSavedSearches:{

		},
		automaticDiscounts:{
			sortKey:"AutomaticDiscountSortKeys"
		},
		blog:{

		},
		blogs:{
			sortKey:"BlogSortKeys"
		},
		blogsCount:{

		},
		businessEntity:{

		},
		carrierService:{

		},
		carrierServices:{
			sortKey:"CarrierServiceSortKeys"
		},
		cartTransforms:{

		},
		cashTrackingSession:{

		},
		cashTrackingSessions:{
			sortKey:"CashTrackingSessionsSortKeys"
		},
		catalog:{

		},
		catalogs:{
			type:"CatalogType",
			sortKey:"CatalogSortKeys"
		},
		catalogsCount:{
			type:"CatalogType"
		},
		channel:{

		},
		channels:{

		},
		checkoutBranding:{

		},
		checkoutProfile:{

		},
		checkoutProfiles:{
			sortKey:"CheckoutProfileSortKeys"
		},
		codeDiscountNode:{

		},
		codeDiscountNodeByCode:{

		},
		codeDiscountNodes:{
			sortKey:"CodeDiscountSortKeys"
		},
		codeDiscountSavedSearches:{

		},
		collection:{

		},
		collectionByHandle:{

		},
		collectionByIdentifier:{
			identifier:"CollectionIdentifierInput"
		},
		collectionSavedSearches:{

		},
		collections:{
			sortKey:"CollectionSortKeys"
		},
		collectionsCount:{

		},
		comment:{

		},
		comments:{
			sortKey:"CommentSortKeys"
		},
		companies:{
			sortKey:"CompanySortKeys"
		},
		companiesCount:{

		},
		company:{

		},
		companyContact:{

		},
		companyContactRole:{

		},
		companyLocation:{

		},
		companyLocations:{
			sortKey:"CompanyLocationSortKeys"
		},
		consentPolicy:{
			countryCode:"PrivacyCountryCode"
		},
		currentBulkOperation:{
			type:"BulkOperationType"
		},
		customer:{

		},
		customerAccountPage:{

		},
		customerAccountPages:{

		},
		customerByIdentifier:{
			identifier:"CustomerIdentifierInput"
		},
		customerMergeJobStatus:{

		},
		customerMergePreview:{
			overrideFields:"CustomerMergeOverrideFields"
		},
		customerPaymentMethod:{

		},
		customerSavedSearches:{
			sortKey:"CustomerSavedSearchSortKeys"
		},
		customerSegmentMembers:{

		},
		customerSegmentMembersQuery:{

		},
		customerSegmentMembership:{

		},
		customers:{
			sortKey:"CustomerSortKeys"
		},
		customersCount:{

		},
		deletionEvents:{
			subjectTypes:"DeletionEventSubjectType",
			sortKey:"DeletionEventSortKeys"
		},
		deliveryCustomization:{

		},
		deliveryCustomizations:{

		},
		deliveryProfile:{

		},
		deliveryProfiles:{

		},
		deliveryPromiseParticipants:{

		},
		deliveryPromiseProvider:{

		},
		discountCodesCount:{

		},
		discountNode:{

		},
		discountNodes:{
			sortKey:"DiscountSortKeys"
		},
		discountNodesCount:{

		},
		discountRedeemCodeBulkCreation:{

		},
		discountRedeemCodeSavedSearches:{
			sortKey:"DiscountCodeSortKeys"
		},
		dispute:{

		},
		disputeEvidence:{

		},
		disputes:{

		},
		domain:{

		},
		draftOrder:{

		},
		draftOrderAvailableDeliveryOptions:{
			input:"DraftOrderAvailableDeliveryOptionsInput"
		},
		draftOrderSavedSearches:{

		},
		draftOrderTag:{

		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		draftOrdersCount:{

		},
		event:{

		},
		events:{
			sortKey:"EventSortKeys"
		},
		eventsCount:{

		},
		fileSavedSearches:{

		},
		files:{
			sortKey:"FileSortKeys"
		},
		fulfillment:{

		},
		fulfillmentOrder:{

		},
		fulfillmentOrders:{
			sortKey:"FulfillmentOrderSortKeys"
		},
		fulfillmentService:{

		},
		giftCard:{

		},
		giftCards:{
			sortKey:"GiftCardSortKeys"
		},
		giftCardsCount:{

		},
		inventoryItem:{

		},
		inventoryItems:{

		},
		inventoryLevel:{

		},
		inventoryShipment:{

		},
		inventoryTransfer:{

		},
		inventoryTransfers:{
			sortKey:"TransferSortKeys"
		},
		job:{

		},
		location:{

		},
		locationByIdentifier:{
			identifier:"LocationIdentifierInput"
		},
		locations:{
			sortKey:"LocationSortKeys"
		},
		locationsAvailableForDeliveryProfilesConnection:{

		},
		locationsCount:{

		},
		manualHoldsFulfillmentOrders:{

		},
		market:{

		},
		marketByGeography:{
			countryCode:"CountryCode"
		},
		marketLocalizableResource:{

		},
		marketLocalizableResources:{
			resourceType:"MarketLocalizableResourceType"
		},
		marketLocalizableResourcesByIds:{

		},
		marketingActivities:{
			utm:"UTMInput",
			sortKey:"MarketingActivitySortKeys"
		},
		marketingActivity:{

		},
		marketingEvent:{

		},
		marketingEvents:{
			sortKey:"MarketingEventSortKeys"
		},
		markets:{
			type:"MarketType",
			sortKey:"MarketsSortKeys"
		},
		marketsResolvedValues:{
			buyerSignal:"BuyerSignalInput"
		},
		menu:{

		},
		menus:{
			sortKey:"MenuSortKeys"
		},
		metafieldDefinition:{
			identifier:"MetafieldDefinitionIdentifierInput"
		},
		metafieldDefinitions:{
			ownerType:"MetafieldOwnerType",
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			constraintSubtype:"MetafieldDefinitionConstraintSubtypeIdentifier",
			constraintStatus:"MetafieldDefinitionConstraintStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metaobject:{

		},
		metaobjectByHandle:{
			handle:"MetaobjectHandleInput"
		},
		metaobjectDefinition:{

		},
		metaobjectDefinitionByType:{

		},
		metaobjectDefinitions:{

		},
		metaobjects:{

		},
		mobilePlatformApplication:{

		},
		mobilePlatformApplications:{

		},
		node:{

		},
		nodes:{

		},
		order:{

		},
		orderByIdentifier:{
			identifier:"OrderIdentifierInput"
		},
		orderEditSession:{

		},
		orderPaymentStatus:{

		},
		orderSavedSearches:{

		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		ordersCount:{

		},
		page:{

		},
		pages:{
			sortKey:"PageSortKeys"
		},
		pagesCount:{

		},
		paymentCustomization:{

		},
		paymentCustomizations:{

		},
		paymentTermsTemplates:{
			paymentTermsType:"PaymentTermsType"
		},
		pointOfSaleDevice:{

		},
		priceList:{

		},
		priceLists:{
			sortKey:"PriceListSortKeys"
		},
		product:{

		},
		productByHandle:{

		},
		productByIdentifier:{
			identifier:"ProductIdentifierInput"
		},
		productDuplicateJob:{

		},
		productFeed:{

		},
		productFeeds:{

		},
		productOperation:{

		},
		productResourceFeedback:{

		},
		productSavedSearches:{

		},
		productTags:{

		},
		productTypes:{

		},
		productVariant:{

		},
		productVariantByIdentifier:{
			identifier:"ProductVariantIdentifierInput"
		},
		productVariants:{
			sortKey:"ProductVariantSortKeys"
		},
		productVariantsCount:{

		},
		productVendors:{

		},
		products:{
			sortKey:"ProductSortKeys"
		},
		productsCount:{

		},
		publication:{

		},
		publications:{
			catalogType:"CatalogType"
		},
		publicationsCount:{
			catalogType:"CatalogType"
		},
		publishedProductsCount:{

		},
		refund:{

		},
		return:{

		},
		returnCalculate:{
			input:"CalculateReturnInput"
		},
		returnableFulfillment:{

		},
		returnableFulfillments:{

		},
		reverseDelivery:{

		},
		reverseFulfillmentOrder:{

		},
		scriptTag:{

		},
		scriptTags:{
			src:"URL"
		},
		segment:{

		},
		segmentFilterSuggestions:{

		},
		segmentFilters:{

		},
		segmentMigrations:{

		},
		segmentValueSuggestions:{

		},
		segments:{
			sortKey:"SegmentSortKeys"
		},
		segmentsCount:{

		},
		sellingPlanGroup:{

		},
		sellingPlanGroups:{
			sortKey:"SellingPlanGroupSortKeys"
		},
		shopLocales:{

		},
		shopPayPaymentRequestReceipt:{

		},
		shopPayPaymentRequestReceipts:{
			sortKey:"ShopPayPaymentRequestReceiptsSortKeys"
		},
		shopifyFunction:{

		},
		shopifyFunctions:{

		},
		shopifyqlQuery:{

		},
		staffMember:{

		},
		staffMembers:{
			sortKey:"StaffMembersSortKeys"
		},
		standardMetafieldDefinitionTemplates:{
			constraintSubtype:"MetafieldDefinitionConstraintSubtypeIdentifier",
			constraintStatus:"MetafieldDefinitionConstraintStatus"
		},
		storeCreditAccount:{

		},
		subscriptionBillingAttempt:{

		},
		subscriptionBillingAttempts:{
			sortKey:"SubscriptionBillingAttemptsSortKeys"
		},
		subscriptionBillingCycle:{
			billingCycleInput:"SubscriptionBillingCycleInput"
		},
		subscriptionBillingCycleBulkResults:{

		},
		subscriptionBillingCycles:{
			billingCyclesDateRangeSelector:"SubscriptionBillingCyclesDateRangeSelector",
			billingCyclesIndexRangeSelector:"SubscriptionBillingCyclesIndexRangeSelector",
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		subscriptionContract:{

		},
		subscriptionContracts:{
			sortKey:"SubscriptionContractsSortKeys"
		},
		subscriptionDraft:{

		},
		tenderTransactions:{

		},
		theme:{

		},
		themes:{
			roles:"ThemeRole"
		},
		translatableResource:{

		},
		translatableResources:{
			resourceType:"TranslatableResourceType"
		},
		translatableResourcesByIds:{

		},
		urlRedirect:{

		},
		urlRedirectImport:{

		},
		urlRedirectSavedSearches:{

		},
		urlRedirects:{
			sortKey:"UrlRedirectSortKeys"
		},
		urlRedirectsCount:{

		},
		validation:{

		},
		validations:{
			sortKey:"ValidationSortKeys"
		},
		webPixel:{

		},
		webPresences:{

		},
		webhookSubscription:{

		},
		webhookSubscriptions:{
			sortKey:"WebhookSubscriptionSortKeys",
			format:"WebhookSubscriptionFormat",
			topics:"WebhookSubscriptionTopic"
		},
		webhookSubscriptionsCount:{

		}
	},
	Refund:{
		orderAdjustments:{

		},
		refundLineItems:{

		},
		refundShippingLines:{

		},
		transactions:{

		}
	},
	RefundAgreement:{
		sales:{

		}
	},
	RefundDutyInput:{
		refundType:"RefundDutyRefundType"
	},
	RefundDutyRefundType: "enum" as const,
	RefundInput:{
		currency:"CurrencyCode",
		shipping:"ShippingRefundInput",
		refundLineItems:"RefundLineItemInput",
		refundDuties:"RefundDutyInput",
		transactions:"OrderTransactionInput",
		refundMethods:"RefundMethodInput",
		discrepancyReason:"OrderAdjustmentInputDiscrepancyReason"
	},
	RefundLineItemInput:{
		restockType:"RefundLineItemRestockType"
	},
	RefundLineItemRestockType: "enum" as const,
	RefundMethodAllocation: "enum" as const,
	RefundMethodInput:{
		storeCreditRefund:"StoreCreditRefundInput"
	},
	RefundShippingInput:{
		shippingRefundAmount:"MoneyInput"
	},
	RegionsCondition:{
		regions:{

		}
	},
	RemoteAuthorizeNetCustomerPaymentProfileInput:{

	},
	RemoteBraintreePaymentMethodInput:{

	},
	RemoteStripePaymentMethodInput:{

	},
	ResourceAlertIcon: "enum" as const,
	ResourceAlertSeverity: "enum" as const,
	ResourceFeedbackCreateInput:{
		feedbackGeneratedAt:"DateTime",
		state:"ResourceFeedbackState"
	},
	ResourceFeedbackState: "enum" as const,
	ResourceOperationStatus: "enum" as const,
	RestockingFeeInput:{

	},
	Return:{
		exchangeLineItems:{
			processingStatus:"ReturnProcessingStatusFilterInput"
		},
		refunds:{

		},
		returnLineItems:{
			processingStatus:"ReturnProcessingStatusFilterInput"
		},
		reverseFulfillmentOrders:{

		},
		suggestedFinancialOutcome:{
			returnLineItems:"SuggestedOutcomeReturnLineItemInput",
			exchangeLineItems:"SuggestedOutcomeExchangeLineItemInput",
			refundShipping:"RefundShippingInput",
			refundDuties:"RefundDutyInput",
			refundMethodAllocation:"RefundMethodAllocation"
		},
		suggestedRefund:{
			returnRefundLineItems:"ReturnRefundLineItemInput",
			refundShipping:"RefundShippingInput",
			refundDuties:"RefundDutyInput"
		}
	},
	ReturnAgreement:{
		sales:{

		}
	},
	ReturnApproveRequestInput:{

	},
	ReturnDeclineReason: "enum" as const,
	ReturnDeclineRequestInput:{
		declineReason:"ReturnDeclineReason"
	},
	ReturnErrorCode: "enum" as const,
	ReturnInput:{
		exchangeLineItems:"ExchangeLineItemInput",
		requestedAt:"DateTime",
		returnLineItems:"ReturnLineItemInput",
		returnShippingFee:"ReturnShippingFeeInput"
	},
	ReturnLineItemInput:{
		returnReason:"ReturnReason",
		restockingFee:"RestockingFeeInput"
	},
	ReturnLineItemRemoveFromReturnInput:{

	},
	ReturnProcessExchangeLineItemInput:{

	},
	ReturnProcessFinancialTransferInput:{
		issueRefund:"ReturnProcessRefundInput"
	},
	ReturnProcessInput:{
		returnLineItems:"ReturnProcessReturnLineItemInput",
		exchangeLineItems:"ReturnProcessExchangeLineItemInput",
		refundDuties:"RefundDutyInput",
		refundShipping:"RefundShippingInput",
		financialTransfer:"ReturnProcessFinancialTransferInput"
	},
	ReturnProcessRefundInput:{
		orderTransactions:"ReturnRefundOrderTransactionInput",
		refundMethods:"RefundMethodInput"
	},
	ReturnProcessReturnLineItemInput:{
		dispositions:"ReverseFulfillmentOrderDisposeInput"
	},
	ReturnProcessingStatusFilterInput: "enum" as const,
	ReturnReason: "enum" as const,
	ReturnRefundInput:{
		returnRefundLineItems:"ReturnRefundLineItemInput",
		refundShipping:"RefundShippingInput",
		refundDuties:"RefundDutyInput",
		orderTransactions:"ReturnRefundOrderTransactionInput"
	},
	ReturnRefundLineItemInput:{

	},
	ReturnRefundOrderTransactionInput:{
		transactionAmount:"MoneyInput"
	},
	ReturnRequestInput:{
		returnLineItems:"ReturnRequestLineItemInput",
		returnShippingFee:"ReturnShippingFeeInput"
	},
	ReturnRequestLineItemInput:{
		restockingFee:"RestockingFeeInput",
		returnReason:"ReturnReason"
	},
	ReturnShippingFeeInput:{
		amount:"MoneyInput"
	},
	ReturnStatus: "enum" as const,
	ReturnableFulfillment:{
		returnableFulfillmentLineItems:{

		}
	},
	ReverseDelivery:{
		reverseDeliveryLineItems:{

		}
	},
	ReverseDeliveryLabelInput:{
		fileUrl:"URL"
	},
	ReverseDeliveryLineItemInput:{

	},
	ReverseDeliveryTrackingInput:{
		url:"URL"
	},
	ReverseFulfillmentOrder:{
		lineItems:{

		},
		reverseDeliveries:{

		}
	},
	ReverseFulfillmentOrderDisposeInput:{
		dispositionType:"ReverseFulfillmentOrderDispositionType"
	},
	ReverseFulfillmentOrderDispositionType: "enum" as const,
	ReverseFulfillmentOrderStatus: "enum" as const,
	ReverseFulfillmentOrderThirdPartyConfirmationStatus: "enum" as const,
	RiskAssessmentResult: "enum" as const,
	RiskFactSentiment: "enum" as const,
	SEOInput:{

	},
	SaleActionType: "enum" as const,
	SaleLineType: "enum" as const,
	SalesAgreement:{
		sales:{

		}
	},
	SavedSearchCreateInput:{
		resourceType:"SearchResultType"
	},
	SavedSearchDeleteInput:{

	},
	SavedSearchUpdateInput:{

	},
	ScheduledChangeSortKeys: "enum" as const,
	ScriptTagDisplayScope: "enum" as const,
	ScriptTagInput:{
		src:"URL",
		displayScope:"ScriptTagDisplayScope"
	},
	SearchResultType: "enum" as const,
	SegmentSortKeys: "enum" as const,
	SegmentStatistics:{
		attributeStatistics:{

		}
	},
	SelectedVariantOptionInput:{

	},
	SellingPlan:{
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		translations:{

		}
	},
	SellingPlanAnchorInput:{
		type:"SellingPlanAnchorType"
	},
	SellingPlanAnchorType: "enum" as const,
	SellingPlanBillingPolicyInput:{
		fixed:"SellingPlanFixedBillingPolicyInput",
		recurring:"SellingPlanRecurringBillingPolicyInput"
	},
	SellingPlanCategory: "enum" as const,
	SellingPlanCheckoutChargeInput:{
		type:"SellingPlanCheckoutChargeType",
		value:"SellingPlanCheckoutChargeValueInput"
	},
	SellingPlanCheckoutChargeType: "enum" as const,
	SellingPlanCheckoutChargeValueInput:{
		fixedValue:"Decimal"
	},
	SellingPlanDeliveryPolicyInput:{
		fixed:"SellingPlanFixedDeliveryPolicyInput",
		recurring:"SellingPlanRecurringDeliveryPolicyInput"
	},
	SellingPlanFixedBillingPolicyInput:{
		remainingBalanceChargeTrigger:"SellingPlanRemainingBalanceChargeTrigger",
		remainingBalanceChargeExactTime:"DateTime",
		checkoutCharge:"SellingPlanCheckoutChargeInput"
	},
	SellingPlanFixedDeliveryPolicyInput:{
		anchors:"SellingPlanAnchorInput",
		fulfillmentTrigger:"SellingPlanFulfillmentTrigger",
		fulfillmentExactTime:"DateTime",
		intent:"SellingPlanFixedDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanFixedDeliveryPolicyIntent: "enum" as const,
	SellingPlanFixedDeliveryPolicyPreAnchorBehavior: "enum" as const,
	SellingPlanFixedPricingPolicyInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput"
	},
	SellingPlanFulfillmentTrigger: "enum" as const,
	SellingPlanGroup:{
		appliesToProduct:{

		},
		appliesToProductVariant:{

		},
		appliesToProductVariants:{

		},
		productVariants:{

		},
		productVariantsCount:{

		},
		products:{

		},
		sellingPlans:{

		},
		translations:{

		}
	},
	SellingPlanGroupInput:{
		sellingPlansToCreate:"SellingPlanInput",
		sellingPlansToUpdate:"SellingPlanInput"
	},
	SellingPlanGroupResourceInput:{

	},
	SellingPlanGroupSortKeys: "enum" as const,
	SellingPlanGroupUserErrorCode: "enum" as const,
	SellingPlanInput:{
		billingPolicy:"SellingPlanBillingPolicyInput",
		deliveryPolicy:"SellingPlanDeliveryPolicyInput",
		inventoryPolicy:"SellingPlanInventoryPolicyInput",
		metafields:"MetafieldInput",
		pricingPolicies:"SellingPlanPricingPolicyInput",
		category:"SellingPlanCategory"
	},
	SellingPlanInterval: "enum" as const,
	SellingPlanInventoryPolicyInput:{
		reserve:"SellingPlanReserve"
	},
	SellingPlanPricingPolicyAdjustmentType: "enum" as const,
	SellingPlanPricingPolicyInput:{
		recurring:"SellingPlanRecurringPricingPolicyInput",
		fixed:"SellingPlanFixedPricingPolicyInput"
	},
	SellingPlanPricingPolicyValueInput:{
		fixedValue:"Decimal"
	},
	SellingPlanRecurringBillingPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SellingPlanRecurringDeliveryPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput",
		intent:"SellingPlanRecurringDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanRecurringDeliveryPolicyIntent: "enum" as const,
	SellingPlanRecurringDeliveryPolicyPreAnchorBehavior: "enum" as const,
	SellingPlanRecurringPricingPolicyInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput"
	},
	SellingPlanRemainingBalanceChargeTrigger: "enum" as const,
	SellingPlanReserve: "enum" as const,
	ServerPixelStatus: "enum" as const,
	ShipmentLineItemSortKeys: "enum" as const,
	ShippingDiscountClass: "enum" as const,
	ShippingLineInput:{
		priceWithCurrency:"MoneyInput"
	},
	ShippingPackageType: "enum" as const,
	ShippingRefundInput:{
		amount:"Money"
	},
	Shop:{
		assignedFulfillmentOrders:{
			assignmentStatus:"FulfillmentOrderAssignmentStatus",
			sortKey:"FulfillmentOrderSortKeys"
		},
		availableChannelApps:{

		},
		channels:{

		},
		collections:{
			sortKey:"CollectionSortKeys"
		},
		currencySettings:{

		},
		customerTags:{

		},
		customers:{
			sortKey:"CustomerSortKeys"
		},
		draftOrderTags:{

		},
		draftOrders:{
			sortKey:"DraftOrderSortKeys"
		},
		fulfillmentOrders:{
			sortKey:"FulfillmentOrderSortKeys"
		},
		inventoryItems:{

		},
		locations:{
			sortKey:"LocationSortKeys"
		},
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		},
		orderTags:{
			sort:"ShopTagSort"
		},
		orders:{
			sortKey:"OrderSortKeys"
		},
		productImages:{
			sortKey:"ProductImageSortKeys"
		},
		productTags:{

		},
		productTypes:{

		},
		productVariants:{
			sortKey:"ProductVariantSortKeys"
		},
		productVendors:{

		},
		products:{
			sortKey:"ProductSortKeys"
		},
		search:{
			types:"SearchResultType"
		},
		staffMembers:{

		},
		storefrontAccessTokens:{

		},
		translations:{

		}
	},
	ShopAddress:{
		formatted:{

		}
	},
	ShopBranding: "enum" as const,
	ShopCustomerAccountsSetting: "enum" as const,
	ShopLocaleInput:{

	},
	ShopPayPaymentRequestDeliveryMethodType: "enum" as const,
	ShopPayPaymentRequestReceiptProcessingStatusErrorCode: "enum" as const,
	ShopPayPaymentRequestReceiptProcessingStatusState: "enum" as const,
	ShopPayPaymentRequestReceiptsSortKeys: "enum" as const,
	ShopPolicy:{
		translations:{

		}
	},
	ShopPolicyErrorCode: "enum" as const,
	ShopPolicyInput:{
		type:"ShopPolicyType"
	},
	ShopPolicyType: "enum" as const,
	ShopResourceFeedbackCreateUserErrorCode: "enum" as const,
	ShopTagSort: "enum" as const,
	ShopifyPaymentsAccount:{
		balanceTransactions:{
			sortKey:"BalanceTransactionSortKeys"
		},
		bankAccounts:{

		},
		disputes:{

		},
		payouts:{
			transactionType:"ShopifyPaymentsPayoutTransactionType",
			sortKey:"PayoutSortKeys"
		}
	},
	ShopifyPaymentsBalanceTransactionPayoutStatus: "enum" as const,
	ShopifyPaymentsBankAccount:{
		payouts:{
			transactionType:"ShopifyPaymentsPayoutTransactionType",
			sortKey:"PayoutSortKeys"
		}
	},
	ShopifyPaymentsBankAccountStatus: "enum" as const,
	ShopifyPaymentsBusinessType: "enum" as const,
	ShopifyPaymentsDisputeEvidenceFileType: "enum" as const,
	ShopifyPaymentsDisputeEvidenceUpdateInput:{
		shippingAddress:"MailingAddressInput",
		cancellationPolicyFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		customerCommunicationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		refundPolicyFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		shippingDocumentationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		uncategorizedFile:"ShopifyPaymentsDisputeFileUploadUpdateInput",
		serviceDocumentationFile:"ShopifyPaymentsDisputeFileUploadUpdateInput"
	},
	ShopifyPaymentsDisputeFileUploadUpdateInput:{

	},
	ShopifyPaymentsDisputeReason: "enum" as const,
	ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode: "enum" as const,
	ShopifyPaymentsPayoutInterval: "enum" as const,
	ShopifyPaymentsPayoutStatus: "enum" as const,
	ShopifyPaymentsPayoutTransactionType: "enum" as const,
	ShopifyPaymentsSourceType: "enum" as const,
	ShopifyPaymentsTaxIdentificationType: "enum" as const,
	ShopifyPaymentsTransactionType: "enum" as const,
	ShopifyProtectEligibilityStatus: "enum" as const,
	ShopifyProtectStatus: "enum" as const,
	StaffMember:{
		avatar:{
			fallback:"StaffMemberDefaultImage"
		}
	},
	StaffMemberDefaultImage: "enum" as const,
	StaffMemberPermission: "enum" as const,
	StaffMembersSortKeys: "enum" as const,
	StageImageInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType"
	},
	StagedUploadHttpMethodType: "enum" as const,
	StagedUploadInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType",
		fileSize:"UnsignedInt64"
	},
	StagedUploadTargetGenerateInput:{
		resource:"StagedUploadTargetGenerateUploadResource",
		httpMethod:"StagedUploadHttpMethodType",
		fileSize:"UnsignedInt64"
	},
	StagedUploadTargetGenerateUploadResource: "enum" as const,
	StandardMetafieldDefinitionAccessInput:{
		admin:"MetafieldAdminAccessInput",
		storefront:"MetafieldStorefrontAccessInput",
		customerAccount:"MetafieldCustomerAccountAccessInput"
	},
	StandardMetafieldDefinitionEnableUserErrorCode: "enum" as const,
	StoreCreditAccount:{
		transactions:{
			sortKey:"TransactionSortKeys"
		}
	},
	StoreCreditAccountCreditInput:{
		creditAmount:"MoneyInput",
		expiresAt:"DateTime"
	},
	StoreCreditAccountCreditUserErrorCode: "enum" as const,
	StoreCreditAccountDebitInput:{
		debitAmount:"MoneyInput"
	},
	StoreCreditAccountDebitUserErrorCode: "enum" as const,
	StoreCreditRefundInput:{
		amount:"MoneyInput",
		expiresAt:"DateTime"
	},
	StoreCreditSystemEvent: "enum" as const,
	StorefrontAccessTokenDeleteInput:{

	},
	StorefrontAccessTokenInput:{

	},
	StorefrontID: `scalar.StorefrontID` as const,
	SubscriptionAtomicLineInput:{
		line:"SubscriptionLineInput",
		discounts:"SubscriptionAtomicManualDiscountInput"
	},
	SubscriptionAtomicManualDiscountInput:{
		value:"SubscriptionManualDiscountValueInput"
	},
	SubscriptionBillingAttempt:{
		transactions:{

		}
	},
	SubscriptionBillingAttemptErrorCode: "enum" as const,
	SubscriptionBillingAttemptInput:{
		originTime:"DateTime",
		billingCycleSelector:"SubscriptionBillingCycleSelector",
		inventoryPolicy:"SubscriptionBillingAttemptInventoryPolicy"
	},
	SubscriptionBillingAttemptInsufficientStockProductVariantsError:{
		insufficientStockProductVariants:{

		}
	},
	SubscriptionBillingAttemptInventoryPolicy: "enum" as const,
	SubscriptionBillingAttemptOutOfStockProductVariantsError:{
		outOfStockProductVariants:{

		}
	},
	SubscriptionBillingAttemptsSortKeys: "enum" as const,
	SubscriptionBillingCycle:{
		billingAttempts:{

		}
	},
	SubscriptionBillingCycleBillingAttemptStatus: "enum" as const,
	SubscriptionBillingCycleBillingCycleStatus: "enum" as const,
	SubscriptionBillingCycleBulkFilters:{
		billingCycleStatus:"SubscriptionBillingCycleBillingCycleStatus",
		contractStatus:"SubscriptionContractSubscriptionStatus",
		billingAttemptStatus:"SubscriptionBillingCycleBillingAttemptStatus"
	},
	SubscriptionBillingCycleBulkUserErrorCode: "enum" as const,
	SubscriptionBillingCycleEditedContract:{
		billingCycles:{
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionBillingCycleErrorCode: "enum" as const,
	SubscriptionBillingCycleInput:{
		selector:"SubscriptionBillingCycleSelector"
	},
	SubscriptionBillingCycleScheduleEditInput:{
		billingDate:"DateTime",
		reason:"SubscriptionBillingCycleScheduleEditInputScheduleEditReason"
	},
	SubscriptionBillingCycleScheduleEditInputScheduleEditReason: "enum" as const,
	SubscriptionBillingCycleSelector:{
		date:"DateTime"
	},
	SubscriptionBillingCycleSkipUserErrorCode: "enum" as const,
	SubscriptionBillingCycleUnskipUserErrorCode: "enum" as const,
	SubscriptionBillingCyclesDateRangeSelector:{
		startDate:"DateTime",
		endDate:"DateTime"
	},
	SubscriptionBillingCyclesIndexRangeSelector:{

	},
	SubscriptionBillingCyclesSortKeys: "enum" as const,
	SubscriptionBillingCyclesTargetSelection: "enum" as const,
	SubscriptionBillingPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SubscriptionContract:{
		billingAttempts:{

		},
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionContractAtomicCreateInput:{
		nextBillingDate:"DateTime",
		currencyCode:"CurrencyCode",
		contract:"SubscriptionDraftInput",
		lines:"SubscriptionAtomicLineInput"
	},
	SubscriptionContractBase:{
		customerPaymentMethod:{

		},
		discounts:{

		},
		lines:{

		},
		orders:{

		}
	},
	SubscriptionContractCreateInput:{
		nextBillingDate:"DateTime",
		currencyCode:"CurrencyCode",
		contract:"SubscriptionDraftInput"
	},
	SubscriptionContractErrorCode: "enum" as const,
	SubscriptionContractLastBillingErrorType: "enum" as const,
	SubscriptionContractLastPaymentStatus: "enum" as const,
	SubscriptionContractProductChangeInput:{
		currentPrice:"Decimal"
	},
	SubscriptionContractStatusUpdateErrorCode: "enum" as const,
	SubscriptionContractSubscriptionStatus: "enum" as const,
	SubscriptionContractsSortKeys: "enum" as const,
	SubscriptionDeliveryMethodInput:{
		shipping:"SubscriptionDeliveryMethodShippingInput",
		localDelivery:"SubscriptionDeliveryMethodLocalDeliveryInput",
		pickup:"SubscriptionDeliveryMethodPickupInput"
	},
	SubscriptionDeliveryMethodLocalDeliveryInput:{
		address:"MailingAddressInput",
		localDeliveryOption:"SubscriptionDeliveryMethodLocalDeliveryOptionInput"
	},
	SubscriptionDeliveryMethodLocalDeliveryOptionInput:{

	},
	SubscriptionDeliveryMethodPickupInput:{
		pickupOption:"SubscriptionDeliveryMethodPickupOptionInput"
	},
	SubscriptionDeliveryMethodPickupOptionInput:{

	},
	SubscriptionDeliveryMethodShippingInput:{
		address:"MailingAddressInput",
		shippingOption:"SubscriptionDeliveryMethodShippingOptionInput"
	},
	SubscriptionDeliveryMethodShippingOptionInput:{

	},
	SubscriptionDeliveryPolicyInput:{
		interval:"SellingPlanInterval",
		anchors:"SellingPlanAnchorInput"
	},
	SubscriptionDiscountEntitledLines:{
		lines:{

		}
	},
	SubscriptionDiscountRejectionReason: "enum" as const,
	SubscriptionDraft:{
		concatenatedBillingCycles:{
			sortKey:"SubscriptionBillingCyclesSortKeys"
		},
		customerPaymentMethod:{

		},
		deliveryOptions:{
			deliveryAddress:"MailingAddressInput"
		},
		discounts:{

		},
		discountsAdded:{

		},
		discountsRemoved:{

		},
		discountsUpdated:{

		},
		lines:{

		},
		linesAdded:{

		},
		linesRemoved:{

		},
		shippingOptions:{
			deliveryAddress:"MailingAddressInput"
		}
	},
	SubscriptionDraftErrorCode: "enum" as const,
	SubscriptionDraftInput:{
		status:"SubscriptionContractSubscriptionStatus",
		nextBillingDate:"DateTime",
		billingPolicy:"SubscriptionBillingPolicyInput",
		deliveryPolicy:"SubscriptionDeliveryPolicyInput",
		deliveryPrice:"Decimal",
		deliveryMethod:"SubscriptionDeliveryMethodInput",
		customAttributes:"AttributeInput"
	},
	SubscriptionFreeShippingDiscountInput:{

	},
	SubscriptionLineInput:{
		currentPrice:"Decimal",
		customAttributes:"AttributeInput",
		pricingPolicy:"SubscriptionPricingPolicyInput"
	},
	SubscriptionLineUpdateInput:{
		currentPrice:"Decimal",
		customAttributes:"AttributeInput",
		pricingPolicy:"SubscriptionPricingPolicyInput"
	},
	SubscriptionManualDiscountEntitledLinesInput:{
		lines:"SubscriptionManualDiscountLinesInput"
	},
	SubscriptionManualDiscountFixedAmountInput:{

	},
	SubscriptionManualDiscountInput:{
		value:"SubscriptionManualDiscountValueInput",
		entitledLines:"SubscriptionManualDiscountEntitledLinesInput"
	},
	SubscriptionManualDiscountLinesInput:{

	},
	SubscriptionManualDiscountValueInput:{
		fixedAmount:"SubscriptionManualDiscountFixedAmountInput"
	},
	SubscriptionPricingPolicyCycleDiscountsInput:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyValueInput",
		computedPrice:"Decimal"
	},
	SubscriptionPricingPolicyInput:{
		basePrice:"Decimal",
		cycleDiscounts:"SubscriptionPricingPolicyCycleDiscountsInput"
	},
	SuggestedOrderTransactionKind: "enum" as const,
	SuggestedOutcomeExchangeLineItemInput:{

	},
	SuggestedOutcomeReturnLineItemInput:{

	},
	TaxAppConfigureUserErrorCode: "enum" as const,
	TaxExemption: "enum" as const,
	TaxPartnerState: "enum" as const,
	Taxonomy:{
		categories:{

		}
	},
	TaxonomyCategory:{
		attributes:{

		}
	},
	TaxonomyChoiceListAttribute:{
		values:{

		}
	},
	ThemeCreateUserErrorCode: "enum" as const,
	ThemeDeleteUserErrorCode: "enum" as const,
	ThemeDuplicateUserErrorCode: "enum" as const,
	ThemeFilesCopyFileInput:{

	},
	ThemePublishUserErrorCode: "enum" as const,
	ThemeRole: "enum" as const,
	ThemeUpdateUserErrorCode: "enum" as const,
	TransactionSortKeys: "enum" as const,
	TransactionVoidUserErrorCode: "enum" as const,
	TransferSortKeys: "enum" as const,
	TranslatableResource:{
		nestedTranslatableResources:{
			resourceType:"TranslatableResourceType"
		},
		translatableContent:{

		},
		translations:{

		}
	},
	TranslatableResourceType: "enum" as const,
	TranslationErrorCode: "enum" as const,
	TranslationInput:{

	},
	URL: `scalar.URL` as const,
	UTMInput:{

	},
	UniqueMetafieldValueInput:{

	},
	UnitPriceMeasurementInput:{
		quantityUnit:"UnitPriceMeasurementMeasuredUnit",
		referenceUnit:"UnitPriceMeasurementMeasuredUnit"
	},
	UnitPriceMeasurementMeasuredType: "enum" as const,
	UnitPriceMeasurementMeasuredUnit: "enum" as const,
	UnitSystem: "enum" as const,
	UnsignedInt64: `scalar.UnsignedInt64` as const,
	UpdateMediaInput:{

	},
	UrlRedirectBulkDeleteByIdsUserErrorCode: "enum" as const,
	UrlRedirectBulkDeleteBySavedSearchUserErrorCode: "enum" as const,
	UrlRedirectBulkDeleteBySearchUserErrorCode: "enum" as const,
	UrlRedirectErrorCode: "enum" as const,
	UrlRedirectImportErrorCode: "enum" as const,
	UrlRedirectInput:{

	},
	UrlRedirectSortKeys: "enum" as const,
	UtcOffset: `scalar.UtcOffset` as const,
	Validation:{
		metafield:{

		},
		metafieldDefinitions:{
			pinnedStatus:"MetafieldDefinitionPinnedStatus",
			sortKey:"MetafieldDefinitionSortKeys"
		},
		metafields:{

		}
	},
	ValidationCreateInput:{
		metafields:"MetafieldInput"
	},
	ValidationSortKeys: "enum" as const,
	ValidationUpdateInput:{
		metafields:"MetafieldInput"
	},
	ValidationUserErrorCode: "enum" as const,
	VariantOptionValueInput:{

	},
	WebPixelInput:{
		settings:"JSON"
	},
	WebPresenceCreateInput:{

	},
	WebPresenceUpdateInput:{

	},
	WebhookSubscriptionFormat: "enum" as const,
	WebhookSubscriptionInput:{
		format:"WebhookSubscriptionFormat",
		metafields:"HasMetafieldsMetafieldIdentifierInput"
	},
	WebhookSubscriptionSortKeys: "enum" as const,
	WebhookSubscriptionTopic: "enum" as const,
	WeightInput:{
		unit:"WeightUnit"
	},
	WeightUnit: "enum" as const,
	ID: `scalar.ID` as const
}

export const ReturnTypes: Record<string,any> = {
	accessRestricted:{
		reason:"String"
	},
	ARN: `scalar.ARN` as const,
	AbandonedCheckout:{
		abandonedCheckoutUrl:"URL",
		billingAddress:"MailingAddress",
		completedAt:"DateTime",
		createdAt:"DateTime",
		customAttributes:"Attribute",
		customer:"Customer",
		defaultCursor:"String",
		discountCodes:"String",
		id:"ID",
		lineItems:"AbandonedCheckoutLineItemConnection",
		lineItemsQuantity:"Int",
		name:"String",
		note:"String",
		shippingAddress:"MailingAddress",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		totalDiscountSet:"MoneyBag",
		totalDutiesSet:"MoneyBag",
		totalLineItemsPriceSet:"MoneyBag",
		totalPriceSet:"MoneyBag",
		totalTaxSet:"MoneyBag",
		updatedAt:"DateTime"
	},
	AbandonedCheckoutConnection:{
		edges:"AbandonedCheckoutEdge",
		nodes:"AbandonedCheckout",
		pageInfo:"PageInfo"
	},
	AbandonedCheckoutEdge:{
		cursor:"String",
		node:"AbandonedCheckout"
	},
	AbandonedCheckoutLineItem:{
		components:"AbandonedCheckoutLineItemComponent",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocationConnection",
		discountedTotalPriceSet:"MoneyBag",
		discountedTotalPriceWithCodeDiscount:"MoneyBag",
		discountedUnitPriceSet:"MoneyBag",
		discountedUnitPriceWithCodeDiscount:"MoneyBag",
		id:"ID",
		image:"Image",
		originalTotalPriceSet:"MoneyBag",
		originalUnitPriceSet:"MoneyBag",
		parentRelationship:"AbandonedCheckoutLineItemParentRelationship",
		product:"Product",
		quantity:"Int",
		sku:"String",
		title:"String",
		variant:"ProductVariant",
		variantTitle:"String"
	},
	AbandonedCheckoutLineItemComponent:{
		id:"ID",
		image:"Image",
		quantity:"Int",
		title:"String",
		variantTitle:"String"
	},
	AbandonedCheckoutLineItemConnection:{
		edges:"AbandonedCheckoutLineItemEdge",
		nodes:"AbandonedCheckoutLineItem",
		pageInfo:"PageInfo"
	},
	AbandonedCheckoutLineItemEdge:{
		cursor:"String",
		node:"AbandonedCheckoutLineItem"
	},
	AbandonedCheckoutLineItemParentRelationship:{
		parent:"AbandonedCheckoutLineItem"
	},
	Abandonment:{
		abandonedCheckoutPayload:"AbandonedCheckout",
		abandonmentType:"AbandonmentAbandonmentType",
		app:"App",
		cartUrl:"URL",
		createdAt:"DateTime",
		customer:"Customer",
		customerHasNoDraftOrderSinceAbandonment:"Boolean",
		customerHasNoOrderSinceAbandonment:"Boolean",
		daysSinceLastAbandonmentEmail:"Int",
		emailSentAt:"DateTime",
		emailState:"AbandonmentEmailState",
		hoursSinceLastAbandonedCheckout:"Float",
		id:"ID",
		inventoryAvailable:"Boolean",
		isFromCustomStorefront:"Boolean",
		isFromOnlineStore:"Boolean",
		isFromShopApp:"Boolean",
		isFromShopPay:"Boolean",
		isMostSignificantAbandonment:"Boolean",
		lastBrowseAbandonmentDate:"DateTime",
		lastCartAbandonmentDate:"DateTime",
		lastCheckoutAbandonmentDate:"DateTime",
		mostRecentStep:"AbandonmentAbandonmentType",
		productsAddedToCart:"CustomerVisitProductInfoConnection",
		productsViewed:"CustomerVisitProductInfoConnection",
		visitStartedAt:"DateTime"
	},
	AbandonmentEmailStateUpdatePayload:{
		abandonment:"Abandonment",
		userErrors:"AbandonmentEmailStateUpdateUserError"
	},
	AbandonmentEmailStateUpdateUserError:{
		code:"AbandonmentEmailStateUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	AbandonmentUpdateActivitiesDeliveryStatusesPayload:{
		abandonment:"Abandonment",
		userErrors:"AbandonmentUpdateActivitiesDeliveryStatusesUserError"
	},
	AbandonmentUpdateActivitiesDeliveryStatusesUserError:{
		code:"AbandonmentUpdateActivitiesDeliveryStatusesUserErrorCode",
		field:"String",
		message:"String"
	},
	AccessScope:{
		description:"String",
		handle:"String"
	},
	AddAllProductsOperation:{
		id:"ID",
		processedRowCount:"Int",
		rowCount:"RowCount",
		status:"ResourceOperationStatus"
	},
	AdditionalFee:{
		id:"ID",
		name:"String",
		price:"MoneyBag",
		taxLines:"TaxLine"
	},
	AdditionalFeeSale:{
		actionType:"SaleActionType",
		additionalFee:"SaleAdditionalFee",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	AdjustmentSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	AllDiscountItems:{
		allItems:"Boolean"
	},
	AndroidApplication:{
		appLinksEnabled:"Boolean",
		applicationId:"String",
		id:"ID",
		sha256CertFingerprints:"String"
	},
	ApiVersion:{
		displayName:"String",
		handle:"String",
		supported:"Boolean"
	},
	App:{
		apiKey:"String",
		appStoreAppUrl:"URL",
		appStoreDeveloperUrl:"URL",
		availableAccessScopes:"AccessScope",
		banner:"Image",
		description:"String",
		developerName:"String",
		developerType:"AppDeveloperType",
		developerUrl:"URL",
		embedded:"Boolean",
		failedRequirements:"FailedRequirement",
		features:"String",
		feedback:"AppFeedback",
		handle:"String",
		icon:"Image",
		id:"ID",
		installUrl:"URL",
		installation:"AppInstallation",
		isPostPurchaseAppInUse:"Boolean",
		launchUrl:"URL",
		navigationItems:"NavigationItem",
		optionalAccessScopes:"AccessScope",
		previouslyInstalled:"Boolean",
		pricingDetails:"String",
		pricingDetailsSummary:"String",
		privacyPolicyUrl:"URL",
		publicCategory:"AppPublicCategory",
		published:"Boolean",
		requestedAccessScopes:"AccessScope",
		screenshots:"Image",
		shopifyDeveloped:"Boolean",
		title:"String",
		uninstallMessage:"String",
		uninstallUrl:"URL",
		webhookApiVersion:"String"
	},
	AppCatalog:{
		apps:"AppConnection",
		id:"ID",
		operations:"ResourceOperation",
		priceList:"PriceList",
		publication:"Publication",
		status:"CatalogStatus",
		title:"String"
	},
	AppConnection:{
		edges:"AppEdge",
		nodes:"App",
		pageInfo:"PageInfo"
	},
	AppCredit:{
		amount:"MoneyV2",
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		test:"Boolean"
	},
	AppCreditConnection:{
		edges:"AppCreditEdge",
		nodes:"AppCredit",
		pageInfo:"PageInfo"
	},
	AppCreditEdge:{
		cursor:"String",
		node:"AppCredit"
	},
	AppDiscountType:{
		app:"App",
		appBridge:"FunctionsAppBridge",
		appKey:"String",
		description:"String",
		discountClass:"DiscountClass",
		discountClasses:"DiscountClass",
		functionId:"String",
		targetType:"DiscountApplicationTargetType",
		title:"String"
	},
	AppDiscountTypeConnection:{
		edges:"AppDiscountTypeEdge",
		nodes:"AppDiscountType",
		pageInfo:"PageInfo"
	},
	AppDiscountTypeEdge:{
		cursor:"String",
		node:"AppDiscountType"
	},
	AppEdge:{
		cursor:"String",
		node:"App"
	},
	AppFeedback:{
		app:"App",
		feedbackGeneratedAt:"DateTime",
		link:"Link",
		messages:"UserError",
		state:"ResourceFeedbackState"
	},
	AppInstallation:{
		accessScopes:"AccessScope",
		activeSubscriptions:"AppSubscription",
		allSubscriptions:"AppSubscriptionConnection",
		app:"App",
		channel:"Channel",
		credits:"AppCreditConnection",
		id:"ID",
		launchUrl:"URL",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		oneTimePurchases:"AppPurchaseOneTimeConnection",
		publication:"Publication",
		revenueAttributionRecords:"AppRevenueAttributionRecordConnection",
		subscriptions:"AppSubscription",
		uninstallUrl:"URL"
	},
	AppInstallationConnection:{
		edges:"AppInstallationEdge",
		nodes:"AppInstallation",
		pageInfo:"PageInfo"
	},
	AppInstallationEdge:{
		cursor:"String",
		node:"AppInstallation"
	},
	AppPlanV2:{
		pricingDetails:"AppPricingDetails"
	},
	AppPricingDetails:{
		"...on AppRecurringPricing":"AppRecurringPricing",
		"...on AppUsagePricing":"AppUsagePricing"
	},
	AppPurchase:{
		"...on AppPurchaseOneTime": "AppPurchaseOneTime",
		createdAt:"DateTime",
		name:"String",
		price:"MoneyV2",
		status:"AppPurchaseStatus",
		test:"Boolean"
	},
	AppPurchaseOneTime:{
		createdAt:"DateTime",
		id:"ID",
		name:"String",
		price:"MoneyV2",
		status:"AppPurchaseStatus",
		test:"Boolean"
	},
	AppPurchaseOneTimeConnection:{
		edges:"AppPurchaseOneTimeEdge",
		nodes:"AppPurchaseOneTime",
		pageInfo:"PageInfo"
	},
	AppPurchaseOneTimeCreatePayload:{
		appPurchaseOneTime:"AppPurchaseOneTime",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppPurchaseOneTimeEdge:{
		cursor:"String",
		node:"AppPurchaseOneTime"
	},
	AppRecurringPricing:{
		discount:"AppSubscriptionDiscount",
		interval:"AppPricingInterval",
		planHandle:"String",
		price:"MoneyV2"
	},
	AppRevenueAttributionRecord:{
		amount:"MoneyV2",
		capturedAt:"DateTime",
		createdAt:"DateTime",
		id:"ID",
		idempotencyKey:"String",
		test:"Boolean",
		type:"AppRevenueAttributionType"
	},
	AppRevenueAttributionRecordConnection:{
		edges:"AppRevenueAttributionRecordEdge",
		nodes:"AppRevenueAttributionRecord",
		pageInfo:"PageInfo"
	},
	AppRevenueAttributionRecordEdge:{
		cursor:"String",
		node:"AppRevenueAttributionRecord"
	},
	AppRevokeAccessScopesAppRevokeScopeError:{
		code:"AppRevokeAccessScopesAppRevokeScopeErrorCode",
		field:"String",
		message:"String"
	},
	AppRevokeAccessScopesPayload:{
		revoked:"AccessScope",
		userErrors:"AppRevokeAccessScopesAppRevokeScopeError"
	},
	AppSubscription:{
		createdAt:"DateTime",
		currentPeriodEnd:"DateTime",
		id:"ID",
		lineItems:"AppSubscriptionLineItem",
		name:"String",
		returnUrl:"URL",
		status:"AppSubscriptionStatus",
		test:"Boolean",
		trialDays:"Int"
	},
	AppSubscriptionCancelPayload:{
		appSubscription:"AppSubscription",
		userErrors:"UserError"
	},
	AppSubscriptionConnection:{
		edges:"AppSubscriptionEdge",
		nodes:"AppSubscription",
		pageInfo:"PageInfo"
	},
	AppSubscriptionCreatePayload:{
		appSubscription:"AppSubscription",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppSubscriptionDiscount:{
		durationLimitInIntervals:"Int",
		priceAfterDiscount:"MoneyV2",
		remainingDurationInIntervals:"Int",
		value:"AppSubscriptionDiscountValue"
	},
	AppSubscriptionDiscountAmount:{
		amount:"MoneyV2"
	},
	AppSubscriptionDiscountPercentage:{
		percentage:"Float"
	},
	AppSubscriptionDiscountValue:{
		"...on AppSubscriptionDiscountAmount":"AppSubscriptionDiscountAmount",
		"...on AppSubscriptionDiscountPercentage":"AppSubscriptionDiscountPercentage"
	},
	AppSubscriptionEdge:{
		cursor:"String",
		node:"AppSubscription"
	},
	AppSubscriptionLineItem:{
		id:"ID",
		plan:"AppPlanV2",
		usageRecords:"AppUsageRecordConnection"
	},
	AppSubscriptionLineItemUpdatePayload:{
		appSubscription:"AppSubscription",
		confirmationUrl:"URL",
		userErrors:"UserError"
	},
	AppSubscriptionTrialExtendPayload:{
		appSubscription:"AppSubscription",
		userErrors:"AppSubscriptionTrialExtendUserError"
	},
	AppSubscriptionTrialExtendUserError:{
		code:"AppSubscriptionTrialExtendUserErrorCode",
		field:"String",
		message:"String"
	},
	AppUninstallAppUninstallError:{
		code:"AppUninstallAppUninstallErrorCode",
		field:"String",
		message:"String"
	},
	AppUninstallPayload:{
		app:"App",
		userErrors:"AppUninstallAppUninstallError"
	},
	AppUsagePricing:{
		balanceUsed:"MoneyV2",
		cappedAmount:"MoneyV2",
		interval:"AppPricingInterval",
		terms:"String"
	},
	AppUsageRecord:{
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		idempotencyKey:"String",
		price:"MoneyV2",
		subscriptionLineItem:"AppSubscriptionLineItem"
	},
	AppUsageRecordConnection:{
		edges:"AppUsageRecordEdge",
		nodes:"AppUsageRecord",
		pageInfo:"PageInfo"
	},
	AppUsageRecordCreatePayload:{
		appUsageRecord:"AppUsageRecord",
		userErrors:"UserError"
	},
	AppUsageRecordEdge:{
		cursor:"String",
		node:"AppUsageRecord"
	},
	AppleApplication:{
		appClipApplicationId:"String",
		appClipsEnabled:"Boolean",
		appId:"String",
		id:"ID",
		sharedWebCredentialsEnabled:"Boolean",
		universalLinksEnabled:"Boolean"
	},
	Article:{
		author:"ArticleAuthor",
		blog:"Blog",
		body:"HTML",
		comments:"CommentConnection",
		commentsCount:"Count",
		createdAt:"DateTime",
		defaultCursor:"String",
		events:"EventConnection",
		handle:"String",
		id:"ID",
		image:"Image",
		isPublished:"Boolean",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		publishedAt:"DateTime",
		summary:"HTML",
		tags:"String",
		templateSuffix:"String",
		title:"String",
		translations:"Translation",
		updatedAt:"DateTime"
	},
	ArticleAuthor:{
		name:"String"
	},
	ArticleAuthorConnection:{
		edges:"ArticleAuthorEdge",
		nodes:"ArticleAuthor",
		pageInfo:"PageInfo"
	},
	ArticleAuthorEdge:{
		cursor:"String",
		node:"ArticleAuthor"
	},
	ArticleConnection:{
		edges:"ArticleEdge",
		nodes:"Article",
		pageInfo:"PageInfo"
	},
	ArticleCreatePayload:{
		article:"Article",
		userErrors:"ArticleCreateUserError"
	},
	ArticleCreateUserError:{
		code:"ArticleCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ArticleDeletePayload:{
		deletedArticleId:"ID",
		userErrors:"ArticleDeleteUserError"
	},
	ArticleDeleteUserError:{
		code:"ArticleDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ArticleEdge:{
		cursor:"String",
		node:"Article"
	},
	ArticleUpdatePayload:{
		article:"Article",
		userErrors:"ArticleUpdateUserError"
	},
	ArticleUpdateUserError:{
		code:"ArticleUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Attribute:{
		key:"String",
		value:"String"
	},
	AutomaticDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	AvailableChannelDefinitionsByChannel:{
		channelDefinitions:"ChannelDefinition",
		channelName:"String"
	},
	BackupRegionUpdatePayload:{
		backupRegion:"MarketRegion",
		userErrors:"MarketUserError"
	},
	BasePaymentDetails:{
		"...on CardPaymentDetails": "CardPaymentDetails",
		"...on LocalPaymentMethodsPaymentDetails": "LocalPaymentMethodsPaymentDetails",
		"...on PaypalWalletPaymentDetails": "PaypalWalletPaymentDetails",
		"...on ShopPayInstallmentsPaymentDetails": "ShopPayInstallmentsPaymentDetails",
		paymentMethodName:"String"
	},
	BasicEvent:{
		action:"String",
		additionalContent:"JSON",
		additionalData:"JSON",
		appTitle:"String",
		arguments:"JSON",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		author:"String",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		hasAdditionalContent:"Boolean",
		id:"ID",
		message:"FormattedString",
		secondaryMessage:"FormattedString",
		subject:"HasEvents",
		subjectId:"ID",
		subjectType:"EventSubjectType"
	},
	BigInt: `scalar.BigInt` as const,
	BillingAttemptUserError:{
		code:"BillingAttemptUserErrorCode",
		field:"String",
		message:"String"
	},
	Blog:{
		articles:"ArticleConnection",
		articlesCount:"Count",
		commentPolicy:"CommentPolicy",
		createdAt:"DateTime",
		events:"EventConnection",
		feed:"BlogFeed",
		handle:"String",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		tags:"String",
		templateSuffix:"String",
		title:"String",
		translations:"Translation",
		updatedAt:"DateTime"
	},
	BlogConnection:{
		edges:"BlogEdge",
		nodes:"Blog",
		pageInfo:"PageInfo"
	},
	BlogCreatePayload:{
		blog:"Blog",
		userErrors:"BlogCreateUserError"
	},
	BlogCreateUserError:{
		code:"BlogCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	BlogDeletePayload:{
		deletedBlogId:"ID",
		userErrors:"BlogDeleteUserError"
	},
	BlogDeleteUserError:{
		code:"BlogDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	BlogEdge:{
		cursor:"String",
		node:"Blog"
	},
	BlogFeed:{
		location:"URL",
		path:"String"
	},
	BlogUpdatePayload:{
		blog:"Blog",
		userErrors:"BlogUpdateUserError"
	},
	BlogUpdateUserError:{
		code:"BlogUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	BulkMutationUserError:{
		code:"BulkMutationErrorCode",
		field:"String",
		message:"String"
	},
	BulkOperation:{
		completedAt:"DateTime",
		createdAt:"DateTime",
		errorCode:"BulkOperationErrorCode",
		fileSize:"UnsignedInt64",
		id:"ID",
		objectCount:"UnsignedInt64",
		partialDataUrl:"URL",
		query:"String",
		rootObjectCount:"UnsignedInt64",
		status:"BulkOperationStatus",
		type:"BulkOperationType",
		url:"URL"
	},
	BulkOperationCancelPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"UserError"
	},
	BulkOperationRunMutationPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"BulkMutationUserError"
	},
	BulkOperationRunQueryPayload:{
		bulkOperation:"BulkOperation",
		userErrors:"BulkOperationUserError"
	},
	BulkOperationUserError:{
		code:"BulkOperationUserErrorCode",
		field:"String",
		message:"String"
	},
	BulkProductResourceFeedbackCreatePayload:{
		feedback:"ProductResourceFeedback",
		userErrors:"BulkProductResourceFeedbackCreateUserError"
	},
	BulkProductResourceFeedbackCreateUserError:{
		code:"BulkProductResourceFeedbackCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	BundlesFeature:{
		eligibleForBundles:"Boolean",
		ineligibilityReason:"String",
		sellsBundles:"Boolean"
	},
	BusinessCustomerUserError:{
		code:"BusinessCustomerErrorCode",
		field:"String",
		message:"String"
	},
	BusinessEntity:{
		address:"BusinessEntityAddress",
		archived:"Boolean",
		companyName:"String",
		displayName:"String",
		id:"ID",
		primary:"Boolean",
		shopifyPaymentsAccount:"ShopifyPaymentsAccount"
	},
	BusinessEntityAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		countryCode:"CountryCode",
		province:"String",
		zip:"String"
	},
	BuyerExperienceConfiguration:{
		checkoutToDraft:"Boolean",
		deposit:"DepositConfiguration",
		editableShippingAddress:"Boolean",
		payNowOnly:"Boolean",
		paymentTermsTemplate:"PaymentTermsTemplate"
	},
	CalculatedAutomaticDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDiscountAllocation:{
		allocatedAmountSet:"MoneyBag",
		discountApplication:"CalculatedDiscountApplication"
	},
	CalculatedDiscountApplication:{
		"...on CalculatedAutomaticDiscountApplication": "CalculatedAutomaticDiscountApplication",
		"...on CalculatedDiscountCodeApplication": "CalculatedDiscountCodeApplication",
		"...on CalculatedManualDiscountApplication": "CalculatedManualDiscountApplication",
		"...on CalculatedScriptDiscountApplication": "CalculatedScriptDiscountApplication",
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDiscountApplicationConnection:{
		edges:"CalculatedDiscountApplicationEdge",
		nodes:"CalculatedDiscountApplication",
		pageInfo:"PageInfo"
	},
	CalculatedDiscountApplicationEdge:{
		cursor:"String",
		node:"CalculatedDiscountApplication"
	},
	CalculatedDiscountCodeApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		code:"String",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedDraftOrder:{
		acceptAutomaticDiscounts:"Boolean",
		alerts:"ResourceAlert",
		allVariantPricesOverridden:"Boolean",
		anyVariantPricesOverridden:"Boolean",
		appliedDiscount:"DraftOrderAppliedDiscount",
		availableShippingRates:"ShippingRate",
		billingAddressMatchesShippingAddress:"Boolean",
		currencyCode:"CurrencyCode",
		customer:"Customer",
		discountCodes:"String",
		lineItems:"CalculatedDraftOrderLineItem",
		lineItemsSubtotalPrice:"MoneyBag",
		marketName:"String",
		marketRegionCountryCode:"CountryCode",
		phone:"String",
		platformDiscounts:"DraftOrderPlatformDiscount",
		presentmentCurrencyCode:"CurrencyCode",
		purchasingEntity:"PurchasingEntity",
		shippingLine:"ShippingLine",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		totalDiscountsSet:"MoneyBag",
		totalLineItemsPriceSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalQuantityOfLineItems:"Int",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag",
		transformerFingerprint:"String",
		warnings:"DraftOrderWarning"
	},
	CalculatedDraftOrderLineItem:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		approximateDiscountedUnitPriceSet:"MoneyBag",
		bundleComponents:"CalculatedDraftOrderLineItem",
		components:"CalculatedDraftOrderLineItem",
		custom:"Boolean",
		customAttributes:"Attribute",
		customAttributesV2:"TypedAttribute",
		discountedTotal:"MoneyV2",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"MoneyV2",
		discountedUnitPriceSet:"MoneyBag",
		fulfillmentService:"FulfillmentService",
		image:"Image",
		isGiftCard:"Boolean",
		name:"String",
		originalTotal:"MoneyV2",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"MoneyV2",
		originalUnitPriceSet:"MoneyBag",
		originalUnitPriceWithCurrency:"MoneyV2",
		priceOverride:"MoneyV2",
		product:"Product",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"MoneyV2",
		totalDiscountSet:"MoneyBag",
		uuid:"String",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String",
		weight:"Weight"
	},
	CalculatedExchangeLineItem:{
		calculatedDiscountAllocations:"CalculatedDiscountAllocation",
		discountedUnitPriceSet:"MoneyBag",
		id:"ID",
		originalUnitPriceSet:"MoneyBag",
		quantity:"Int",
		subtotalSet:"MoneyBag",
		totalTaxSet:"MoneyBag",
		variant:"ProductVariant"
	},
	CalculatedLineItem:{
		calculatedDiscountAllocations:"CalculatedDiscountAllocation",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocation",
		discountedUnitPriceSet:"MoneyBag",
		editableQuantity:"Int",
		editableQuantityBeforeChanges:"Int",
		editableSubtotalSet:"MoneyBag",
		hasStagedLineItemDiscount:"Boolean",
		id:"ID",
		image:"Image",
		originalUnitPriceSet:"MoneyBag",
		quantity:"Int",
		restockable:"Boolean",
		restocking:"Boolean",
		sku:"String",
		stagedChanges:"OrderStagedChange",
		title:"String",
		uneditableSubtotalSet:"MoneyBag",
		variant:"ProductVariant",
		variantTitle:"String"
	},
	CalculatedLineItemConnection:{
		edges:"CalculatedLineItemEdge",
		nodes:"CalculatedLineItem",
		pageInfo:"PageInfo"
	},
	CalculatedLineItemEdge:{
		cursor:"String",
		node:"CalculatedLineItem"
	},
	CalculatedManualDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedOrder:{
		addedDiscountApplications:"CalculatedDiscountApplicationConnection",
		addedLineItems:"CalculatedLineItemConnection",
		cartDiscountAmountSet:"MoneyBag",
		committed:"Boolean",
		id:"ID",
		lineItems:"CalculatedLineItemConnection",
		notificationPreviewHtml:"HTML",
		notificationPreviewTitle:"String",
		originalOrder:"Order",
		shippingLines:"CalculatedShippingLine",
		stagedChanges:"OrderStagedChangeConnection",
		subtotalLineItemsQuantity:"Int",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		totalOutstandingSet:"MoneyBag",
		totalPriceSet:"MoneyBag"
	},
	CalculatedRestockingFee:{
		amountSet:"MoneyBag",
		id:"ID",
		percentage:"Float"
	},
	CalculatedReturn:{
		exchangeLineItems:"CalculatedExchangeLineItem",
		id:"ID",
		returnLineItems:"CalculatedReturnLineItem",
		returnShippingFee:"CalculatedReturnShippingFee"
	},
	CalculatedReturnFee:{
		"...on CalculatedRestockingFee": "CalculatedRestockingFee",
		"...on CalculatedReturnShippingFee": "CalculatedReturnShippingFee",
		amountSet:"MoneyBag",
		id:"ID"
	},
	CalculatedReturnLineItem:{
		fulfillmentLineItem:"FulfillmentLineItem",
		id:"ID",
		quantity:"Int",
		restockingFee:"CalculatedRestockingFee",
		subtotalBeforeOrderDiscountsSet:"MoneyBag",
		subtotalSet:"MoneyBag",
		totalTaxSet:"MoneyBag"
	},
	CalculatedReturnShippingFee:{
		amountSet:"MoneyBag",
		id:"ID"
	},
	CalculatedScriptDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		appliedTo:"DiscountApplicationLevel",
		description:"String",
		id:"ID",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	CalculatedShippingLine:{
		id:"ID",
		price:"MoneyBag",
		stagedStatus:"CalculatedShippingLineStagedStatus",
		title:"String"
	},
	CardPaymentDetails:{
		avsResultCode:"String",
		bin:"String",
		company:"String",
		cvvResultCode:"String",
		expirationMonth:"Int",
		expirationYear:"Int",
		name:"String",
		number:"String",
		paymentMethodName:"String",
		wallet:"DigitalWallet"
	},
	CarrierServiceCreatePayload:{
		carrierService:"DeliveryCarrierService",
		userErrors:"CarrierServiceCreateUserError"
	},
	CarrierServiceCreateUserError:{
		code:"CarrierServiceCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	CarrierServiceDeletePayload:{
		deletedId:"ID",
		userErrors:"CarrierServiceDeleteUserError"
	},
	CarrierServiceDeleteUserError:{
		code:"CarrierServiceDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	CarrierServiceUpdatePayload:{
		carrierService:"DeliveryCarrierService",
		userErrors:"CarrierServiceUpdateUserError"
	},
	CarrierServiceUpdateUserError:{
		code:"CarrierServiceUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	CartTransform:{
		blockOnFailure:"Boolean",
		functionId:"String",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection"
	},
	CartTransformConnection:{
		edges:"CartTransformEdge",
		nodes:"CartTransform",
		pageInfo:"PageInfo"
	},
	CartTransformCreatePayload:{
		cartTransform:"CartTransform",
		userErrors:"CartTransformCreateUserError"
	},
	CartTransformCreateUserError:{
		code:"CartTransformCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	CartTransformDeletePayload:{
		deletedId:"ID",
		userErrors:"CartTransformDeleteUserError"
	},
	CartTransformDeleteUserError:{
		code:"CartTransformDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	CartTransformEdge:{
		cursor:"String",
		node:"CartTransform"
	},
	CartTransformEligibleOperations:{
		expandOperation:"Boolean",
		mergeOperation:"Boolean",
		updateOperation:"Boolean"
	},
	CartTransformFeature:{
		eligibleOperations:"CartTransformEligibleOperations"
	},
	CashRoundingAdjustment:{
		paymentSet:"MoneyBag",
		refundSet:"MoneyBag"
	},
	CashTrackingAdjustment:{
		cash:"MoneyV2",
		id:"ID",
		note:"String",
		staffMember:"StaffMember",
		time:"DateTime"
	},
	CashTrackingAdjustmentConnection:{
		edges:"CashTrackingAdjustmentEdge",
		nodes:"CashTrackingAdjustment",
		pageInfo:"PageInfo"
	},
	CashTrackingAdjustmentEdge:{
		cursor:"String",
		node:"CashTrackingAdjustment"
	},
	CashTrackingSession:{
		adjustments:"CashTrackingAdjustmentConnection",
		cashTrackingEnabled:"Boolean",
		cashTransactions:"OrderTransactionConnection",
		closingBalance:"MoneyV2",
		closingNote:"String",
		closingStaffMember:"StaffMember",
		closingTime:"DateTime",
		expectedBalance:"MoneyV2",
		expectedClosingBalance:"MoneyV2",
		expectedOpeningBalance:"MoneyV2",
		id:"ID",
		location:"Location",
		netCashSales:"MoneyV2",
		openingBalance:"MoneyV2",
		openingNote:"String",
		openingStaffMember:"StaffMember",
		openingTime:"DateTime",
		registerName:"String",
		totalAdjustments:"MoneyV2",
		totalCashRefunds:"MoneyV2",
		totalCashSales:"MoneyV2",
		totalDiscrepancy:"MoneyV2"
	},
	CashTrackingSessionConnection:{
		edges:"CashTrackingSessionEdge",
		nodes:"CashTrackingSession",
		pageInfo:"PageInfo"
	},
	CashTrackingSessionEdge:{
		cursor:"String",
		node:"CashTrackingSession"
	},
	Catalog:{
		"...on AppCatalog": "AppCatalog",
		"...on CompanyLocationCatalog": "CompanyLocationCatalog",
		"...on MarketCatalog": "MarketCatalog",
		id:"ID",
		operations:"ResourceOperation",
		priceList:"PriceList",
		publication:"Publication",
		status:"CatalogStatus",
		title:"String"
	},
	CatalogConnection:{
		edges:"CatalogEdge",
		nodes:"Catalog",
		pageInfo:"PageInfo"
	},
	CatalogContextUpdatePayload:{
		catalog:"Catalog",
		userErrors:"CatalogUserError"
	},
	CatalogCreatePayload:{
		catalog:"Catalog",
		userErrors:"CatalogUserError"
	},
	CatalogCsvOperation:{
		id:"ID",
		processedRowCount:"Int",
		rowCount:"RowCount",
		status:"ResourceOperationStatus"
	},
	CatalogDeletePayload:{
		deletedId:"ID",
		userErrors:"CatalogUserError"
	},
	CatalogEdge:{
		cursor:"String",
		node:"Catalog"
	},
	CatalogUpdatePayload:{
		catalog:"Catalog",
		userErrors:"CatalogUserError"
	},
	CatalogUserError:{
		code:"CatalogUserErrorCode",
		field:"String",
		message:"String"
	},
	Channel:{
		app:"App",
		collectionPublicationsV3:"ResourcePublicationConnection",
		collections:"CollectionConnection",
		handle:"String",
		hasCollection:"Boolean",
		id:"ID",
		name:"String",
		navigationItems:"NavigationItem",
		overviewPath:"URL",
		productPublications:"ProductPublicationConnection",
		productPublicationsV3:"ResourcePublicationConnection",
		products:"ProductConnection",
		productsCount:"Count",
		supportsFuturePublishing:"Boolean"
	},
	ChannelConnection:{
		edges:"ChannelEdge",
		nodes:"Channel",
		pageInfo:"PageInfo"
	},
	ChannelDefinition:{
		channelName:"String",
		handle:"String",
		id:"ID",
		isMarketplace:"Boolean",
		subChannelName:"String",
		svgIcon:"String"
	},
	ChannelEdge:{
		cursor:"String",
		node:"Channel"
	},
	ChannelInformation:{
		app:"App",
		channelDefinition:"ChannelDefinition",
		channelId:"ID",
		displayName:"String",
		id:"ID"
	},
	CheckoutBranding:{
		customizations:"CheckoutBrandingCustomizations",
		designSystem:"CheckoutBrandingDesignSystem"
	},
	CheckoutBrandingButton:{
		background:"CheckoutBrandingBackgroundStyle",
		blockPadding:"CheckoutBrandingSpacing",
		border:"CheckoutBrandingSimpleBorder",
		cornerRadius:"CheckoutBrandingCornerRadius",
		inlinePadding:"CheckoutBrandingSpacing",
		typography:"CheckoutBrandingTypographyStyle"
	},
	CheckoutBrandingButtonColorRoles:{
		accent:"String",
		background:"String",
		border:"String",
		decorative:"String",
		hover:"CheckoutBrandingColorRoles",
		icon:"String",
		text:"String"
	},
	CheckoutBrandingBuyerJourney:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingCartLink:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingCheckbox:{
		cornerRadius:"CheckoutBrandingCornerRadius"
	},
	CheckoutBrandingChoiceList:{
		group:"CheckoutBrandingChoiceListGroup"
	},
	CheckoutBrandingChoiceListGroup:{
		spacing:"CheckoutBrandingSpacingKeyword"
	},
	CheckoutBrandingColorGlobal:{
		accent:"String",
		brand:"String",
		critical:"String",
		decorative:"String",
		info:"String",
		success:"String",
		warning:"String"
	},
	CheckoutBrandingColorRoles:{
		accent:"String",
		background:"String",
		border:"String",
		decorative:"String",
		icon:"String",
		text:"String"
	},
	CheckoutBrandingColorScheme:{
		base:"CheckoutBrandingColorRoles",
		control:"CheckoutBrandingControlColorRoles",
		primaryButton:"CheckoutBrandingButtonColorRoles",
		secondaryButton:"CheckoutBrandingButtonColorRoles"
	},
	CheckoutBrandingColorSchemes:{
		scheme1:"CheckoutBrandingColorScheme",
		scheme2:"CheckoutBrandingColorScheme",
		scheme3:"CheckoutBrandingColorScheme",
		scheme4:"CheckoutBrandingColorScheme"
	},
	CheckoutBrandingColors:{
		global:"CheckoutBrandingColorGlobal",
		schemes:"CheckoutBrandingColorSchemes"
	},
	CheckoutBrandingContainerDivider:{
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingContent:{
		divider:"CheckoutBrandingContainerDivider"
	},
	CheckoutBrandingControl:{
		border:"CheckoutBrandingSimpleBorder",
		color:"CheckoutBrandingColorSelection",
		cornerRadius:"CheckoutBrandingCornerRadius",
		labelPosition:"CheckoutBrandingLabelPosition"
	},
	CheckoutBrandingControlColorRoles:{
		accent:"String",
		background:"String",
		border:"String",
		decorative:"String",
		icon:"String",
		selected:"CheckoutBrandingColorRoles",
		text:"String"
	},
	CheckoutBrandingCornerRadiusVariables:{
		base:"Int",
		large:"Int",
		small:"Int"
	},
	CheckoutBrandingCustomFont:{
		genericFileId:"ID",
		sources:"String",
		weight:"Int"
	},
	CheckoutBrandingCustomizations:{
		buyerJourney:"CheckoutBrandingBuyerJourney",
		cartLink:"CheckoutBrandingCartLink",
		checkbox:"CheckoutBrandingCheckbox",
		choiceList:"CheckoutBrandingChoiceList",
		content:"CheckoutBrandingContent",
		control:"CheckoutBrandingControl",
		divider:"CheckoutBrandingDividerStyle",
		expressCheckout:"CheckoutBrandingExpressCheckout",
		favicon:"CheckoutBrandingImage",
		footer:"CheckoutBrandingFooter",
		global:"CheckoutBrandingGlobal",
		header:"CheckoutBrandingHeader",
		headingLevel1:"CheckoutBrandingHeadingLevel",
		headingLevel2:"CheckoutBrandingHeadingLevel",
		headingLevel3:"CheckoutBrandingHeadingLevel",
		main:"CheckoutBrandingMain",
		merchandiseThumbnail:"CheckoutBrandingMerchandiseThumbnail",
		orderSummary:"CheckoutBrandingOrderSummary",
		primaryButton:"CheckoutBrandingButton",
		secondaryButton:"CheckoutBrandingButton",
		select:"CheckoutBrandingSelect",
		textField:"CheckoutBrandingTextField"
	},
	CheckoutBrandingDesignSystem:{
		colors:"CheckoutBrandingColors",
		cornerRadius:"CheckoutBrandingCornerRadiusVariables",
		typography:"CheckoutBrandingTypography"
	},
	CheckoutBrandingDividerStyle:{
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth"
	},
	CheckoutBrandingExpressCheckout:{
		button:"CheckoutBrandingExpressCheckoutButton"
	},
	CheckoutBrandingExpressCheckoutButton:{
		cornerRadius:"CheckoutBrandingCornerRadius"
	},
	CheckoutBrandingFont:{
		"...on CheckoutBrandingCustomFont": "CheckoutBrandingCustomFont",
		"...on CheckoutBrandingShopifyFont": "CheckoutBrandingShopifyFont",
		sources:"String",
		weight:"Int"
	},
	CheckoutBrandingFontGroup:{
		base:"CheckoutBrandingFont",
		bold:"CheckoutBrandingFont",
		loadingStrategy:"CheckoutBrandingFontLoadingStrategy",
		name:"String"
	},
	CheckoutBrandingFontSize:{
		base:"Float",
		ratio:"Float"
	},
	CheckoutBrandingFooter:{
		alignment:"CheckoutBrandingFooterAlignment",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		content:"CheckoutBrandingFooterContent",
		divided:"Boolean",
		padding:"CheckoutBrandingSpacingKeyword",
		position:"CheckoutBrandingFooterPosition"
	},
	CheckoutBrandingFooterContent:{
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingGlobal:{
		cornerRadius:"CheckoutBrandingGlobalCornerRadius",
		typography:"CheckoutBrandingTypographyStyleGlobal"
	},
	CheckoutBrandingHeader:{
		alignment:"CheckoutBrandingHeaderAlignment",
		banner:"CheckoutBrandingImage",
		cartLink:"CheckoutBrandingHeaderCartLink",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		divided:"Boolean",
		logo:"CheckoutBrandingLogo",
		padding:"CheckoutBrandingSpacingKeyword",
		position:"CheckoutBrandingHeaderPosition"
	},
	CheckoutBrandingHeaderCartLink:{
		contentType:"CheckoutBrandingCartLinkContentType",
		image:"Image"
	},
	CheckoutBrandingHeadingLevel:{
		typography:"CheckoutBrandingTypographyStyle"
	},
	CheckoutBrandingImage:{
		image:"Image"
	},
	CheckoutBrandingLogo:{
		image:"Image",
		maxWidth:"Int",
		visibility:"CheckoutBrandingVisibility"
	},
	CheckoutBrandingMain:{
		backgroundImage:"CheckoutBrandingImage",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		divider:"CheckoutBrandingContainerDivider",
		section:"CheckoutBrandingMainSection"
	},
	CheckoutBrandingMainSection:{
		background:"CheckoutBrandingBackground",
		border:"CheckoutBrandingSimpleBorder",
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		cornerRadius:"CheckoutBrandingCornerRadius",
		padding:"CheckoutBrandingSpacingKeyword",
		shadow:"CheckoutBrandingShadow"
	},
	CheckoutBrandingMerchandiseThumbnail:{
		badge:"CheckoutBrandingMerchandiseThumbnailBadge",
		border:"CheckoutBrandingSimpleBorder",
		cornerRadius:"CheckoutBrandingCornerRadius",
		fit:"CheckoutBrandingObjectFit"
	},
	CheckoutBrandingMerchandiseThumbnailBadge:{
		background:"CheckoutBrandingMerchandiseThumbnailBadgeBackground"
	},
	CheckoutBrandingOrderSummary:{
		backgroundImage:"CheckoutBrandingImage",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		divider:"CheckoutBrandingContainerDivider",
		section:"CheckoutBrandingOrderSummarySection"
	},
	CheckoutBrandingOrderSummarySection:{
		background:"CheckoutBrandingBackground",
		border:"CheckoutBrandingSimpleBorder",
		borderStyle:"CheckoutBrandingBorderStyle",
		borderWidth:"CheckoutBrandingBorderWidth",
		colorScheme:"CheckoutBrandingColorSchemeSelection",
		cornerRadius:"CheckoutBrandingCornerRadius",
		padding:"CheckoutBrandingSpacingKeyword",
		shadow:"CheckoutBrandingShadow"
	},
	CheckoutBrandingSelect:{
		border:"CheckoutBrandingBorder",
		typography:"CheckoutBrandingTypographyStyle"
	},
	CheckoutBrandingShopifyFont:{
		sources:"String",
		weight:"Int"
	},
	CheckoutBrandingTextField:{
		border:"CheckoutBrandingBorder",
		typography:"CheckoutBrandingTypographyStyle"
	},
	CheckoutBrandingTypography:{
		primary:"CheckoutBrandingFontGroup",
		secondary:"CheckoutBrandingFontGroup",
		size:"CheckoutBrandingFontSize"
	},
	CheckoutBrandingTypographyStyle:{
		font:"CheckoutBrandingTypographyFont",
		kerning:"CheckoutBrandingTypographyKerning",
		letterCase:"CheckoutBrandingTypographyLetterCase",
		size:"CheckoutBrandingTypographySize",
		weight:"CheckoutBrandingTypographyWeight"
	},
	CheckoutBrandingTypographyStyleGlobal:{
		kerning:"CheckoutBrandingTypographyKerning",
		letterCase:"CheckoutBrandingTypographyLetterCase"
	},
	CheckoutBrandingUpsertPayload:{
		checkoutBranding:"CheckoutBranding",
		userErrors:"CheckoutBrandingUpsertUserError"
	},
	CheckoutBrandingUpsertUserError:{
		code:"CheckoutBrandingUpsertUserErrorCode",
		field:"String",
		message:"String"
	},
	CheckoutProfile:{
		createdAt:"DateTime",
		editedAt:"DateTime",
		id:"ID",
		isPublished:"Boolean",
		name:"String",
		typOspPagesActive:"Boolean",
		updatedAt:"DateTime"
	},
	CheckoutProfileConnection:{
		edges:"CheckoutProfileEdge",
		nodes:"CheckoutProfile",
		pageInfo:"PageInfo"
	},
	CheckoutProfileEdge:{
		cursor:"String",
		node:"CheckoutProfile"
	},
	Collection:{
		availablePublicationsCount:"Count",
		description:"String",
		descriptionHtml:"HTML",
		events:"EventConnection",
		feedback:"ResourceFeedback",
		handle:"String",
		hasProduct:"Boolean",
		id:"ID",
		image:"Image",
		legacyResourceId:"UnsignedInt64",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		products:"ProductConnection",
		productsCount:"Count",
		publicationCount:"Int",
		publications:"CollectionPublicationConnection",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsCount:"Count",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		ruleSet:"CollectionRuleSet",
		seo:"SEO",
		sortOrder:"CollectionSortOrder",
		storefrontId:"StorefrontID",
		templateSuffix:"String",
		title:"String",
		translations:"Translation",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection",
		updatedAt:"DateTime"
	},
	CollectionAddProductsPayload:{
		collection:"Collection",
		userErrors:"UserError"
	},
	CollectionAddProductsV2Payload:{
		job:"Job",
		userErrors:"CollectionAddProductsV2UserError"
	},
	CollectionAddProductsV2UserError:{
		code:"CollectionAddProductsV2UserErrorCode",
		field:"String",
		message:"String"
	},
	CollectionConnection:{
		edges:"CollectionEdge",
		nodes:"Collection",
		pageInfo:"PageInfo"
	},
	CollectionCreatePayload:{
		collection:"Collection",
		userErrors:"UserError"
	},
	CollectionDeletePayload:{
		deletedCollectionId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionEdge:{
		cursor:"String",
		node:"Collection"
	},
	CollectionPublication:{
		channel:"Channel",
		collection:"Collection",
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime"
	},
	CollectionPublicationConnection:{
		edges:"CollectionPublicationEdge",
		nodes:"CollectionPublication",
		pageInfo:"PageInfo"
	},
	CollectionPublicationEdge:{
		cursor:"String",
		node:"CollectionPublication"
	},
	CollectionPublishPayload:{
		collection:"Collection",
		collectionPublications:"CollectionPublication",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionRemoveProductsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	CollectionReorderProductsPayload:{
		job:"Job",
		userErrors:"CollectionReorderProductsUserError"
	},
	CollectionReorderProductsUserError:{
		code:"CollectionReorderProductsUserErrorCode",
		field:"String",
		message:"String"
	},
	CollectionRule:{
		column:"CollectionRuleColumn",
		condition:"String",
		conditionObject:"CollectionRuleConditionObject",
		relation:"CollectionRuleRelation"
	},
	CollectionRuleCategoryCondition:{
		value:"TaxonomyCategory"
	},
	CollectionRuleConditionObject:{
		"...on CollectionRuleCategoryCondition":"CollectionRuleCategoryCondition",
		"...on CollectionRuleMetafieldCondition":"CollectionRuleMetafieldCondition",
		"...on CollectionRuleProductCategoryCondition":"CollectionRuleProductCategoryCondition",
		"...on CollectionRuleTextCondition":"CollectionRuleTextCondition"
	},
	CollectionRuleConditions:{
		allowedRelations:"CollectionRuleRelation",
		defaultRelation:"CollectionRuleRelation",
		ruleObject:"CollectionRuleConditionsRuleObject",
		ruleType:"CollectionRuleColumn"
	},
	CollectionRuleConditionsRuleObject:{
		"...on CollectionRuleMetafieldCondition":"CollectionRuleMetafieldCondition"
	},
	CollectionRuleMetafieldCondition:{
		metafieldDefinition:"MetafieldDefinition"
	},
	CollectionRuleProductCategoryCondition:{
		value:"ProductTaxonomyNode"
	},
	CollectionRuleSet:{
		appliedDisjunctively:"Boolean",
		rules:"CollectionRule"
	},
	CollectionRuleTextCondition:{
		value:"String"
	},
	CollectionUnpublishPayload:{
		collection:"Collection",
		shop:"Shop",
		userErrors:"UserError"
	},
	CollectionUpdatePayload:{
		collection:"Collection",
		job:"Job",
		userErrors:"UserError"
	},
	Color: `scalar.Color` as const,
	CombinedListing:{
		combinedListingChildren:"CombinedListingChildConnection",
		parentProduct:"Product"
	},
	CombinedListingChild:{
		parentVariant:"ProductVariant",
		product:"Product"
	},
	CombinedListingChildConnection:{
		edges:"CombinedListingChildEdge",
		nodes:"CombinedListingChild",
		pageInfo:"PageInfo"
	},
	CombinedListingChildEdge:{
		cursor:"String",
		node:"CombinedListingChild"
	},
	CombinedListingUpdatePayload:{
		product:"Product",
		userErrors:"CombinedListingUpdateUserError"
	},
	CombinedListingUpdateUserError:{
		code:"CombinedListingUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Comment:{
		article:"Article",
		author:"CommentAuthor",
		body:"String",
		bodyHtml:"HTML",
		createdAt:"DateTime",
		events:"EventConnection",
		id:"ID",
		ip:"String",
		isPublished:"Boolean",
		publishedAt:"DateTime",
		status:"CommentStatus",
		updatedAt:"DateTime",
		userAgent:"String"
	},
	CommentApprovePayload:{
		comment:"Comment",
		userErrors:"CommentApproveUserError"
	},
	CommentApproveUserError:{
		code:"CommentApproveUserErrorCode",
		field:"String",
		message:"String"
	},
	CommentAuthor:{
		email:"String",
		name:"String"
	},
	CommentConnection:{
		edges:"CommentEdge",
		nodes:"Comment",
		pageInfo:"PageInfo"
	},
	CommentDeletePayload:{
		deletedCommentId:"ID",
		userErrors:"CommentDeleteUserError"
	},
	CommentDeleteUserError:{
		code:"CommentDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	CommentEdge:{
		cursor:"String",
		node:"Comment"
	},
	CommentEvent:{
		action:"String",
		appTitle:"String",
		attachments:"CommentEventAttachment",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		author:"StaffMember",
		canDelete:"Boolean",
		canEdit:"Boolean",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		edited:"Boolean",
		embed:"CommentEventEmbed",
		id:"ID",
		message:"FormattedString",
		rawMessage:"String",
		subject:"CommentEventSubject"
	},
	CommentEventAttachment:{
		fileExtension:"String",
		id:"ID",
		image:"Image",
		name:"String",
		size:"Int",
		url:"URL"
	},
	CommentEventEmbed:{
		"...on Customer":"Customer",
		"...on DraftOrder":"DraftOrder",
		"...on InventoryTransfer":"InventoryTransfer",
		"...on Order":"Order",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant"
	},
	CommentEventSubject:{
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		"...on DraftOrder": "DraftOrder",
		"...on InventoryTransfer": "InventoryTransfer",
		"...on Order": "Order",
		"...on PriceRule": "PriceRule",
		hasTimelineComment:"Boolean",
		id:"ID"
	},
	CommentNotSpamPayload:{
		comment:"Comment",
		userErrors:"CommentNotSpamUserError"
	},
	CommentNotSpamUserError:{
		code:"CommentNotSpamUserErrorCode",
		field:"String",
		message:"String"
	},
	CommentSpamPayload:{
		comment:"Comment",
		userErrors:"CommentSpamUserError"
	},
	CommentSpamUserError:{
		code:"CommentSpamUserErrorCode",
		field:"String",
		message:"String"
	},
	CompaniesDeletePayload:{
		deletedCompanyIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	Company:{
		contactCount:"Int",
		contactRoles:"CompanyContactRoleConnection",
		contacts:"CompanyContactConnection",
		contactsCount:"Count",
		createdAt:"DateTime",
		customerSince:"DateTime",
		defaultCursor:"String",
		defaultRole:"CompanyContactRole",
		draftOrders:"DraftOrderConnection",
		events:"EventConnection",
		externalId:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		lifetimeDuration:"String",
		locations:"CompanyLocationConnection",
		locationsCount:"Count",
		mainContact:"CompanyContact",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		note:"String",
		orders:"OrderConnection",
		ordersCount:"Count",
		totalSpent:"MoneyV2",
		updatedAt:"DateTime"
	},
	CompanyAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		companyName:"String",
		country:"String",
		countryCode:"CountryCode",
		createdAt:"DateTime",
		firstName:"String",
		formattedAddress:"String",
		formattedArea:"String",
		id:"ID",
		lastName:"String",
		phone:"String",
		province:"String",
		recipient:"String",
		updatedAt:"DateTime",
		zip:"String",
		zoneCode:"String"
	},
	CompanyAddressDeletePayload:{
		deletedAddressId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyAssignCustomerAsContactPayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyAssignMainContactPayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyConnection:{
		edges:"CompanyEdge",
		nodes:"Company",
		pageInfo:"PageInfo"
	},
	CompanyContact:{
		company:"Company",
		createdAt:"DateTime",
		customer:"Customer",
		draftOrders:"DraftOrderConnection",
		id:"ID",
		isMainContact:"Boolean",
		lifetimeDuration:"String",
		locale:"String",
		orders:"OrderConnection",
		roleAssignments:"CompanyContactRoleAssignmentConnection",
		title:"String",
		updatedAt:"DateTime"
	},
	CompanyContactAssignRolePayload:{
		companyContactRoleAssignment:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactAssignRolesPayload:{
		roleAssignments:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactConnection:{
		edges:"CompanyContactEdge",
		nodes:"CompanyContact",
		pageInfo:"PageInfo"
	},
	CompanyContactCreatePayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactDeletePayload:{
		deletedCompanyContactId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactEdge:{
		cursor:"String",
		node:"CompanyContact"
	},
	CompanyContactRemoveFromCompanyPayload:{
		removedCompanyContactId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactRevokeRolePayload:{
		revokedCompanyContactRoleAssignmentId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactRevokeRolesPayload:{
		revokedRoleAssignmentIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactRole:{
		id:"ID",
		name:"String",
		note:"String"
	},
	CompanyContactRoleAssignment:{
		company:"Company",
		companyContact:"CompanyContact",
		companyLocation:"CompanyLocation",
		createdAt:"DateTime",
		id:"ID",
		role:"CompanyContactRole",
		updatedAt:"DateTime"
	},
	CompanyContactRoleAssignmentConnection:{
		edges:"CompanyContactRoleAssignmentEdge",
		nodes:"CompanyContactRoleAssignment",
		pageInfo:"PageInfo"
	},
	CompanyContactRoleAssignmentEdge:{
		cursor:"String",
		node:"CompanyContactRoleAssignment"
	},
	CompanyContactRoleConnection:{
		edges:"CompanyContactRoleEdge",
		nodes:"CompanyContactRole",
		pageInfo:"PageInfo"
	},
	CompanyContactRoleEdge:{
		cursor:"String",
		node:"CompanyContactRole"
	},
	CompanyContactSendWelcomeEmailPayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactUpdatePayload:{
		companyContact:"CompanyContact",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyContactsDeletePayload:{
		deletedCompanyContactIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyCreatePayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyDeletePayload:{
		deletedCompanyId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyEdge:{
		cursor:"String",
		node:"Company"
	},
	CompanyLocation:{
		billingAddress:"CompanyAddress",
		buyerExperienceConfiguration:"BuyerExperienceConfiguration",
		catalogs:"CatalogConnection",
		catalogsCount:"Count",
		company:"Company",
		createdAt:"DateTime",
		currency:"CurrencyCode",
		defaultCursor:"String",
		draftOrders:"DraftOrderConnection",
		events:"EventConnection",
		externalId:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		inCatalog:"Boolean",
		locale:"String",
		market:"Market",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		note:"String",
		orderCount:"Int",
		orders:"OrderConnection",
		ordersCount:"Count",
		phone:"String",
		roleAssignments:"CompanyContactRoleAssignmentConnection",
		shippingAddress:"CompanyAddress",
		staffMemberAssignments:"CompanyLocationStaffMemberAssignmentConnection",
		storeCreditAccounts:"StoreCreditAccountConnection",
		taxExemptions:"TaxExemption",
		taxRegistrationId:"String",
		taxSettings:"CompanyLocationTaxSettings",
		totalSpent:"MoneyV2",
		updatedAt:"DateTime"
	},
	CompanyLocationAssignAddressPayload:{
		addresses:"CompanyAddress",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationAssignRolesPayload:{
		roleAssignments:"CompanyContactRoleAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationAssignStaffMembersPayload:{
		companyLocationStaffMemberAssignments:"CompanyLocationStaffMemberAssignment",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationAssignTaxExemptionsPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationCatalog:{
		companyLocations:"CompanyLocationConnection",
		companyLocationsCount:"Count",
		id:"ID",
		operations:"ResourceOperation",
		priceList:"PriceList",
		publication:"Publication",
		status:"CatalogStatus",
		title:"String"
	},
	CompanyLocationConnection:{
		edges:"CompanyLocationEdge",
		nodes:"CompanyLocation",
		pageInfo:"PageInfo"
	},
	CompanyLocationCreatePayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationCreateTaxRegistrationPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationDeletePayload:{
		deletedCompanyLocationId:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationEdge:{
		cursor:"String",
		node:"CompanyLocation"
	},
	CompanyLocationRemoveStaffMembersPayload:{
		deletedCompanyLocationStaffMemberAssignmentIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationRevokeRolesPayload:{
		revokedRoleAssignmentIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationRevokeTaxExemptionsPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationRevokeTaxRegistrationPayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationStaffMemberAssignment:{
		companyLocation:"CompanyLocation",
		id:"ID",
		staffMember:"StaffMember"
	},
	CompanyLocationStaffMemberAssignmentConnection:{
		edges:"CompanyLocationStaffMemberAssignmentEdge",
		nodes:"CompanyLocationStaffMemberAssignment",
		pageInfo:"PageInfo"
	},
	CompanyLocationStaffMemberAssignmentEdge:{
		cursor:"String",
		node:"CompanyLocationStaffMemberAssignment"
	},
	CompanyLocationTaxSettings:{
		taxExempt:"Boolean",
		taxExemptions:"TaxExemption",
		taxRegistrationId:"String"
	},
	CompanyLocationTaxSettingsUpdatePayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationUpdatePayload:{
		companyLocation:"CompanyLocation",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyLocationsCondition:{
		applicationLevel:"MarketConditionApplicationType",
		companyLocations:"CompanyLocationConnection"
	},
	CompanyLocationsDeletePayload:{
		deletedCompanyLocationIds:"ID",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyRevokeMainContactPayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	CompanyUpdatePayload:{
		company:"Company",
		userErrors:"BusinessCustomerUserError"
	},
	ConsentPolicy:{
		consentRequired:"Boolean",
		countryCode:"PrivacyCountryCode",
		dataSaleOptOutRequired:"Boolean",
		id:"ID",
		regionCode:"String",
		shopId:"ID"
	},
	ConsentPolicyError:{
		code:"ConsentPolicyErrorCode",
		field:"String",
		message:"String"
	},
	ConsentPolicyRegion:{
		countryCode:"PrivacyCountryCode",
		regionCode:"String"
	},
	ConsentPolicyUpdatePayload:{
		updatedPolicies:"ConsentPolicy",
		userErrors:"ConsentPolicyError"
	},
	CookieBanner:{
		autoManaged:"Boolean",
		enabled:"Boolean",
		translations:"Translation"
	},
	Count:{
		count:"Int",
		precision:"CountPrecision"
	},
	CountriesInShippingZones:{
		countryCodes:"CountryCode",
		includeRestOfWorld:"Boolean"
	},
	CountryHarmonizedSystemCode:{
		countryCode:"CountryCode",
		harmonizedSystemCode:"String"
	},
	CountryHarmonizedSystemCodeConnection:{
		edges:"CountryHarmonizedSystemCodeEdge",
		nodes:"CountryHarmonizedSystemCode",
		pageInfo:"PageInfo"
	},
	CountryHarmonizedSystemCodeEdge:{
		cursor:"String",
		node:"CountryHarmonizedSystemCode"
	},
	CurrencyExchangeAdjustment:{
		adjustment:"MoneyV2",
		finalAmountSet:"MoneyV2",
		id:"ID",
		originalAmountSet:"MoneyV2"
	},
	CurrencyFormats:{
		moneyFormat:"FormattedString",
		moneyInEmailsFormat:"String",
		moneyWithCurrencyFormat:"FormattedString",
		moneyWithCurrencyInEmailsFormat:"String"
	},
	CurrencySetting:{
		currencyCode:"CurrencyCode",
		currencyName:"String",
		enabled:"Boolean",
		manualRate:"Decimal",
		rateUpdatedAt:"DateTime"
	},
	CurrencySettingConnection:{
		edges:"CurrencySettingEdge",
		nodes:"CurrencySetting",
		pageInfo:"PageInfo"
	},
	CurrencySettingEdge:{
		cursor:"String",
		node:"CurrencySetting"
	},
	Customer:{
		addresses:"MailingAddress",
		addressesV2:"MailingAddressConnection",
		amountSpent:"MoneyV2",
		canDelete:"Boolean",
		companyContactProfiles:"CompanyContact",
		createdAt:"DateTime",
		dataSaleOptOut:"Boolean",
		defaultAddress:"MailingAddress",
		defaultEmailAddress:"CustomerEmailAddress",
		defaultPhoneNumber:"CustomerPhoneNumber",
		displayName:"String",
		email:"String",
		emailMarketingConsent:"CustomerEmailMarketingConsentState",
		events:"EventConnection",
		firstName:"String",
		hasTimelineComment:"Boolean",
		id:"ID",
		image:"Image",
		lastName:"String",
		lastOrder:"Order",
		legacyResourceId:"UnsignedInt64",
		lifetimeDuration:"String",
		locale:"String",
		market:"Market",
		mergeable:"CustomerMergeable",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		multipassIdentifier:"String",
		note:"String",
		numberOfOrders:"UnsignedInt64",
		orders:"OrderConnection",
		paymentMethods:"CustomerPaymentMethodConnection",
		phone:"String",
		productSubscriberStatus:"CustomerProductSubscriberStatus",
		smsMarketingConsent:"CustomerSmsMarketingConsentState",
		state:"CustomerState",
		statistics:"CustomerStatistics",
		storeCreditAccounts:"StoreCreditAccountConnection",
		subscriptionContracts:"SubscriptionContractConnection",
		tags:"String",
		taxExempt:"Boolean",
		taxExemptions:"TaxExemption",
		unsubscribeUrl:"URL",
		updatedAt:"DateTime",
		validEmailAddress:"Boolean",
		verifiedEmail:"Boolean"
	},
	CustomerAccountAppExtensionPage:{
		appExtensionUuid:"String",
		defaultCursor:"String",
		handle:"String",
		id:"ID",
		title:"String"
	},
	CustomerAccountNativePage:{
		defaultCursor:"String",
		handle:"String",
		id:"ID",
		pageType:"CustomerAccountNativePagePageType",
		title:"String"
	},
	CustomerAccountPage:{
		"...on CustomerAccountAppExtensionPage": "CustomerAccountAppExtensionPage",
		"...on CustomerAccountNativePage": "CustomerAccountNativePage",
		defaultCursor:"String",
		handle:"String",
		id:"ID",
		title:"String"
	},
	CustomerAccountPageConnection:{
		edges:"CustomerAccountPageEdge",
		nodes:"CustomerAccountPage",
		pageInfo:"PageInfo"
	},
	CustomerAccountPageEdge:{
		cursor:"String",
		node:"CustomerAccountPage"
	},
	CustomerAccountsV2:{
		customerAccountsVersion:"CustomerAccountsVersion",
		loginLinksVisibleOnStorefrontAndCheckout:"Boolean",
		loginRequiredAtCheckout:"Boolean",
		url:"URL"
	},
	CustomerAddTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerAddressCreatePayload:{
		address:"MailingAddress",
		userErrors:"UserError"
	},
	CustomerAddressDeletePayload:{
		deletedAddressId:"ID",
		userErrors:"UserError"
	},
	CustomerAddressUpdatePayload:{
		address:"MailingAddress",
		userErrors:"UserError"
	},
	CustomerCancelDataErasurePayload:{
		customerId:"ID",
		userErrors:"CustomerCancelDataErasureUserError"
	},
	CustomerCancelDataErasureUserError:{
		code:"CustomerCancelDataErasureErrorCode",
		field:"String",
		message:"String"
	},
	CustomerConnection:{
		edges:"CustomerEdge",
		nodes:"Customer",
		pageInfo:"PageInfo"
	},
	CustomerCreatePayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerCreditCard:{
		billingAddress:"CustomerCreditCardBillingAddress",
		brand:"String",
		expiresSoon:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		firstDigits:"String",
		isRevocable:"Boolean",
		lastDigits:"String",
		maskedNumber:"String",
		name:"String",
		source:"String",
		virtualLastDigits:"String"
	},
	CustomerCreditCardBillingAddress:{
		address1:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		firstName:"String",
		lastName:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	CustomerDeletePayload:{
		deletedCustomerId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	CustomerEdge:{
		cursor:"String",
		node:"Customer"
	},
	CustomerEmailAddress:{
		emailAddress:"String",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerEmailAddressMarketingState",
		marketingUnsubscribeUrl:"URL",
		marketingUpdatedAt:"DateTime",
		openTrackingLevel:"CustomerEmailAddressOpenTrackingLevel",
		openTrackingUrl:"URL",
		sourceLocation:"Location",
		validFormat:"Boolean"
	},
	CustomerEmailMarketingConsentState:{
		consentUpdatedAt:"DateTime",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerEmailMarketingState",
		sourceLocation:"Location"
	},
	CustomerEmailMarketingConsentUpdatePayload:{
		customer:"Customer",
		userErrors:"CustomerEmailMarketingConsentUpdateUserError"
	},
	CustomerEmailMarketingConsentUpdateUserError:{
		code:"CustomerEmailMarketingConsentUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerGenerateAccountActivationUrlPayload:{
		accountActivationUrl:"URL",
		userErrors:"UserError"
	},
	CustomerJourney:{
		customerOrderIndex:"Int",
		daysToConversion:"Int",
		firstVisit:"CustomerVisit",
		lastVisit:"CustomerVisit",
		moments:"CustomerMoment"
	},
	CustomerJourneySummary:{
		customerOrderIndex:"Int",
		daysToConversion:"Int",
		firstVisit:"CustomerVisit",
		lastVisit:"CustomerVisit",
		moments:"CustomerMomentConnection",
		momentsCount:"Count",
		ready:"Boolean"
	},
	CustomerMergeError:{
		errorFields:"CustomerMergeErrorFieldType",
		message:"String"
	},
	CustomerMergePayload:{
		job:"Job",
		resultingCustomerId:"ID",
		userErrors:"CustomerMergeUserError"
	},
	CustomerMergePreview:{
		alternateFields:"CustomerMergePreviewAlternateFields",
		blockingFields:"CustomerMergePreviewBlockingFields",
		customerMergeErrors:"CustomerMergeError",
		defaultFields:"CustomerMergePreviewDefaultFields",
		resultingCustomerId:"ID"
	},
	CustomerMergePreviewAlternateFields:{
		defaultAddress:"MailingAddress",
		email:"CustomerEmailAddress",
		firstName:"String",
		lastName:"String",
		phoneNumber:"CustomerPhoneNumber"
	},
	CustomerMergePreviewBlockingFields:{
		note:"String",
		tags:"String"
	},
	CustomerMergePreviewDefaultFields:{
		addresses:"MailingAddressConnection",
		defaultAddress:"MailingAddress",
		discountNodeCount:"UnsignedInt64",
		discountNodes:"DiscountNodeConnection",
		displayName:"String",
		draftOrderCount:"UnsignedInt64",
		draftOrders:"DraftOrderConnection",
		email:"CustomerEmailAddress",
		firstName:"String",
		giftCardCount:"UnsignedInt64",
		giftCards:"GiftCardConnection",
		lastName:"String",
		metafieldCount:"UnsignedInt64",
		note:"String",
		orderCount:"UnsignedInt64",
		orders:"OrderConnection",
		phoneNumber:"CustomerPhoneNumber",
		tags:"String"
	},
	CustomerMergeRequest:{
		customerMergeErrors:"CustomerMergeError",
		jobId:"ID",
		resultingCustomerId:"ID",
		status:"CustomerMergeRequestStatus"
	},
	CustomerMergeUserError:{
		code:"CustomerMergeErrorCode",
		field:"String",
		message:"String"
	},
	CustomerMergeable:{
		errorFields:"CustomerMergeErrorFieldType",
		isMergeable:"Boolean",
		mergeInProgress:"CustomerMergeRequest",
		reason:"String"
	},
	CustomerMoment:{
		"...on CustomerVisit": "CustomerVisit",
		occurredAt:"DateTime"
	},
	CustomerMomentConnection:{
		edges:"CustomerMomentEdge",
		nodes:"CustomerMoment",
		pageInfo:"PageInfo"
	},
	CustomerMomentEdge:{
		cursor:"String",
		node:"CustomerMoment"
	},
	CustomerPaymentInstrument:{
		"...on CustomerCreditCard":"CustomerCreditCard",
		"...on CustomerPaypalBillingAgreement":"CustomerPaypalBillingAgreement",
		"...on CustomerShopPayAgreement":"CustomerShopPayAgreement"
	},
	CustomerPaymentInstrumentBillingAddress:{
		address1:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		name:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	CustomerPaymentMethod:{
		customer:"Customer",
		id:"ID",
		instrument:"CustomerPaymentInstrument",
		mandates:"PaymentMandateResourceConnection",
		revokedAt:"DateTime",
		revokedReason:"CustomerPaymentMethodRevocationReason",
		subscriptionContracts:"SubscriptionContractConnection"
	},
	CustomerPaymentMethodConnection:{
		edges:"CustomerPaymentMethodEdge",
		nodes:"CustomerPaymentMethod",
		pageInfo:"PageInfo"
	},
	CustomerPaymentMethodCreateFromDuplicationDataPayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodCreateFromDuplicationDataUserError"
	},
	CustomerPaymentMethodCreateFromDuplicationDataUserError:{
		code:"CustomerPaymentMethodCreateFromDuplicationDataUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodCreditCardCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		processing:"Boolean",
		userErrors:"UserError"
	},
	CustomerPaymentMethodCreditCardUpdatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		processing:"Boolean",
		userErrors:"UserError"
	},
	CustomerPaymentMethodEdge:{
		cursor:"String",
		node:"CustomerPaymentMethod"
	},
	CustomerPaymentMethodGetDuplicationDataPayload:{
		encryptedDuplicationData:"String",
		userErrors:"CustomerPaymentMethodGetDuplicationDataUserError"
	},
	CustomerPaymentMethodGetDuplicationDataUserError:{
		code:"CustomerPaymentMethodGetDuplicationDataUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodGetUpdateUrlPayload:{
		updatePaymentMethodUrl:"URL",
		userErrors:"CustomerPaymentMethodGetUpdateUrlUserError"
	},
	CustomerPaymentMethodGetUpdateUrlUserError:{
		code:"CustomerPaymentMethodGetUpdateUrlUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodPaypalBillingAgreementCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodUserError"
	},
	CustomerPaymentMethodPaypalBillingAgreementUpdatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodUserError"
	},
	CustomerPaymentMethodRemoteCreatePayload:{
		customerPaymentMethod:"CustomerPaymentMethod",
		userErrors:"CustomerPaymentMethodRemoteUserError"
	},
	CustomerPaymentMethodRemoteUserError:{
		code:"CustomerPaymentMethodRemoteUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaymentMethodRevokePayload:{
		revokedCustomerPaymentMethodId:"ID",
		userErrors:"UserError"
	},
	CustomerPaymentMethodSendUpdateEmailPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerPaymentMethodUserError:{
		code:"CustomerPaymentMethodUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerPaypalBillingAgreement:{
		billingAddress:"CustomerPaymentInstrumentBillingAddress",
		inactive:"Boolean",
		isRevocable:"Boolean",
		paypalAccountEmail:"String"
	},
	CustomerPhoneNumber:{
		marketingCollectedFrom:"CustomerConsentCollectedFrom",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerSmsMarketingState",
		marketingUpdatedAt:"DateTime",
		phoneNumber:"String",
		sourceLocation:"Location"
	},
	CustomerRemoveTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerReplaceTaxExemptionsPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerRequestDataErasurePayload:{
		customerId:"ID",
		userErrors:"CustomerRequestDataErasureUserError"
	},
	CustomerRequestDataErasureUserError:{
		code:"CustomerRequestDataErasureErrorCode",
		field:"String",
		message:"String"
	},
	CustomerSegmentMember:{
		amountSpent:"MoneyV2",
		defaultAddress:"MailingAddress",
		defaultEmailAddress:"CustomerEmailAddress",
		defaultPhoneNumber:"CustomerPhoneNumber",
		displayName:"String",
		firstName:"String",
		id:"ID",
		lastName:"String",
		lastOrderId:"ID",
		mergeable:"CustomerMergeable",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		note:"String",
		numberOfOrders:"UnsignedInt64"
	},
	CustomerSegmentMemberConnection:{
		edges:"CustomerSegmentMemberEdge",
		pageInfo:"PageInfo",
		statistics:"SegmentStatistics",
		totalCount:"Int"
	},
	CustomerSegmentMemberEdge:{
		cursor:"String",
		node:"CustomerSegmentMember"
	},
	CustomerSegmentMembersQuery:{
		currentCount:"Int",
		done:"Boolean",
		id:"ID"
	},
	CustomerSegmentMembersQueryCreatePayload:{
		customerSegmentMembersQuery:"CustomerSegmentMembersQuery",
		userErrors:"CustomerSegmentMembersQueryUserError"
	},
	CustomerSegmentMembersQueryUserError:{
		code:"CustomerSegmentMembersQueryUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerSendAccountInviteEmailPayload:{
		customer:"Customer",
		userErrors:"CustomerSendAccountInviteEmailUserError"
	},
	CustomerSendAccountInviteEmailUserError:{
		code:"CustomerSendAccountInviteEmailUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerSetPayload:{
		customer:"Customer",
		userErrors:"CustomerSetUserError"
	},
	CustomerSetUserError:{
		code:"CustomerSetUserErrorCode",
		field:"String",
		message:"String"
	},
	CustomerShopPayAgreement:{
		billingAddress:"CustomerCreditCardBillingAddress",
		expiresSoon:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		inactive:"Boolean",
		isRevocable:"Boolean",
		lastDigits:"String",
		maskedNumber:"String",
		name:"String"
	},
	CustomerSmsMarketingConsentError:{
		code:"CustomerSmsMarketingConsentErrorCode",
		field:"String",
		message:"String"
	},
	CustomerSmsMarketingConsentState:{
		consentCollectedFrom:"CustomerConsentCollectedFrom",
		consentUpdatedAt:"DateTime",
		marketingOptInLevel:"CustomerMarketingOptInLevel",
		marketingState:"CustomerSmsMarketingState",
		sourceLocation:"Location"
	},
	CustomerSmsMarketingConsentUpdatePayload:{
		customer:"Customer",
		userErrors:"CustomerSmsMarketingConsentError"
	},
	CustomerStatistics:{
		predictedSpendTier:"CustomerPredictedSpendTier",
		rfmGroup:"CustomerRfmGroup"
	},
	CustomerUpdateDefaultAddressPayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerUpdatePayload:{
		customer:"Customer",
		userErrors:"UserError"
	},
	CustomerVisit:{
		id:"ID",
		landingPage:"URL",
		landingPageHtml:"HTML",
		marketingEvent:"MarketingEvent",
		occurredAt:"DateTime",
		referralCode:"String",
		referralInfoHtml:"FormattedString",
		referrerUrl:"URL",
		source:"String",
		sourceDescription:"String",
		sourceType:"MarketingTactic",
		utmParameters:"UTMParameters"
	},
	CustomerVisitProductInfo:{
		product:"Product",
		quantity:"Int",
		variant:"ProductVariant"
	},
	CustomerVisitProductInfoConnection:{
		edges:"CustomerVisitProductInfoEdge",
		nodes:"CustomerVisitProductInfo",
		pageInfo:"PageInfo"
	},
	CustomerVisitProductInfoEdge:{
		cursor:"String",
		node:"CustomerVisitProductInfo"
	},
	DataSaleOptOutPage:{
		autoManaged:"Boolean"
	},
	DataSaleOptOutPayload:{
		customerId:"ID",
		userErrors:"DataSaleOptOutUserError"
	},
	DataSaleOptOutUserError:{
		code:"DataSaleOptOutUserErrorCode",
		field:"String",
		message:"String"
	},
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	Decimal: `scalar.Decimal` as const,
	DelegateAccessToken:{
		accessScopes:"String",
		accessToken:"String",
		createdAt:"DateTime"
	},
	DelegateAccessTokenCreatePayload:{
		delegateAccessToken:"DelegateAccessToken",
		shop:"Shop",
		userErrors:"DelegateAccessTokenCreateUserError"
	},
	DelegateAccessTokenCreateUserError:{
		code:"DelegateAccessTokenCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	DelegateAccessTokenDestroyPayload:{
		shop:"Shop",
		status:"Boolean",
		userErrors:"DelegateAccessTokenDestroyUserError"
	},
	DelegateAccessTokenDestroyUserError:{
		code:"DelegateAccessTokenDestroyUserErrorCode",
		field:"String",
		message:"String"
	},
	DeletionEvent:{
		occurredAt:"DateTime",
		subjectId:"ID",
		subjectType:"DeletionEventSubjectType"
	},
	DeletionEventConnection:{
		edges:"DeletionEventEdge",
		nodes:"DeletionEvent",
		pageInfo:"PageInfo"
	},
	DeletionEventEdge:{
		cursor:"String",
		node:"DeletionEvent"
	},
	DeliveryAvailableService:{
		countries:"DeliveryCountryCodesOrRestOfWorld",
		name:"String"
	},
	DeliveryBrandedPromise:{
		handle:"String",
		name:"String"
	},
	DeliveryCarrierService:{
		active:"Boolean",
		availableServicesForCountries:"DeliveryAvailableService",
		callbackUrl:"URL",
		formattedName:"String",
		icon:"Image",
		id:"ID",
		name:"String",
		supportsServiceDiscovery:"Boolean"
	},
	DeliveryCarrierServiceAndLocations:{
		carrierService:"DeliveryCarrierService",
		locations:"Location"
	},
	DeliveryCarrierServiceConnection:{
		edges:"DeliveryCarrierServiceEdge",
		nodes:"DeliveryCarrierService",
		pageInfo:"PageInfo"
	},
	DeliveryCarrierServiceEdge:{
		cursor:"String",
		node:"DeliveryCarrierService"
	},
	DeliveryCondition:{
		conditionCriteria:"DeliveryConditionCriteria",
		field:"DeliveryConditionField",
		id:"ID",
		operator:"DeliveryConditionOperator"
	},
	DeliveryConditionCriteria:{
		"...on MoneyV2":"MoneyV2",
		"...on Weight":"Weight"
	},
	DeliveryCountry:{
		code:"DeliveryCountryCodeOrRestOfWorld",
		id:"ID",
		name:"String",
		provinces:"DeliveryProvince",
		translatedName:"String"
	},
	DeliveryCountryAndZone:{
		country:"DeliveryCountry",
		zone:"String"
	},
	DeliveryCountryCodeOrRestOfWorld:{
		countryCode:"CountryCode",
		restOfWorld:"Boolean"
	},
	DeliveryCountryCodesOrRestOfWorld:{
		countryCodes:"CountryCode",
		restOfWorld:"Boolean"
	},
	DeliveryCustomization:{
		enabled:"Boolean",
		errorHistory:"FunctionsErrorHistory",
		functionId:"String",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		shopifyFunction:"ShopifyFunction",
		title:"String"
	},
	DeliveryCustomizationActivationPayload:{
		ids:"String",
		userErrors:"DeliveryCustomizationError"
	},
	DeliveryCustomizationConnection:{
		edges:"DeliveryCustomizationEdge",
		nodes:"DeliveryCustomization",
		pageInfo:"PageInfo"
	},
	DeliveryCustomizationCreatePayload:{
		deliveryCustomization:"DeliveryCustomization",
		userErrors:"DeliveryCustomizationError"
	},
	DeliveryCustomizationDeletePayload:{
		deletedId:"ID",
		userErrors:"DeliveryCustomizationError"
	},
	DeliveryCustomizationEdge:{
		cursor:"String",
		node:"DeliveryCustomization"
	},
	DeliveryCustomizationError:{
		code:"DeliveryCustomizationErrorCode",
		field:"String",
		message:"String"
	},
	DeliveryCustomizationUpdatePayload:{
		deliveryCustomization:"DeliveryCustomization",
		userErrors:"DeliveryCustomizationError"
	},
	DeliveryLegacyModeBlocked:{
		blocked:"Boolean",
		reasons:"DeliveryLegacyModeBlockedReason"
	},
	DeliveryLocalPickupSettings:{
		instructions:"String",
		pickupTime:"DeliveryLocalPickupTime"
	},
	DeliveryLocationGroup:{
		id:"ID",
		locations:"LocationConnection",
		locationsCount:"Count"
	},
	DeliveryLocationGroupZone:{
		methodDefinitionCounts:"DeliveryMethodDefinitionCounts",
		methodDefinitions:"DeliveryMethodDefinitionConnection",
		zone:"DeliveryZone"
	},
	DeliveryLocationGroupZoneConnection:{
		edges:"DeliveryLocationGroupZoneEdge",
		nodes:"DeliveryLocationGroupZone",
		pageInfo:"PageInfo"
	},
	DeliveryLocationGroupZoneEdge:{
		cursor:"String",
		node:"DeliveryLocationGroupZone"
	},
	DeliveryLocationLocalPickupSettingsError:{
		code:"DeliveryLocationLocalPickupSettingsErrorCode",
		field:"String",
		message:"String"
	},
	DeliveryMethod:{
		additionalInformation:"DeliveryMethodAdditionalInformation",
		brandedPromise:"DeliveryBrandedPromise",
		id:"ID",
		maxDeliveryDateTime:"DateTime",
		methodType:"DeliveryMethodType",
		minDeliveryDateTime:"DateTime",
		presentedName:"String",
		serviceCode:"String",
		sourceReference:"String"
	},
	DeliveryMethodAdditionalInformation:{
		instructions:"String",
		phone:"String"
	},
	DeliveryMethodDefinition:{
		active:"Boolean",
		description:"String",
		id:"ID",
		methodConditions:"DeliveryCondition",
		name:"String",
		rateProvider:"DeliveryRateProvider"
	},
	DeliveryMethodDefinitionConnection:{
		edges:"DeliveryMethodDefinitionEdge",
		nodes:"DeliveryMethodDefinition",
		pageInfo:"PageInfo"
	},
	DeliveryMethodDefinitionCounts:{
		participantDefinitionsCount:"Int",
		rateDefinitionsCount:"Int"
	},
	DeliveryMethodDefinitionEdge:{
		cursor:"String",
		node:"DeliveryMethodDefinition"
	},
	DeliveryParticipant:{
		adaptToNewServicesFlag:"Boolean",
		carrierService:"DeliveryCarrierService",
		fixedFee:"MoneyV2",
		id:"ID",
		participantServices:"DeliveryParticipantService",
		percentageOfRateFee:"Float"
	},
	DeliveryParticipantService:{
		active:"Boolean",
		name:"String"
	},
	DeliveryProductVariantsCount:{
		capped:"Boolean",
		count:"Int"
	},
	DeliveryProfile:{
		activeMethodDefinitionsCount:"Int",
		default:"Boolean",
		id:"ID",
		legacyMode:"Boolean",
		locationsWithoutRatesCount:"Int",
		name:"String",
		originLocationCount:"Int",
		productVariantsCount:"Count",
		productVariantsCountV2:"DeliveryProductVariantsCount",
		profileItems:"DeliveryProfileItemConnection",
		profileLocationGroups:"DeliveryProfileLocationGroup",
		sellingPlanGroups:"SellingPlanGroupConnection",
		unassignedLocations:"Location",
		unassignedLocationsPaginated:"LocationConnection",
		version:"Int",
		zoneCountryCount:"Int"
	},
	DeliveryProfileConnection:{
		edges:"DeliveryProfileEdge",
		nodes:"DeliveryProfile",
		pageInfo:"PageInfo"
	},
	DeliveryProfileCreatePayload:{
		profile:"DeliveryProfile",
		userErrors:"UserError"
	},
	DeliveryProfileEdge:{
		cursor:"String",
		node:"DeliveryProfile"
	},
	DeliveryProfileItem:{
		id:"ID",
		product:"Product",
		variants:"ProductVariantConnection"
	},
	DeliveryProfileItemConnection:{
		edges:"DeliveryProfileItemEdge",
		nodes:"DeliveryProfileItem",
		pageInfo:"PageInfo"
	},
	DeliveryProfileItemEdge:{
		cursor:"String",
		node:"DeliveryProfileItem"
	},
	DeliveryProfileLocationGroup:{
		countriesInAnyZone:"DeliveryCountryAndZone",
		locationGroup:"DeliveryLocationGroup",
		locationGroupZones:"DeliveryLocationGroupZoneConnection"
	},
	DeliveryProfileRemovePayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DeliveryProfileUpdatePayload:{
		profile:"DeliveryProfile",
		userErrors:"UserError"
	},
	DeliveryPromiseParticipant:{
		id:"ID",
		owner:"DeliveryPromiseParticipantOwner",
		ownerType:"DeliveryPromiseParticipantOwnerType"
	},
	DeliveryPromiseParticipantConnection:{
		edges:"DeliveryPromiseParticipantEdge",
		nodes:"DeliveryPromiseParticipant",
		pageInfo:"PageInfo"
	},
	DeliveryPromiseParticipantEdge:{
		cursor:"String",
		node:"DeliveryPromiseParticipant"
	},
	DeliveryPromiseParticipantOwner:{
		"...on ProductVariant":"ProductVariant"
	},
	DeliveryPromiseParticipantsUpdatePayload:{
		promiseParticipants:"DeliveryPromiseParticipant",
		userErrors:"UserError"
	},
	DeliveryPromiseProvider:{
		active:"Boolean",
		fulfillmentDelay:"Int",
		id:"ID",
		location:"Location",
		timeZone:"String"
	},
	DeliveryPromiseProviderUpsertPayload:{
		deliveryPromiseProvider:"DeliveryPromiseProvider",
		userErrors:"DeliveryPromiseProviderUpsertUserError"
	},
	DeliveryPromiseProviderUpsertUserError:{
		code:"DeliveryPromiseProviderUpsertUserErrorCode",
		field:"String",
		message:"String"
	},
	DeliveryPromiseSetting:{
		deliveryDatesEnabled:"Boolean",
		processingTime:"String"
	},
	DeliveryProvince:{
		code:"String",
		id:"ID",
		name:"String",
		translatedName:"String"
	},
	DeliveryRateDefinition:{
		id:"ID",
		price:"MoneyV2"
	},
	DeliveryRateProvider:{
		"...on DeliveryParticipant":"DeliveryParticipant",
		"...on DeliveryRateDefinition":"DeliveryRateDefinition"
	},
	DeliverySetting:{
		legacyModeBlocked:"DeliveryLegacyModeBlocked",
		legacyModeProfiles:"Boolean"
	},
	DeliverySettingUpdatePayload:{
		setting:"DeliverySetting",
		userErrors:"UserError"
	},
	DeliveryShippingOriginAssignPayload:{
		userErrors:"UserError"
	},
	DeliveryZone:{
		countries:"DeliveryCountry",
		id:"ID",
		name:"String"
	},
	DepositConfiguration:{
		"...on DepositPercentage":"DepositPercentage"
	},
	DepositPercentage:{
		percentage:"Float"
	},
	Discount:{
		"...on DiscountAutomaticApp":"DiscountAutomaticApp",
		"...on DiscountAutomaticBasic":"DiscountAutomaticBasic",
		"...on DiscountAutomaticBxgy":"DiscountAutomaticBxgy",
		"...on DiscountAutomaticFreeShipping":"DiscountAutomaticFreeShipping",
		"...on DiscountCodeApp":"DiscountCodeApp",
		"...on DiscountCodeBasic":"DiscountCodeBasic",
		"...on DiscountCodeBxgy":"DiscountCodeBxgy",
		"...on DiscountCodeFreeShipping":"DiscountCodeFreeShipping"
	},
	DiscountAllocation:{
		allocatedAmount:"MoneyV2",
		allocatedAmountSet:"MoneyBag",
		discountApplication:"DiscountApplication"
	},
	DiscountAllocationConnection:{
		edges:"DiscountAllocationEdge",
		nodes:"DiscountAllocation",
		pageInfo:"PageInfo"
	},
	DiscountAllocationEdge:{
		cursor:"String",
		node:"DiscountAllocation"
	},
	DiscountAmount:{
		amount:"MoneyV2",
		appliesOnEachItem:"Boolean"
	},
	DiscountApplication:{
		"...on AutomaticDiscountApplication": "AutomaticDiscountApplication",
		"...on DiscountCodeApplication": "DiscountCodeApplication",
		"...on ManualDiscountApplication": "ManualDiscountApplication",
		"...on ScriptDiscountApplication": "ScriptDiscountApplication",
		allocationMethod:"DiscountApplicationAllocationMethod",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	DiscountApplicationConnection:{
		edges:"DiscountApplicationEdge",
		nodes:"DiscountApplication",
		pageInfo:"PageInfo"
	},
	DiscountApplicationEdge:{
		cursor:"String",
		node:"DiscountApplication"
	},
	DiscountAutomatic:{
		"...on DiscountAutomaticApp":"DiscountAutomaticApp",
		"...on DiscountAutomaticBasic":"DiscountAutomaticBasic",
		"...on DiscountAutomaticBxgy":"DiscountAutomaticBxgy",
		"...on DiscountAutomaticFreeShipping":"DiscountAutomaticFreeShipping"
	},
	DiscountAutomaticActivatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticApp:{
		appDiscountType:"AppDiscountType",
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		discountClass:"DiscountClass",
		discountClasses:"DiscountClass",
		discountId:"ID",
		endsAt:"DateTime",
		errorHistory:"FunctionsErrorHistory",
		recurringCycleLimit:"Int",
		startsAt:"DateTime",
		status:"DiscountStatus",
		title:"String",
		updatedAt:"DateTime"
	},
	DiscountAutomaticAppCreatePayload:{
		automaticAppDiscount:"DiscountAutomaticApp",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticAppUpdatePayload:{
		automaticAppDiscount:"DiscountAutomaticApp",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBasic:{
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerGets:"DiscountCustomerGets",
		discountClass:"MerchandiseDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		updatedAt:"DateTime",
		usageCount:"Int"
	},
	DiscountAutomaticBasicCreatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBasicUpdatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBxgy:{
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerBuys:"DiscountCustomerBuys",
		customerGets:"DiscountCustomerGets",
		discountClass:"MerchandiseDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		events:"EventConnection",
		id:"ID",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		updatedAt:"DateTime",
		usageCount:"Int",
		usesPerOrderLimit:"Int"
	},
	DiscountAutomaticBxgyCreatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticBxgyUpdatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticConnection:{
		edges:"DiscountAutomaticEdge",
		nodes:"DiscountAutomatic",
		pageInfo:"PageInfo"
	},
	DiscountAutomaticDeactivatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticDeletePayload:{
		deletedAutomaticDiscountId:"ID",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticEdge:{
		cursor:"String",
		node:"DiscountAutomatic"
	},
	DiscountAutomaticFreeShipping:{
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		asyncUsageCount:"Int",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		destinationSelection:"DiscountShippingDestinationSelection",
		discountClass:"ShippingDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		maximumShippingPrice:"MoneyV2",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		updatedAt:"DateTime"
	},
	DiscountAutomaticFreeShippingCreatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticFreeShippingUpdatePayload:{
		automaticDiscountNode:"DiscountAutomaticNode",
		userErrors:"DiscountUserError"
	},
	DiscountAutomaticNode:{
		automaticDiscount:"DiscountAutomatic",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection"
	},
	DiscountAutomaticNodeConnection:{
		edges:"DiscountAutomaticNodeEdge",
		nodes:"DiscountAutomaticNode",
		pageInfo:"PageInfo"
	},
	DiscountAutomaticNodeEdge:{
		cursor:"String",
		node:"DiscountAutomaticNode"
	},
	DiscountBuyerSelectionAll:{
		all:"DiscountBuyerSelection"
	},
	DiscountCode:{
		"...on DiscountCodeApp":"DiscountCodeApp",
		"...on DiscountCodeBasic":"DiscountCodeBasic",
		"...on DiscountCodeBxgy":"DiscountCodeBxgy",
		"...on DiscountCodeFreeShipping":"DiscountCodeFreeShipping"
	},
	DiscountCodeActivatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeApp:{
		appDiscountType:"AppDiscountType",
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		codesCount:"Count",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"DiscountClass",
		discountClasses:"DiscountClass",
		discountId:"ID",
		endsAt:"DateTime",
		errorHistory:"FunctionsErrorHistory",
		hasTimelineComment:"Boolean",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		startsAt:"DateTime",
		status:"DiscountStatus",
		title:"String",
		totalSales:"MoneyV2",
		updatedAt:"DateTime",
		usageLimit:"Int"
	},
	DiscountCodeAppCreatePayload:{
		codeAppDiscount:"DiscountCodeApp",
		userErrors:"DiscountUserError"
	},
	DiscountCodeAppUpdatePayload:{
		codeAppDiscount:"DiscountCodeApp",
		userErrors:"DiscountUserError"
	},
	DiscountCodeApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		code:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		value:"PricingValue"
	},
	DiscountCodeBasic:{
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		codesCount:"Count",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerGets:"DiscountCustomerGets",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"MerchandiseDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		updatedAt:"DateTime",
		usageLimit:"Int"
	},
	DiscountCodeBasicCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBasicUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkActivatePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkDeactivatePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBxgy:{
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		codesCount:"Count",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerBuys:"DiscountCustomerBuys",
		customerGets:"DiscountCustomerGets",
		customerSelection:"DiscountCustomerSelection",
		discountClass:"MerchandiseDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		shareableUrls:"DiscountShareableUrl",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		updatedAt:"DateTime",
		usageLimit:"Int",
		usesPerOrderLimit:"Int"
	},
	DiscountCodeBxgyCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeBxgyUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeDeactivatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeDeletePayload:{
		deletedCodeDiscountId:"ID",
		userErrors:"DiscountUserError"
	},
	DiscountCodeFreeShipping:{
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		appliesOncePerCustomer:"Boolean",
		asyncUsageCount:"Int",
		codes:"DiscountRedeemCodeConnection",
		codesCount:"Count",
		combinesWith:"DiscountCombinesWith",
		context:"DiscountContext",
		createdAt:"DateTime",
		customerSelection:"DiscountCustomerSelection",
		destinationSelection:"DiscountShippingDestinationSelection",
		discountClass:"ShippingDiscountClass",
		discountClasses:"DiscountClass",
		endsAt:"DateTime",
		hasTimelineComment:"Boolean",
		maximumShippingPrice:"MoneyV2",
		minimumRequirement:"DiscountMinimumRequirement",
		recurringCycleLimit:"Int",
		shareableUrls:"DiscountShareableUrl",
		shortSummary:"String",
		startsAt:"DateTime",
		status:"DiscountStatus",
		summary:"String",
		title:"String",
		totalSales:"MoneyV2",
		updatedAt:"DateTime",
		usageLimit:"Int"
	},
	DiscountCodeFreeShippingCreatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeFreeShippingUpdatePayload:{
		codeDiscountNode:"DiscountCodeNode",
		userErrors:"DiscountUserError"
	},
	DiscountCodeNode:{
		codeDiscount:"DiscountCode",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection"
	},
	DiscountCodeNodeConnection:{
		edges:"DiscountCodeNodeEdge",
		nodes:"DiscountCodeNode",
		pageInfo:"PageInfo"
	},
	DiscountCodeNodeEdge:{
		cursor:"String",
		node:"DiscountCodeNode"
	},
	DiscountCodeRedeemCodeBulkDeletePayload:{
		job:"Job",
		userErrors:"DiscountUserError"
	},
	DiscountCollections:{
		collections:"CollectionConnection"
	},
	DiscountCombinesWith:{
		orderDiscounts:"Boolean",
		productDiscounts:"Boolean",
		shippingDiscounts:"Boolean"
	},
	DiscountContext:{
		"...on DiscountBuyerSelectionAll":"DiscountBuyerSelectionAll",
		"...on DiscountCustomerSegments":"DiscountCustomerSegments",
		"...on DiscountCustomers":"DiscountCustomers"
	},
	DiscountCountries:{
		countries:"CountryCode",
		includeRestOfWorld:"Boolean"
	},
	DiscountCountryAll:{
		allCountries:"Boolean"
	},
	DiscountCustomerAll:{
		allCustomers:"Boolean"
	},
	DiscountCustomerBuys:{
		isOneTimePurchase:"Boolean",
		isSubscription:"Boolean",
		items:"DiscountItems",
		value:"DiscountCustomerBuysValue"
	},
	DiscountCustomerBuysValue:{
		"...on DiscountPurchaseAmount":"DiscountPurchaseAmount",
		"...on DiscountQuantity":"DiscountQuantity"
	},
	DiscountCustomerGets:{
		appliesOnOneTimePurchase:"Boolean",
		appliesOnSubscription:"Boolean",
		items:"DiscountItems",
		value:"DiscountCustomerGetsValue"
	},
	DiscountCustomerGetsValue:{
		"...on DiscountAmount":"DiscountAmount",
		"...on DiscountOnQuantity":"DiscountOnQuantity",
		"...on DiscountPercentage":"DiscountPercentage"
	},
	DiscountCustomerSegments:{
		segments:"Segment"
	},
	DiscountCustomerSelection:{
		"...on DiscountCustomerAll":"DiscountCustomerAll",
		"...on DiscountCustomerSegments":"DiscountCustomerSegments",
		"...on DiscountCustomers":"DiscountCustomers"
	},
	DiscountCustomers:{
		customers:"Customer"
	},
	DiscountEffect:{
		"...on DiscountAmount":"DiscountAmount",
		"...on DiscountPercentage":"DiscountPercentage"
	},
	DiscountItems:{
		"...on AllDiscountItems":"AllDiscountItems",
		"...on DiscountCollections":"DiscountCollections",
		"...on DiscountProducts":"DiscountProducts"
	},
	DiscountMinimumQuantity:{
		greaterThanOrEqualToQuantity:"UnsignedInt64"
	},
	DiscountMinimumRequirement:{
		"...on DiscountMinimumQuantity":"DiscountMinimumQuantity",
		"...on DiscountMinimumSubtotal":"DiscountMinimumSubtotal"
	},
	DiscountMinimumSubtotal:{
		greaterThanOrEqualToSubtotal:"MoneyV2"
	},
	DiscountNode:{
		discount:"Discount",
		events:"EventConnection",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection"
	},
	DiscountNodeConnection:{
		edges:"DiscountNodeEdge",
		nodes:"DiscountNode",
		pageInfo:"PageInfo"
	},
	DiscountNodeEdge:{
		cursor:"String",
		node:"DiscountNode"
	},
	DiscountOnQuantity:{
		effect:"DiscountEffect",
		quantity:"DiscountQuantity"
	},
	DiscountPercentage:{
		percentage:"Float"
	},
	DiscountProducts:{
		productVariants:"ProductVariantConnection",
		products:"ProductConnection"
	},
	DiscountPurchaseAmount:{
		amount:"Decimal"
	},
	DiscountQuantity:{
		quantity:"UnsignedInt64"
	},
	DiscountRedeemCode:{
		asyncUsageCount:"Int",
		code:"String",
		createdBy:"App",
		id:"ID"
	},
	DiscountRedeemCodeBulkAddPayload:{
		bulkCreation:"DiscountRedeemCodeBulkCreation",
		userErrors:"DiscountUserError"
	},
	DiscountRedeemCodeBulkCreation:{
		codes:"DiscountRedeemCodeBulkCreationCodeConnection",
		codesCount:"Int",
		createdAt:"DateTime",
		discountCode:"DiscountCodeNode",
		done:"Boolean",
		failedCount:"Int",
		id:"ID",
		importedCount:"Int"
	},
	DiscountRedeemCodeBulkCreationCode:{
		code:"String",
		discountRedeemCode:"DiscountRedeemCode",
		errors:"DiscountUserError"
	},
	DiscountRedeemCodeBulkCreationCodeConnection:{
		edges:"DiscountRedeemCodeBulkCreationCodeEdge",
		nodes:"DiscountRedeemCodeBulkCreationCode",
		pageInfo:"PageInfo"
	},
	DiscountRedeemCodeBulkCreationCodeEdge:{
		cursor:"String",
		node:"DiscountRedeemCodeBulkCreationCode"
	},
	DiscountRedeemCodeConnection:{
		edges:"DiscountRedeemCodeEdge",
		nodes:"DiscountRedeemCode",
		pageInfo:"PageInfo"
	},
	DiscountRedeemCodeEdge:{
		cursor:"String",
		node:"DiscountRedeemCode"
	},
	DiscountShareableUrl:{
		targetItemImage:"Image",
		targetType:"DiscountShareableUrlTargetType",
		title:"String",
		url:"URL"
	},
	DiscountShippingDestinationSelection:{
		"...on DiscountCountries":"DiscountCountries",
		"...on DiscountCountryAll":"DiscountCountryAll"
	},
	DiscountUserError:{
		code:"DiscountErrorCode",
		extraInfo:"String",
		field:"String",
		message:"String"
	},
	DisplayableError:{
		"...on AbandonmentEmailStateUpdateUserError": "AbandonmentEmailStateUpdateUserError",
		"...on AbandonmentUpdateActivitiesDeliveryStatusesUserError": "AbandonmentUpdateActivitiesDeliveryStatusesUserError",
		"...on AppRevokeAccessScopesAppRevokeScopeError": "AppRevokeAccessScopesAppRevokeScopeError",
		"...on AppSubscriptionTrialExtendUserError": "AppSubscriptionTrialExtendUserError",
		"...on AppUninstallAppUninstallError": "AppUninstallAppUninstallError",
		"...on ArticleCreateUserError": "ArticleCreateUserError",
		"...on ArticleDeleteUserError": "ArticleDeleteUserError",
		"...on ArticleUpdateUserError": "ArticleUpdateUserError",
		"...on BillingAttemptUserError": "BillingAttemptUserError",
		"...on BlogCreateUserError": "BlogCreateUserError",
		"...on BlogDeleteUserError": "BlogDeleteUserError",
		"...on BlogUpdateUserError": "BlogUpdateUserError",
		"...on BulkMutationUserError": "BulkMutationUserError",
		"...on BulkOperationUserError": "BulkOperationUserError",
		"...on BulkProductResourceFeedbackCreateUserError": "BulkProductResourceFeedbackCreateUserError",
		"...on BusinessCustomerUserError": "BusinessCustomerUserError",
		"...on CarrierServiceCreateUserError": "CarrierServiceCreateUserError",
		"...on CarrierServiceDeleteUserError": "CarrierServiceDeleteUserError",
		"...on CarrierServiceUpdateUserError": "CarrierServiceUpdateUserError",
		"...on CartTransformCreateUserError": "CartTransformCreateUserError",
		"...on CartTransformDeleteUserError": "CartTransformDeleteUserError",
		"...on CatalogUserError": "CatalogUserError",
		"...on CheckoutBrandingUpsertUserError": "CheckoutBrandingUpsertUserError",
		"...on CollectionAddProductsV2UserError": "CollectionAddProductsV2UserError",
		"...on CollectionReorderProductsUserError": "CollectionReorderProductsUserError",
		"...on CombinedListingUpdateUserError": "CombinedListingUpdateUserError",
		"...on CommentApproveUserError": "CommentApproveUserError",
		"...on CommentDeleteUserError": "CommentDeleteUserError",
		"...on CommentNotSpamUserError": "CommentNotSpamUserError",
		"...on CommentSpamUserError": "CommentSpamUserError",
		"...on ConsentPolicyError": "ConsentPolicyError",
		"...on CustomerCancelDataErasureUserError": "CustomerCancelDataErasureUserError",
		"...on CustomerEmailMarketingConsentUpdateUserError": "CustomerEmailMarketingConsentUpdateUserError",
		"...on CustomerMergeUserError": "CustomerMergeUserError",
		"...on CustomerPaymentMethodCreateFromDuplicationDataUserError": "CustomerPaymentMethodCreateFromDuplicationDataUserError",
		"...on CustomerPaymentMethodGetDuplicationDataUserError": "CustomerPaymentMethodGetDuplicationDataUserError",
		"...on CustomerPaymentMethodGetUpdateUrlUserError": "CustomerPaymentMethodGetUpdateUrlUserError",
		"...on CustomerPaymentMethodRemoteUserError": "CustomerPaymentMethodRemoteUserError",
		"...on CustomerPaymentMethodUserError": "CustomerPaymentMethodUserError",
		"...on CustomerRequestDataErasureUserError": "CustomerRequestDataErasureUserError",
		"...on CustomerSegmentMembersQueryUserError": "CustomerSegmentMembersQueryUserError",
		"...on CustomerSendAccountInviteEmailUserError": "CustomerSendAccountInviteEmailUserError",
		"...on CustomerSetUserError": "CustomerSetUserError",
		"...on CustomerSmsMarketingConsentError": "CustomerSmsMarketingConsentError",
		"...on DataSaleOptOutUserError": "DataSaleOptOutUserError",
		"...on DelegateAccessTokenCreateUserError": "DelegateAccessTokenCreateUserError",
		"...on DelegateAccessTokenDestroyUserError": "DelegateAccessTokenDestroyUserError",
		"...on DeliveryCustomizationError": "DeliveryCustomizationError",
		"...on DeliveryLocationLocalPickupSettingsError": "DeliveryLocationLocalPickupSettingsError",
		"...on DeliveryPromiseProviderUpsertUserError": "DeliveryPromiseProviderUpsertUserError",
		"...on DiscountUserError": "DiscountUserError",
		"...on DisputeEvidenceUpdateUserError": "DisputeEvidenceUpdateUserError",
		"...on ErrorsServerPixelUserError": "ErrorsServerPixelUserError",
		"...on ErrorsWebPixelUserError": "ErrorsWebPixelUserError",
		"...on FilesUserError": "FilesUserError",
		"...on FulfillmentConstraintRuleCreateUserError": "FulfillmentConstraintRuleCreateUserError",
		"...on FulfillmentConstraintRuleDeleteUserError": "FulfillmentConstraintRuleDeleteUserError",
		"...on FulfillmentConstraintRuleUpdateUserError": "FulfillmentConstraintRuleUpdateUserError",
		"...on FulfillmentOrderHoldUserError": "FulfillmentOrderHoldUserError",
		"...on FulfillmentOrderLineItemsPreparedForPickupUserError": "FulfillmentOrderLineItemsPreparedForPickupUserError",
		"...on FulfillmentOrderMergeUserError": "FulfillmentOrderMergeUserError",
		"...on FulfillmentOrderReleaseHoldUserError": "FulfillmentOrderReleaseHoldUserError",
		"...on FulfillmentOrderRescheduleUserError": "FulfillmentOrderRescheduleUserError",
		"...on FulfillmentOrderSplitUserError": "FulfillmentOrderSplitUserError",
		"...on FulfillmentOrdersRerouteUserError": "FulfillmentOrdersRerouteUserError",
		"...on FulfillmentOrdersSetFulfillmentDeadlineUserError": "FulfillmentOrdersSetFulfillmentDeadlineUserError",
		"...on GiftCardDeactivateUserError": "GiftCardDeactivateUserError",
		"...on GiftCardSendNotificationToCustomerUserError": "GiftCardSendNotificationToCustomerUserError",
		"...on GiftCardSendNotificationToRecipientUserError": "GiftCardSendNotificationToRecipientUserError",
		"...on GiftCardTransactionUserError": "GiftCardTransactionUserError",
		"...on GiftCardUserError": "GiftCardUserError",
		"...on InventoryAdjustQuantitiesUserError": "InventoryAdjustQuantitiesUserError",
		"...on InventoryBulkToggleActivationUserError": "InventoryBulkToggleActivationUserError",
		"...on InventoryMoveQuantitiesUserError": "InventoryMoveQuantitiesUserError",
		"...on InventorySetOnHandQuantitiesUserError": "InventorySetOnHandQuantitiesUserError",
		"...on InventorySetQuantitiesUserError": "InventorySetQuantitiesUserError",
		"...on InventorySetScheduledChangesUserError": "InventorySetScheduledChangesUserError",
		"...on InventoryShipmentAddItemsUserError": "InventoryShipmentAddItemsUserError",
		"...on InventoryShipmentCreateInTransitUserError": "InventoryShipmentCreateInTransitUserError",
		"...on InventoryShipmentCreateUserError": "InventoryShipmentCreateUserError",
		"...on InventoryShipmentDeleteUserError": "InventoryShipmentDeleteUserError",
		"...on InventoryShipmentMarkInTransitUserError": "InventoryShipmentMarkInTransitUserError",
		"...on InventoryShipmentReceiveUserError": "InventoryShipmentReceiveUserError",
		"...on InventoryShipmentRemoveItemsUserError": "InventoryShipmentRemoveItemsUserError",
		"...on InventoryShipmentSetTrackingUserError": "InventoryShipmentSetTrackingUserError",
		"...on InventoryShipmentUpdateItemQuantitiesUserError": "InventoryShipmentUpdateItemQuantitiesUserError",
		"...on InventoryTransferCancelUserError": "InventoryTransferCancelUserError",
		"...on InventoryTransferCreateAsReadyToShipUserError": "InventoryTransferCreateAsReadyToShipUserError",
		"...on InventoryTransferCreateUserError": "InventoryTransferCreateUserError",
		"...on InventoryTransferDeleteUserError": "InventoryTransferDeleteUserError",
		"...on InventoryTransferDuplicateUserError": "InventoryTransferDuplicateUserError",
		"...on InventoryTransferEditUserError": "InventoryTransferEditUserError",
		"...on InventoryTransferMarkAsReadyToShipUserError": "InventoryTransferMarkAsReadyToShipUserError",
		"...on InventoryTransferRemoveItemsUserError": "InventoryTransferRemoveItemsUserError",
		"...on InventoryTransferSetItemsUserError": "InventoryTransferSetItemsUserError",
		"...on LocationActivateUserError": "LocationActivateUserError",
		"...on LocationAddUserError": "LocationAddUserError",
		"...on LocationDeactivateUserError": "LocationDeactivateUserError",
		"...on LocationDeleteUserError": "LocationDeleteUserError",
		"...on LocationEditUserError": "LocationEditUserError",
		"...on MarketCurrencySettingsUserError": "MarketCurrencySettingsUserError",
		"...on MarketUserError": "MarketUserError",
		"...on MarketingActivityUserError": "MarketingActivityUserError",
		"...on MediaUserError": "MediaUserError",
		"...on MenuCreateUserError": "MenuCreateUserError",
		"...on MenuDeleteUserError": "MenuDeleteUserError",
		"...on MenuUpdateUserError": "MenuUpdateUserError",
		"...on MetafieldDefinitionCreateUserError": "MetafieldDefinitionCreateUserError",
		"...on MetafieldDefinitionDeleteUserError": "MetafieldDefinitionDeleteUserError",
		"...on MetafieldDefinitionPinUserError": "MetafieldDefinitionPinUserError",
		"...on MetafieldDefinitionUnpinUserError": "MetafieldDefinitionUnpinUserError",
		"...on MetafieldDefinitionUpdateUserError": "MetafieldDefinitionUpdateUserError",
		"...on MetafieldsSetUserError": "MetafieldsSetUserError",
		"...on MetaobjectUserError": "MetaobjectUserError",
		"...on MobilePlatformApplicationUserError": "MobilePlatformApplicationUserError",
		"...on OnlineStoreThemeFilesUserErrors": "OnlineStoreThemeFilesUserErrors",
		"...on OrderCancelUserError": "OrderCancelUserError",
		"...on OrderCreateMandatePaymentUserError": "OrderCreateMandatePaymentUserError",
		"...on OrderCreateManualPaymentOrderCreateManualPaymentError": "OrderCreateManualPaymentOrderCreateManualPaymentError",
		"...on OrderCreateUserError": "OrderCreateUserError",
		"...on OrderCustomerRemoveUserError": "OrderCustomerRemoveUserError",
		"...on OrderCustomerSetUserError": "OrderCustomerSetUserError",
		"...on OrderDeleteUserError": "OrderDeleteUserError",
		"...on OrderEditAddShippingLineUserError": "OrderEditAddShippingLineUserError",
		"...on OrderEditRemoveDiscountUserError": "OrderEditRemoveDiscountUserError",
		"...on OrderEditRemoveShippingLineUserError": "OrderEditRemoveShippingLineUserError",
		"...on OrderEditUpdateDiscountUserError": "OrderEditUpdateDiscountUserError",
		"...on OrderEditUpdateShippingLineUserError": "OrderEditUpdateShippingLineUserError",
		"...on OrderInvoiceSendUserError": "OrderInvoiceSendUserError",
		"...on OrderRiskAssessmentCreateUserError": "OrderRiskAssessmentCreateUserError",
		"...on PageCreateUserError": "PageCreateUserError",
		"...on PageDeleteUserError": "PageDeleteUserError",
		"...on PageUpdateUserError": "PageUpdateUserError",
		"...on PaymentCustomizationError": "PaymentCustomizationError",
		"...on PaymentReminderSendUserError": "PaymentReminderSendUserError",
		"...on PaymentTermsCreateUserError": "PaymentTermsCreateUserError",
		"...on PaymentTermsDeleteUserError": "PaymentTermsDeleteUserError",
		"...on PaymentTermsUpdateUserError": "PaymentTermsUpdateUserError",
		"...on PriceListFixedPricesByProductBulkUpdateUserError": "PriceListFixedPricesByProductBulkUpdateUserError",
		"...on PriceListPriceUserError": "PriceListPriceUserError",
		"...on PriceListUserError": "PriceListUserError",
		"...on PrivacyFeaturesDisableUserError": "PrivacyFeaturesDisableUserError",
		"...on ProductBundleMutationUserError": "ProductBundleMutationUserError",
		"...on ProductChangeStatusUserError": "ProductChangeStatusUserError",
		"...on ProductFeedCreateUserError": "ProductFeedCreateUserError",
		"...on ProductFeedDeleteUserError": "ProductFeedDeleteUserError",
		"...on ProductFullSyncUserError": "ProductFullSyncUserError",
		"...on ProductOptionUpdateUserError": "ProductOptionUpdateUserError",
		"...on ProductOptionsCreateUserError": "ProductOptionsCreateUserError",
		"...on ProductOptionsDeleteUserError": "ProductOptionsDeleteUserError",
		"...on ProductOptionsReorderUserError": "ProductOptionsReorderUserError",
		"...on ProductSetUserError": "ProductSetUserError",
		"...on ProductVariantRelationshipBulkUpdateUserError": "ProductVariantRelationshipBulkUpdateUserError",
		"...on ProductVariantsBulkCreateUserError": "ProductVariantsBulkCreateUserError",
		"...on ProductVariantsBulkDeleteUserError": "ProductVariantsBulkDeleteUserError",
		"...on ProductVariantsBulkReorderUserError": "ProductVariantsBulkReorderUserError",
		"...on ProductVariantsBulkUpdateUserError": "ProductVariantsBulkUpdateUserError",
		"...on PubSubWebhookSubscriptionCreateUserError": "PubSubWebhookSubscriptionCreateUserError",
		"...on PubSubWebhookSubscriptionUpdateUserError": "PubSubWebhookSubscriptionUpdateUserError",
		"...on PublicationUserError": "PublicationUserError",
		"...on QuantityPricingByVariantUserError": "QuantityPricingByVariantUserError",
		"...on QuantityRuleUserError": "QuantityRuleUserError",
		"...on ReturnUserError": "ReturnUserError",
		"...on SellingPlanGroupUserError": "SellingPlanGroupUserError",
		"...on ShopPolicyUserError": "ShopPolicyUserError",
		"...on ShopResourceFeedbackCreateUserError": "ShopResourceFeedbackCreateUserError",
		"...on ShopifyPaymentsPayoutAlternateCurrencyCreateUserError": "ShopifyPaymentsPayoutAlternateCurrencyCreateUserError",
		"...on StandardMetafieldDefinitionEnableUserError": "StandardMetafieldDefinitionEnableUserError",
		"...on StoreCreditAccountCreditUserError": "StoreCreditAccountCreditUserError",
		"...on StoreCreditAccountDebitUserError": "StoreCreditAccountDebitUserError",
		"...on SubscriptionBillingCycleBulkUserError": "SubscriptionBillingCycleBulkUserError",
		"...on SubscriptionBillingCycleSkipUserError": "SubscriptionBillingCycleSkipUserError",
		"...on SubscriptionBillingCycleUnskipUserError": "SubscriptionBillingCycleUnskipUserError",
		"...on SubscriptionBillingCycleUserError": "SubscriptionBillingCycleUserError",
		"...on SubscriptionContractStatusUpdateUserError": "SubscriptionContractStatusUpdateUserError",
		"...on SubscriptionContractUserError": "SubscriptionContractUserError",
		"...on SubscriptionDraftUserError": "SubscriptionDraftUserError",
		"...on TaxAppConfigureUserError": "TaxAppConfigureUserError",
		"...on ThemeCreateUserError": "ThemeCreateUserError",
		"...on ThemeDeleteUserError": "ThemeDeleteUserError",
		"...on ThemeDuplicateUserError": "ThemeDuplicateUserError",
		"...on ThemePublishUserError": "ThemePublishUserError",
		"...on ThemeUpdateUserError": "ThemeUpdateUserError",
		"...on TransactionVoidUserError": "TransactionVoidUserError",
		"...on TranslationUserError": "TranslationUserError",
		"...on UrlRedirectBulkDeleteByIdsUserError": "UrlRedirectBulkDeleteByIdsUserError",
		"...on UrlRedirectBulkDeleteBySavedSearchUserError": "UrlRedirectBulkDeleteBySavedSearchUserError",
		"...on UrlRedirectBulkDeleteBySearchUserError": "UrlRedirectBulkDeleteBySearchUserError",
		"...on UrlRedirectImportUserError": "UrlRedirectImportUserError",
		"...on UrlRedirectUserError": "UrlRedirectUserError",
		"...on UserError": "UserError",
		"...on ValidationUserError": "ValidationUserError",
		field:"String",
		message:"String"
	},
	DisputeEvidenceUpdatePayload:{
		disputeEvidence:"ShopifyPaymentsDisputeEvidence",
		userErrors:"DisputeEvidenceUpdateUserError"
	},
	DisputeEvidenceUpdateUserError:{
		code:"DisputeEvidenceUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Distance:{
		unit:"DistanceUnit",
		value:"Float"
	},
	Domain:{
		host:"String",
		id:"ID",
		localization:"DomainLocalization",
		marketWebPresence:"MarketWebPresence",
		sslEnabled:"Boolean",
		url:"URL"
	},
	DomainLocalization:{
		alternateLocales:"String",
		country:"String",
		defaultLocale:"String"
	},
	DraftOrder:{
		acceptAutomaticDiscounts:"Boolean",
		allVariantPricesOverridden:"Boolean",
		allowDiscountCodesInCheckout:"Boolean",
		anyVariantPricesOverridden:"Boolean",
		appliedDiscount:"DraftOrderAppliedDiscount",
		billingAddress:"MailingAddress",
		billingAddressMatchesShippingAddress:"Boolean",
		completedAt:"DateTime",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		defaultCursor:"String",
		discountCodes:"String",
		email:"String",
		events:"EventConnection",
		hasTimelineComment:"Boolean",
		id:"ID",
		invoiceEmailTemplateSubject:"String",
		invoiceSentAt:"DateTime",
		invoiceUrl:"URL",
		legacyResourceId:"UnsignedInt64",
		lineItems:"DraftOrderLineItemConnection",
		lineItemsSubtotalPrice:"MoneyBag",
		localizationExtensions:"LocalizationExtensionConnection",
		localizedFields:"LocalizedFieldConnection",
		marketName:"String",
		marketRegionCountryCode:"CountryCode",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		name:"String",
		note2:"String",
		order:"Order",
		paymentTerms:"PaymentTerms",
		phone:"String",
		platformDiscounts:"DraftOrderPlatformDiscount",
		poNumber:"String",
		presentmentCurrencyCode:"CurrencyCode",
		purchasingEntity:"PurchasingEntity",
		ready:"Boolean",
		reserveInventoryUntil:"DateTime",
		shippingAddress:"MailingAddress",
		shippingLine:"ShippingLine",
		status:"DraftOrderStatus",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		tags:"String",
		taxExempt:"Boolean",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		totalDiscountsSet:"MoneyBag",
		totalLineItemsPriceSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalQuantityOfLineItems:"Int",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag",
		totalWeight:"UnsignedInt64",
		transformerFingerprint:"String",
		updatedAt:"DateTime",
		visibleToCustomer:"Boolean",
		warnings:"DraftOrderWarning"
	},
	DraftOrderAppliedDiscount:{
		amount:"Money",
		amountSet:"MoneyBag",
		amountV2:"MoneyV2",
		description:"String",
		title:"String",
		value:"Float",
		valueType:"DraftOrderAppliedDiscountType"
	},
	DraftOrderAvailableDeliveryOptions:{
		availableLocalDeliveryRates:"DraftOrderShippingRate",
		availableLocalPickupOptions:"PickupInStoreLocation",
		availableShippingRates:"DraftOrderShippingRate",
		pageInfo:"PageInfo"
	},
	DraftOrderBulkAddTagsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderBulkDeletePayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderBulkRemoveTagsPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	DraftOrderBundleAddedWarning:{
		errorCode:"String",
		field:"String",
		message:"String"
	},
	DraftOrderCalculatePayload:{
		calculatedDraftOrder:"CalculatedDraftOrder",
		userErrors:"UserError"
	},
	DraftOrderCompletePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderConnection:{
		edges:"DraftOrderEdge",
		nodes:"DraftOrder",
		pageInfo:"PageInfo"
	},
	DraftOrderCreateFromOrderPayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderCreatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	DraftOrderDiscountNotAppliedWarning:{
		discountCode:"String",
		discountTitle:"String",
		errorCode:"String",
		field:"String",
		message:"String",
		priceRule:"PriceRule"
	},
	DraftOrderDuplicatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderEdge:{
		cursor:"String",
		node:"DraftOrder"
	},
	DraftOrderInvoicePreviewPayload:{
		previewHtml:"HTML",
		previewSubject:"HTML",
		userErrors:"UserError"
	},
	DraftOrderInvoiceSendPayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderLineItem:{
		appliedDiscount:"DraftOrderAppliedDiscount",
		approximateDiscountedUnitPriceSet:"MoneyBag",
		bundleComponents:"DraftOrderLineItem",
		components:"DraftOrderLineItem",
		custom:"Boolean",
		customAttributes:"Attribute",
		customAttributesV2:"TypedAttribute",
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"Money",
		discountedUnitPriceSet:"MoneyBag",
		fulfillmentService:"FulfillmentService",
		grams:"Int",
		id:"ID",
		image:"Image",
		isGiftCard:"Boolean",
		name:"String",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"Money",
		originalUnitPriceSet:"MoneyBag",
		originalUnitPriceWithCurrency:"MoneyV2",
		priceOverride:"MoneyV2",
		product:"Product",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"Money",
		totalDiscountSet:"MoneyBag",
		uuid:"String",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String",
		weight:"Weight"
	},
	DraftOrderLineItemConnection:{
		edges:"DraftOrderLineItemEdge",
		nodes:"DraftOrderLineItem",
		pageInfo:"PageInfo"
	},
	DraftOrderLineItemEdge:{
		cursor:"String",
		node:"DraftOrderLineItem"
	},
	DraftOrderMarketRegionCountryCodeNotSupportedWarning:{
		errorCode:"String",
		field:"String",
		message:"String"
	},
	DraftOrderPlatformDiscount:{
		allocations:"DraftOrderPlatformDiscountAllocation",
		automaticDiscount:"Boolean",
		bxgyDiscount:"Boolean",
		code:"String",
		discountClass:"DiscountClass",
		discountClasses:"DiscountClass",
		discountNode:"DiscountNode",
		id:"ID",
		presentationLevel:"String",
		shortSummary:"String",
		summary:"String",
		title:"String",
		totalAmount:"MoneyV2",
		totalAmountPriceSet:"MoneyBag"
	},
	DraftOrderPlatformDiscountAllocation:{
		id:"ID",
		quantity:"Int",
		reductionAmount:"MoneyV2",
		reductionAmountSet:"MoneyBag",
		target:"DraftOrderPlatformDiscountAllocationTarget"
	},
	DraftOrderPlatformDiscountAllocationTarget:{
		"...on CalculatedDraftOrderLineItem":"CalculatedDraftOrderLineItem",
		"...on DraftOrderLineItem":"DraftOrderLineItem",
		"...on ShippingLine":"ShippingLine"
	},
	DraftOrderShippingRate:{
		code:"String",
		handle:"String",
		price:"MoneyV2",
		source:"String",
		title:"String"
	},
	DraftOrderTag:{
		handle:"String",
		id:"ID",
		title:"String"
	},
	DraftOrderUpdatePayload:{
		draftOrder:"DraftOrder",
		userErrors:"UserError"
	},
	DraftOrderWarning:{
		"...on DraftOrderBundleAddedWarning": "DraftOrderBundleAddedWarning",
		"...on DraftOrderDiscountNotAppliedWarning": "DraftOrderDiscountNotAppliedWarning",
		"...on DraftOrderMarketRegionCountryCodeNotSupportedWarning": "DraftOrderMarketRegionCountryCodeNotSupportedWarning",
		errorCode:"String",
		field:"String",
		message:"String"
	},
	Duty:{
		countryCodeOfOrigin:"CountryCode",
		harmonizedSystemCode:"String",
		id:"ID",
		price:"MoneyBag",
		taxLines:"TaxLine"
	},
	DutySale:{
		actionType:"SaleActionType",
		duty:"Duty",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	EditableProperty:{
		locked:"Boolean",
		reason:"FormattedString"
	},
	EntitlementsType:{
		markets:"MarketsType"
	},
	ErrorsServerPixelUserError:{
		code:"ErrorsServerPixelUserErrorCode",
		field:"String",
		message:"String"
	},
	ErrorsWebPixelUserError:{
		code:"ErrorsWebPixelUserErrorCode",
		field:"String",
		message:"String"
	},
	Event:{
		"...on BasicEvent": "BasicEvent",
		"...on CommentEvent": "CommentEvent",
		action:"String",
		appTitle:"String",
		attributeToApp:"Boolean",
		attributeToUser:"Boolean",
		createdAt:"DateTime",
		criticalAlert:"Boolean",
		id:"ID",
		message:"FormattedString"
	},
	EventBridgeServerPixelUpdatePayload:{
		serverPixel:"ServerPixel",
		userErrors:"ErrorsServerPixelUserError"
	},
	EventBridgeWebhookSubscriptionCreatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	EventBridgeWebhookSubscriptionUpdatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	EventConnection:{
		edges:"EventEdge",
		nodes:"Event",
		pageInfo:"PageInfo"
	},
	EventEdge:{
		cursor:"String",
		node:"Event"
	},
	ExchangeLineItem:{
		id:"ID",
		lineItem:"LineItem",
		lineItems:"LineItem",
		processableQuantity:"Int",
		processedQuantity:"Int",
		quantity:"Int",
		unprocessedQuantity:"Int",
		variantId:"ID"
	},
	ExchangeLineItemConnection:{
		edges:"ExchangeLineItemEdge",
		nodes:"ExchangeLineItem",
		pageInfo:"PageInfo"
	},
	ExchangeLineItemEdge:{
		cursor:"String",
		node:"ExchangeLineItem"
	},
	ExchangeV2:{
		additions:"ExchangeV2Additions",
		completedAt:"DateTime",
		createdAt:"DateTime",
		id:"ID",
		location:"Location",
		mirrored:"Boolean",
		note:"String",
		refunds:"Refund",
		returns:"ExchangeV2Returns",
		staffMember:"StaffMember",
		totalAmountProcessedSet:"MoneyBag",
		totalPriceSet:"MoneyBag",
		transactions:"OrderTransaction"
	},
	ExchangeV2Additions:{
		lineItems:"ExchangeV2LineItem",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		totalPriceSet:"MoneyBag"
	},
	ExchangeV2Connection:{
		edges:"ExchangeV2Edge",
		nodes:"ExchangeV2",
		pageInfo:"PageInfo"
	},
	ExchangeV2Edge:{
		cursor:"String",
		node:"ExchangeV2"
	},
	ExchangeV2LineItem:{
		customAttributes:"Attribute",
		discountedTotalSet:"MoneyBag",
		discountedUnitPriceSet:"MoneyBag",
		fulfillmentService:"FulfillmentService",
		giftCard:"Boolean",
		giftCards:"GiftCard",
		isGiftCard:"Boolean",
		lineItem:"LineItem",
		name:"String",
		originalTotalSet:"MoneyBag",
		originalUnitPriceSet:"MoneyBag",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String"
	},
	ExchangeV2Returns:{
		lineItems:"ExchangeV2LineItem",
		orderDiscountAmountSet:"MoneyBag",
		shippingRefundAmountSet:"MoneyBag",
		subtotalPriceSet:"MoneyBag",
		taxLines:"TaxLine",
		tipRefundAmountSet:"MoneyBag",
		totalPriceSet:"MoneyBag"
	},
	ExternalVideo:{
		alt:"String",
		createdAt:"DateTime",
		embedUrl:"URL",
		embeddedUrl:"URL",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		host:"MediaHost",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originUrl:"URL",
		preview:"MediaPreviewImage",
		status:"MediaStatus",
		updatedAt:"DateTime"
	},
	FailedRequirement:{
		action:"NavigationItem",
		message:"String"
	},
	Fee:{
		"...on RestockingFee": "RestockingFee",
		"...on ReturnShippingFee": "ReturnShippingFee",
		id:"ID"
	},
	FeeSale:{
		actionType:"SaleActionType",
		fee:"Fee",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	File:{
		"...on ExternalVideo": "ExternalVideo",
		"...on GenericFile": "GenericFile",
		"...on MediaImage": "MediaImage",
		"...on Model3d": "Model3d",
		"...on Video": "Video",
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		id:"ID",
		preview:"MediaPreviewImage",
		updatedAt:"DateTime"
	},
	FileAcknowledgeUpdateFailedPayload:{
		files:"File",
		userErrors:"FilesUserError"
	},
	FileConnection:{
		edges:"FileEdge",
		nodes:"File",
		pageInfo:"PageInfo"
	},
	FileCreatePayload:{
		files:"File",
		userErrors:"FilesUserError"
	},
	FileDeletePayload:{
		deletedFileIds:"ID",
		userErrors:"FilesUserError"
	},
	FileEdge:{
		cursor:"String",
		node:"File"
	},
	FileError:{
		code:"FileErrorCode",
		details:"String",
		message:"String"
	},
	FileUpdatePayload:{
		files:"File",
		userErrors:"FilesUserError"
	},
	FilesUserError:{
		code:"FilesErrorCode",
		field:"String",
		message:"String"
	},
	FilterOption:{
		label:"String",
		value:"String"
	},
	FinanceAppAccessPolicy:{
		access:"BankingFinanceAppAccess"
	},
	FinanceKycInformation:{
		businessAddress:"ShopifyPaymentsAddressBasic",
		businessType:"ShopifyPaymentsBusinessType",
		industry:"ShopifyPaymentsMerchantCategoryCode",
		legalName:"String",
		shopOwner:"FinancialKycShopOwner",
		taxIdentification:"ShopifyPaymentsTaxIdentification"
	},
	FinancialKycShopOwner:{
		email:"String",
		firstName:"String",
		id:"ID",
		lastName:"String",
		phone:"String"
	},
	FinancialSummaryDiscountAllocation:{
		approximateAllocatedAmountPerItem:"MoneyBag",
		discountApplication:"FinancialSummaryDiscountApplication"
	},
	FinancialSummaryDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType"
	},
	FlowGenerateSignaturePayload:{
		payload:"String",
		signature:"String",
		userErrors:"UserError"
	},
	FlowTriggerReceivePayload:{
		userErrors:"UserError"
	},
	FormattedString: `scalar.FormattedString` as const,
	Fulfillment:{
		createdAt:"DateTime",
		deliveredAt:"DateTime",
		displayStatus:"FulfillmentDisplayStatus",
		estimatedDeliveryAt:"DateTime",
		events:"FulfillmentEventConnection",
		fulfillmentLineItems:"FulfillmentLineItemConnection",
		fulfillmentOrders:"FulfillmentOrderConnection",
		id:"ID",
		inTransitAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		location:"Location",
		name:"String",
		order:"Order",
		originAddress:"FulfillmentOriginAddress",
		requiresShipping:"Boolean",
		service:"FulfillmentService",
		status:"FulfillmentStatus",
		totalQuantity:"Int",
		trackingInfo:"FulfillmentTrackingInfo",
		updatedAt:"DateTime"
	},
	FulfillmentCancelPayload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentConnection:{
		edges:"FulfillmentEdge",
		nodes:"Fulfillment",
		pageInfo:"PageInfo"
	},
	FulfillmentConstraintRule:{
		deliveryMethodTypes:"DeliveryMethodType",
		function:"ShopifyFunction",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection"
	},
	FulfillmentConstraintRuleCreatePayload:{
		fulfillmentConstraintRule:"FulfillmentConstraintRule",
		userErrors:"FulfillmentConstraintRuleCreateUserError"
	},
	FulfillmentConstraintRuleCreateUserError:{
		code:"FulfillmentConstraintRuleCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentConstraintRuleDeletePayload:{
		success:"Boolean",
		userErrors:"FulfillmentConstraintRuleDeleteUserError"
	},
	FulfillmentConstraintRuleDeleteUserError:{
		code:"FulfillmentConstraintRuleDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentConstraintRuleUpdatePayload:{
		fulfillmentConstraintRule:"FulfillmentConstraintRule",
		userErrors:"FulfillmentConstraintRuleUpdateUserError"
	},
	FulfillmentConstraintRuleUpdateUserError:{
		code:"FulfillmentConstraintRuleUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentCreatePayload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentCreateV2Payload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentEdge:{
		cursor:"String",
		node:"Fulfillment"
	},
	FulfillmentEvent:{
		address1:"String",
		city:"String",
		country:"String",
		createdAt:"DateTime",
		estimatedDeliveryAt:"DateTime",
		happenedAt:"DateTime",
		id:"ID",
		latitude:"Float",
		longitude:"Float",
		message:"String",
		province:"String",
		status:"FulfillmentEventStatus",
		zip:"String"
	},
	FulfillmentEventConnection:{
		edges:"FulfillmentEventEdge",
		nodes:"FulfillmentEvent",
		pageInfo:"PageInfo"
	},
	FulfillmentEventCreatePayload:{
		fulfillmentEvent:"FulfillmentEvent",
		userErrors:"UserError"
	},
	FulfillmentEventEdge:{
		cursor:"String",
		node:"FulfillmentEvent"
	},
	FulfillmentHold:{
		displayReason:"String",
		handle:"String",
		heldByApp:"App",
		heldByRequestingApp:"Boolean",
		id:"ID",
		reason:"FulfillmentHoldReason",
		reasonNotes:"String"
	},
	FulfillmentLineItem:{
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		id:"ID",
		lineItem:"LineItem",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		quantity:"Int"
	},
	FulfillmentLineItemConnection:{
		edges:"FulfillmentLineItemEdge",
		nodes:"FulfillmentLineItem",
		pageInfo:"PageInfo"
	},
	FulfillmentLineItemEdge:{
		cursor:"String",
		node:"FulfillmentLineItem"
	},
	FulfillmentOrder:{
		assignedLocation:"FulfillmentOrderAssignedLocation",
		channelId:"ID",
		createdAt:"DateTime",
		deliveryMethod:"DeliveryMethod",
		destination:"FulfillmentOrderDestination",
		fulfillAt:"DateTime",
		fulfillBy:"DateTime",
		fulfillmentHolds:"FulfillmentHold",
		fulfillmentOrdersForMerge:"FulfillmentOrderConnection",
		fulfillments:"FulfillmentConnection",
		id:"ID",
		internationalDuties:"FulfillmentOrderInternationalDuties",
		lineItems:"FulfillmentOrderLineItemConnection",
		locationsForMove:"FulfillmentOrderLocationForMoveConnection",
		merchantRequests:"FulfillmentOrderMerchantRequestConnection",
		order:"Order",
		orderId:"ID",
		orderName:"String",
		orderProcessedAt:"DateTime",
		requestStatus:"FulfillmentOrderRequestStatus",
		status:"FulfillmentOrderStatus",
		supportedActions:"FulfillmentOrderSupportedAction",
		updatedAt:"DateTime"
	},
	FulfillmentOrderAcceptCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderAcceptFulfillmentRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderAssignedLocation:{
		address1:"String",
		address2:"String",
		city:"String",
		countryCode:"CountryCode",
		location:"Location",
		name:"String",
		phone:"String",
		province:"String",
		zip:"String"
	},
	FulfillmentOrderCancelPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		replacementFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderClosePayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderConnection:{
		edges:"FulfillmentOrderEdge",
		nodes:"FulfillmentOrder",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderDestination:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		countryCode:"CountryCode",
		email:"String",
		firstName:"String",
		id:"ID",
		lastName:"String",
		location:"Location",
		phone:"String",
		province:"String",
		zip:"String"
	},
	FulfillmentOrderEdge:{
		cursor:"String",
		node:"FulfillmentOrder"
	},
	FulfillmentOrderHoldPayload:{
		fulfillmentHold:"FulfillmentHold",
		fulfillmentOrder:"FulfillmentOrder",
		remainingFulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderHoldUserError"
	},
	FulfillmentOrderHoldUserError:{
		code:"FulfillmentOrderHoldUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderInternationalDuties:{
		incoterm:"String"
	},
	FulfillmentOrderLineItem:{
		financialSummaries:"FulfillmentOrderLineItemFinancialSummary",
		id:"ID",
		image:"Image",
		inventoryItemId:"ID",
		lineItem:"LineItem",
		originalUnitPriceSet:"MoneyBag",
		productTitle:"String",
		remainingQuantity:"Int",
		requiresShipping:"Boolean",
		sku:"String",
		totalQuantity:"Int",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String",
		warnings:"FulfillmentOrderLineItemWarning",
		weight:"Weight"
	},
	FulfillmentOrderLineItemConnection:{
		edges:"FulfillmentOrderLineItemEdge",
		nodes:"FulfillmentOrderLineItem",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderLineItemEdge:{
		cursor:"String",
		node:"FulfillmentOrderLineItem"
	},
	FulfillmentOrderLineItemFinancialSummary:{
		approximateDiscountedUnitPriceSet:"MoneyBag",
		discountAllocations:"FinancialSummaryDiscountAllocation",
		originalUnitPriceSet:"MoneyBag",
		quantity:"Int"
	},
	FulfillmentOrderLineItemWarning:{
		description:"String",
		title:"String"
	},
	FulfillmentOrderLineItemsPreparedForPickupPayload:{
		userErrors:"FulfillmentOrderLineItemsPreparedForPickupUserError"
	},
	FulfillmentOrderLineItemsPreparedForPickupUserError:{
		code:"FulfillmentOrderLineItemsPreparedForPickupUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderLocationForMove:{
		availableLineItems:"FulfillmentOrderLineItemConnection",
		availableLineItemsCount:"Count",
		location:"Location",
		message:"String",
		movable:"Boolean",
		unavailableLineItems:"FulfillmentOrderLineItemConnection",
		unavailableLineItemsCount:"Count"
	},
	FulfillmentOrderLocationForMoveConnection:{
		edges:"FulfillmentOrderLocationForMoveEdge",
		nodes:"FulfillmentOrderLocationForMove",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderLocationForMoveEdge:{
		cursor:"String",
		node:"FulfillmentOrderLocationForMove"
	},
	FulfillmentOrderMerchantRequest:{
		fulfillmentOrder:"FulfillmentOrder",
		id:"ID",
		kind:"FulfillmentOrderMerchantRequestKind",
		message:"String",
		requestOptions:"JSON",
		responseData:"JSON",
		sentAt:"DateTime"
	},
	FulfillmentOrderMerchantRequestConnection:{
		edges:"FulfillmentOrderMerchantRequestEdge",
		nodes:"FulfillmentOrderMerchantRequest",
		pageInfo:"PageInfo"
	},
	FulfillmentOrderMerchantRequestEdge:{
		cursor:"String",
		node:"FulfillmentOrderMerchantRequest"
	},
	FulfillmentOrderMergePayload:{
		fulfillmentOrderMerges:"FulfillmentOrderMergeResult",
		userErrors:"FulfillmentOrderMergeUserError"
	},
	FulfillmentOrderMergeResult:{
		fulfillmentOrder:"FulfillmentOrder"
	},
	FulfillmentOrderMergeUserError:{
		code:"FulfillmentOrderMergeUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderMovePayload:{
		movedFulfillmentOrder:"FulfillmentOrder",
		originalFulfillmentOrder:"FulfillmentOrder",
		remainingFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderOpenPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderRejectCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderRejectFulfillmentRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderReleaseHoldPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderReleaseHoldUserError"
	},
	FulfillmentOrderReleaseHoldUserError:{
		code:"FulfillmentOrderReleaseHoldUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderReschedulePayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"FulfillmentOrderRescheduleUserError"
	},
	FulfillmentOrderRescheduleUserError:{
		code:"FulfillmentOrderRescheduleUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderSplitPayload:{
		fulfillmentOrderSplits:"FulfillmentOrderSplitResult",
		userErrors:"FulfillmentOrderSplitUserError"
	},
	FulfillmentOrderSplitResult:{
		fulfillmentOrder:"FulfillmentOrder",
		remainingFulfillmentOrder:"FulfillmentOrder",
		replacementFulfillmentOrder:"FulfillmentOrder"
	},
	FulfillmentOrderSplitUserError:{
		code:"FulfillmentOrderSplitUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrderSubmitCancellationRequestPayload:{
		fulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderSubmitFulfillmentRequestPayload:{
		originalFulfillmentOrder:"FulfillmentOrder",
		submittedFulfillmentOrder:"FulfillmentOrder",
		unsubmittedFulfillmentOrder:"FulfillmentOrder",
		userErrors:"UserError"
	},
	FulfillmentOrderSupportedAction:{
		action:"FulfillmentOrderAction",
		externalUrl:"URL"
	},
	FulfillmentOrdersReroutePayload:{
		movedFulfillmentOrders:"FulfillmentOrder",
		userErrors:"FulfillmentOrdersRerouteUserError"
	},
	FulfillmentOrdersRerouteUserError:{
		code:"FulfillmentOrdersRerouteUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOrdersSetFulfillmentDeadlinePayload:{
		success:"Boolean",
		userErrors:"FulfillmentOrdersSetFulfillmentDeadlineUserError"
	},
	FulfillmentOrdersSetFulfillmentDeadlineUserError:{
		code:"FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode",
		field:"String",
		message:"String"
	},
	FulfillmentOriginAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		countryCode:"String",
		provinceCode:"String",
		zip:"String"
	},
	FulfillmentService:{
		callbackUrl:"URL",
		fulfillmentOrdersOptIn:"Boolean",
		handle:"String",
		id:"ID",
		inventoryManagement:"Boolean",
		location:"Location",
		permitsSkuSharing:"Boolean",
		requiresShippingMethod:"Boolean",
		serviceName:"String",
		trackingSupport:"Boolean",
		type:"FulfillmentServiceType"
	},
	FulfillmentServiceCreatePayload:{
		fulfillmentService:"FulfillmentService",
		userErrors:"UserError"
	},
	FulfillmentServiceDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	FulfillmentServiceUpdatePayload:{
		fulfillmentService:"FulfillmentService",
		userErrors:"UserError"
	},
	FulfillmentTrackingInfo:{
		company:"String",
		number:"String",
		url:"URL"
	},
	FulfillmentTrackingInfoUpdatePayload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FulfillmentTrackingInfoUpdateV2Payload:{
		fulfillment:"Fulfillment",
		userErrors:"UserError"
	},
	FunctionsAppBridge:{
		createPath:"String",
		detailsPath:"String"
	},
	FunctionsErrorHistory:{
		errorsFirstOccurredAt:"DateTime",
		firstOccurredAt:"DateTime",
		hasBeenSharedSinceLastError:"Boolean",
		hasSharedRecentErrors:"Boolean"
	},
	GenericFile:{
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		id:"ID",
		mimeType:"String",
		originalFileSize:"Int",
		preview:"MediaPreviewImage",
		updatedAt:"DateTime",
		url:"URL"
	},
	GiftCard:{
		balance:"MoneyV2",
		createdAt:"DateTime",
		customer:"Customer",
		deactivatedAt:"DateTime",
		enabled:"Boolean",
		expiresOn:"Date",
		id:"ID",
		initialValue:"MoneyV2",
		lastCharacters:"String",
		maskedCode:"String",
		note:"String",
		order:"Order",
		recipientAttributes:"GiftCardRecipient",
		templateSuffix:"String",
		transactions:"GiftCardTransactionConnection",
		updatedAt:"DateTime"
	},
	GiftCardConfiguration:{
		issueLimit:"MoneyV2",
		purchaseLimit:"MoneyV2"
	},
	GiftCardConnection:{
		edges:"GiftCardEdge",
		nodes:"GiftCard",
		pageInfo:"PageInfo"
	},
	GiftCardCreatePayload:{
		giftCard:"GiftCard",
		giftCardCode:"String",
		userErrors:"GiftCardUserError"
	},
	GiftCardCreditPayload:{
		giftCardCreditTransaction:"GiftCardCreditTransaction",
		userErrors:"GiftCardTransactionUserError"
	},
	GiftCardCreditTransaction:{
		amount:"MoneyV2",
		giftCard:"GiftCard",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		note:"String",
		processedAt:"DateTime"
	},
	GiftCardDeactivatePayload:{
		giftCard:"GiftCard",
		userErrors:"GiftCardDeactivateUserError"
	},
	GiftCardDeactivateUserError:{
		code:"GiftCardDeactivateUserErrorCode",
		field:"String",
		message:"String"
	},
	GiftCardDebitPayload:{
		giftCardDebitTransaction:"GiftCardDebitTransaction",
		userErrors:"GiftCardTransactionUserError"
	},
	GiftCardDebitTransaction:{
		amount:"MoneyV2",
		giftCard:"GiftCard",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		note:"String",
		processedAt:"DateTime"
	},
	GiftCardEdge:{
		cursor:"String",
		node:"GiftCard"
	},
	GiftCardRecipient:{
		message:"String",
		preferredName:"String",
		recipient:"Customer",
		sendNotificationAt:"DateTime"
	},
	GiftCardSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	GiftCardSendNotificationToCustomerPayload:{
		giftCard:"GiftCard",
		userErrors:"GiftCardSendNotificationToCustomerUserError"
	},
	GiftCardSendNotificationToCustomerUserError:{
		code:"GiftCardSendNotificationToCustomerUserErrorCode",
		field:"String",
		message:"String"
	},
	GiftCardSendNotificationToRecipientPayload:{
		giftCard:"GiftCard",
		userErrors:"GiftCardSendNotificationToRecipientUserError"
	},
	GiftCardSendNotificationToRecipientUserError:{
		code:"GiftCardSendNotificationToRecipientUserErrorCode",
		field:"String",
		message:"String"
	},
	GiftCardTransaction:{
		"...on GiftCardCreditTransaction": "GiftCardCreditTransaction",
		"...on GiftCardDebitTransaction": "GiftCardDebitTransaction",
		amount:"MoneyV2",
		giftCard:"GiftCard",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		note:"String",
		processedAt:"DateTime"
	},
	GiftCardTransactionConnection:{
		edges:"GiftCardTransactionEdge",
		nodes:"GiftCardTransaction",
		pageInfo:"PageInfo"
	},
	GiftCardTransactionEdge:{
		cursor:"String",
		node:"GiftCardTransaction"
	},
	GiftCardTransactionUserError:{
		code:"GiftCardTransactionUserErrorCode",
		field:"String",
		message:"String"
	},
	GiftCardUpdatePayload:{
		giftCard:"GiftCard",
		userErrors:"UserError"
	},
	GiftCardUserError:{
		code:"GiftCardErrorCode",
		field:"String",
		message:"String"
	},
	HTML: `scalar.HTML` as const,
	HasCompareDigest:{
		"...on Metafield": "Metafield",
		compareDigest:"String"
	},
	HasEvents:{
		"...on Article": "Article",
		"...on Blog": "Blog",
		"...on Collection": "Collection",
		"...on Comment": "Comment",
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		"...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy",
		"...on DiscountAutomaticNode": "DiscountAutomaticNode",
		"...on DiscountCodeNode": "DiscountCodeNode",
		"...on DiscountNode": "DiscountNode",
		"...on DraftOrder": "DraftOrder",
		"...on InventoryTransfer": "InventoryTransfer",
		"...on Order": "Order",
		"...on Page": "Page",
		"...on PriceRule": "PriceRule",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		events:"EventConnection"
	},
	HasLocalizationExtensions:{
		"...on DraftOrder": "DraftOrder",
		"...on Order": "Order",
		localizationExtensions:"LocalizationExtensionConnection"
	},
	HasLocalizedFields:{
		"...on DraftOrder": "DraftOrder",
		"...on Order": "Order",
		localizedFields:"LocalizedFieldConnection"
	},
	HasMetafieldDefinitions:{
		"...on Article": "Article",
		"...on Blog": "Blog",
		"...on Collection": "Collection",
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		"...on DeliveryCustomization": "DeliveryCustomization",
		"...on DiscountAutomaticNode": "DiscountAutomaticNode",
		"...on DiscountCodeNode": "DiscountCodeNode",
		"...on DiscountNode": "DiscountNode",
		"...on InventoryTransfer": "InventoryTransfer",
		"...on Location": "Location",
		"...on Market": "Market",
		"...on Order": "Order",
		"...on Page": "Page",
		"...on PaymentCustomization": "PaymentCustomization",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		"...on SellingPlan": "SellingPlan",
		"...on Shop": "Shop",
		"...on Validation": "Validation",
		metafieldDefinitions:"MetafieldDefinitionConnection"
	},
	HasMetafields:{
		"...on AppInstallation": "AppInstallation",
		"...on Article": "Article",
		"...on Blog": "Blog",
		"...on CartTransform": "CartTransform",
		"...on Collection": "Collection",
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		"...on CustomerSegmentMember": "CustomerSegmentMember",
		"...on DeliveryCustomization": "DeliveryCustomization",
		"...on DiscountAutomaticNode": "DiscountAutomaticNode",
		"...on DiscountCodeNode": "DiscountCodeNode",
		"...on DiscountNode": "DiscountNode",
		"...on DraftOrder": "DraftOrder",
		"...on FulfillmentConstraintRule": "FulfillmentConstraintRule",
		"...on GiftCardCreditTransaction": "GiftCardCreditTransaction",
		"...on GiftCardDebitTransaction": "GiftCardDebitTransaction",
		"...on GiftCardTransaction": "GiftCardTransaction",
		"...on Image": "Image",
		"...on InventoryTransfer": "InventoryTransfer",
		"...on Location": "Location",
		"...on Market": "Market",
		"...on MediaImage": "MediaImage",
		"...on Order": "Order",
		"...on Page": "Page",
		"...on PaymentCustomization": "PaymentCustomization",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		"...on SellingPlan": "SellingPlan",
		"...on Shop": "Shop",
		"...on Validation": "Validation",
		metafield:"Metafield",
		metafields:"MetafieldConnection"
	},
	HasPublishedTranslations:{
		"...on Article": "Article",
		"...on Blog": "Blog",
		"...on Collection": "Collection",
		"...on CookieBanner": "CookieBanner",
		"...on Image": "Image",
		"...on Link": "Link",
		"...on MediaImage": "MediaImage",
		"...on Menu": "Menu",
		"...on OnlineStoreTheme": "OnlineStoreTheme",
		"...on Page": "Page",
		"...on Product": "Product",
		"...on ProductOption": "ProductOption",
		"...on ProductOptionValue": "ProductOptionValue",
		"...on ProductVariant": "ProductVariant",
		"...on SellingPlan": "SellingPlan",
		"...on SellingPlanGroup": "SellingPlanGroup",
		"...on Shop": "Shop",
		"...on ShopPolicy": "ShopPolicy",
		translations:"Translation"
	},
	HasStoreCreditAccounts:{
		"...on CompanyLocation": "CompanyLocation",
		"...on Customer": "Customer",
		storeCreditAccounts:"StoreCreditAccountConnection"
	},
	Image:{
		altText:"String",
		height:"Int",
		id:"ID",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		originalSrc:"URL",
		src:"URL",
		thumbhash:"String",
		transformedSrc:"URL",
		translations:"Translation",
		url:"URL",
		width:"Int"
	},
	ImageConnection:{
		edges:"ImageEdge",
		nodes:"Image",
		pageInfo:"PageInfo"
	},
	ImageEdge:{
		cursor:"String",
		node:"Image"
	},
	ImageUploadParameter:{
		name:"String",
		value:"String"
	},
	InventoryActivatePayload:{
		inventoryLevel:"InventoryLevel",
		userErrors:"UserError"
	},
	InventoryAdjustQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventoryAdjustQuantitiesUserError"
	},
	InventoryAdjustQuantitiesUserError:{
		code:"InventoryAdjustQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryAdjustmentGroup:{
		app:"App",
		changes:"InventoryChange",
		createdAt:"DateTime",
		id:"ID",
		reason:"String",
		referenceDocumentUri:"String",
		staffMember:"StaffMember"
	},
	InventoryBulkToggleActivationPayload:{
		inventoryItem:"InventoryItem",
		inventoryLevels:"InventoryLevel",
		userErrors:"InventoryBulkToggleActivationUserError"
	},
	InventoryBulkToggleActivationUserError:{
		code:"InventoryBulkToggleActivationUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryChange:{
		delta:"Int",
		item:"InventoryItem",
		ledgerDocumentUri:"String",
		location:"Location",
		name:"String",
		quantityAfterChange:"Int"
	},
	InventoryDeactivatePayload:{
		userErrors:"UserError"
	},
	InventoryItem:{
		countryCodeOfOrigin:"CountryCode",
		countryHarmonizedSystemCodes:"CountryHarmonizedSystemCodeConnection",
		createdAt:"DateTime",
		duplicateSkuCount:"Int",
		harmonizedSystemCode:"String",
		id:"ID",
		inventoryHistoryUrl:"URL",
		inventoryLevel:"InventoryLevel",
		inventoryLevels:"InventoryLevelConnection",
		legacyResourceId:"UnsignedInt64",
		locationsCount:"Count",
		measurement:"InventoryItemMeasurement",
		provinceCodeOfOrigin:"String",
		requiresShipping:"Boolean",
		sku:"String",
		tracked:"Boolean",
		trackedEditable:"EditableProperty",
		unitCost:"MoneyV2",
		updatedAt:"DateTime",
		variant:"ProductVariant"
	},
	InventoryItemConnection:{
		edges:"InventoryItemEdge",
		nodes:"InventoryItem",
		pageInfo:"PageInfo"
	},
	InventoryItemEdge:{
		cursor:"String",
		node:"InventoryItem"
	},
	InventoryItemMeasurement:{
		id:"ID",
		weight:"Weight"
	},
	InventoryItemUpdatePayload:{
		inventoryItem:"InventoryItem",
		userErrors:"UserError"
	},
	InventoryLevel:{
		canDeactivate:"Boolean",
		createdAt:"DateTime",
		deactivationAlert:"String",
		id:"ID",
		item:"InventoryItem",
		location:"Location",
		quantities:"InventoryQuantity",
		scheduledChanges:"InventoryScheduledChangeConnection",
		updatedAt:"DateTime"
	},
	InventoryLevelConnection:{
		edges:"InventoryLevelEdge",
		nodes:"InventoryLevel",
		pageInfo:"PageInfo"
	},
	InventoryLevelEdge:{
		cursor:"String",
		node:"InventoryLevel"
	},
	InventoryMoveQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventoryMoveQuantitiesUserError"
	},
	InventoryMoveQuantitiesUserError:{
		code:"InventoryMoveQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryProperties:{
		quantityNames:"InventoryQuantityName"
	},
	InventoryQuantity:{
		id:"ID",
		name:"String",
		quantity:"Int",
		updatedAt:"DateTime"
	},
	InventoryQuantityName:{
		belongsTo:"String",
		comprises:"String",
		displayName:"String",
		isInUse:"Boolean",
		name:"String"
	},
	InventoryScheduledChange:{
		expectedAt:"DateTime",
		fromName:"String",
		inventoryLevel:"InventoryLevel",
		ledgerDocumentUri:"URL",
		quantity:"Int",
		toName:"String"
	},
	InventoryScheduledChangeConnection:{
		edges:"InventoryScheduledChangeEdge",
		nodes:"InventoryScheduledChange",
		pageInfo:"PageInfo"
	},
	InventoryScheduledChangeEdge:{
		cursor:"String",
		node:"InventoryScheduledChange"
	},
	InventorySetOnHandQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventorySetOnHandQuantitiesUserError"
	},
	InventorySetOnHandQuantitiesUserError:{
		code:"InventorySetOnHandQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventorySetQuantitiesPayload:{
		inventoryAdjustmentGroup:"InventoryAdjustmentGroup",
		userErrors:"InventorySetQuantitiesUserError"
	},
	InventorySetQuantitiesUserError:{
		code:"InventorySetQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventorySetScheduledChangesPayload:{
		scheduledChanges:"InventoryScheduledChange",
		userErrors:"InventorySetScheduledChangesUserError"
	},
	InventorySetScheduledChangesUserError:{
		code:"InventorySetScheduledChangesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipment:{
		dateCreated:"DateTime",
		dateReceived:"DateTime",
		dateShipped:"DateTime",
		id:"ID",
		lineItemTotalQuantity:"Int",
		lineItems:"InventoryShipmentLineItemConnection",
		lineItemsCount:"Count",
		name:"String",
		status:"InventoryShipmentStatus",
		totalAcceptedQuantity:"Int",
		totalReceivedQuantity:"Int",
		totalRejectedQuantity:"Int",
		tracking:"InventoryShipmentTracking"
	},
	InventoryShipmentAddItemsPayload:{
		addedItems:"InventoryShipmentLineItem",
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentAddItemsUserError"
	},
	InventoryShipmentAddItemsUserError:{
		code:"InventoryShipmentAddItemsUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentConnection:{
		edges:"InventoryShipmentEdge",
		nodes:"InventoryShipment",
		pageInfo:"PageInfo"
	},
	InventoryShipmentCreateInTransitPayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentCreateInTransitUserError"
	},
	InventoryShipmentCreateInTransitUserError:{
		code:"InventoryShipmentCreateInTransitUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentCreatePayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentCreateUserError"
	},
	InventoryShipmentCreateUserError:{
		code:"InventoryShipmentCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentDeletePayload:{
		id:"ID",
		userErrors:"InventoryShipmentDeleteUserError"
	},
	InventoryShipmentDeleteUserError:{
		code:"InventoryShipmentDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentEdge:{
		cursor:"String",
		node:"InventoryShipment"
	},
	InventoryShipmentLineItem:{
		acceptedQuantity:"Int",
		id:"ID",
		inventoryItem:"InventoryItem",
		quantity:"Int",
		rejectedQuantity:"Int",
		unreceivedQuantity:"Int"
	},
	InventoryShipmentLineItemConnection:{
		edges:"InventoryShipmentLineItemEdge",
		nodes:"InventoryShipmentLineItem",
		pageInfo:"PageInfo"
	},
	InventoryShipmentLineItemEdge:{
		cursor:"String",
		node:"InventoryShipmentLineItem"
	},
	InventoryShipmentMarkInTransitPayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentMarkInTransitUserError"
	},
	InventoryShipmentMarkInTransitUserError:{
		code:"InventoryShipmentMarkInTransitUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentReceivePayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentReceiveUserError"
	},
	InventoryShipmentReceiveUserError:{
		code:"InventoryShipmentReceiveUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentRemoveItemsPayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentRemoveItemsUserError"
	},
	InventoryShipmentRemoveItemsUserError:{
		code:"InventoryShipmentRemoveItemsUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentSetTrackingPayload:{
		inventoryShipment:"InventoryShipment",
		userErrors:"InventoryShipmentSetTrackingUserError"
	},
	InventoryShipmentSetTrackingUserError:{
		code:"InventoryShipmentSetTrackingUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryShipmentTracking:{
		arrivesAt:"DateTime",
		company:"String",
		trackingNumber:"String",
		trackingUrl:"URL"
	},
	InventoryShipmentUpdateItemQuantitiesPayload:{
		shipment:"InventoryShipment",
		updatedLineItems:"InventoryShipmentLineItem",
		userErrors:"InventoryShipmentUpdateItemQuantitiesUserError"
	},
	InventoryShipmentUpdateItemQuantitiesUserError:{
		code:"InventoryShipmentUpdateItemQuantitiesUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransfer:{
		dateCreated:"DateTime",
		destination:"LocationSnapshot",
		events:"EventConnection",
		hasTimelineComment:"Boolean",
		id:"ID",
		lineItems:"InventoryTransferLineItemConnection",
		lineItemsCount:"Count",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		note:"String",
		origin:"LocationSnapshot",
		receivedQuantity:"Int",
		referenceName:"String",
		shipments:"InventoryShipmentConnection",
		status:"InventoryTransferStatus",
		tags:"String",
		totalQuantity:"Int"
	},
	InventoryTransferCancelPayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferCancelUserError"
	},
	InventoryTransferCancelUserError:{
		code:"InventoryTransferCancelUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferConnection:{
		edges:"InventoryTransferEdge",
		nodes:"InventoryTransfer",
		pageInfo:"PageInfo"
	},
	InventoryTransferCreateAsReadyToShipPayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferCreateAsReadyToShipUserError"
	},
	InventoryTransferCreateAsReadyToShipUserError:{
		code:"InventoryTransferCreateAsReadyToShipUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferCreatePayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferCreateUserError"
	},
	InventoryTransferCreateUserError:{
		code:"InventoryTransferCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferDeletePayload:{
		deletedId:"ID",
		userErrors:"InventoryTransferDeleteUserError"
	},
	InventoryTransferDeleteUserError:{
		code:"InventoryTransferDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferDuplicatePayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferDuplicateUserError"
	},
	InventoryTransferDuplicateUserError:{
		code:"InventoryTransferDuplicateUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferEdge:{
		cursor:"String",
		node:"InventoryTransfer"
	},
	InventoryTransferEditPayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferEditUserError"
	},
	InventoryTransferEditUserError:{
		code:"InventoryTransferEditUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferLineItem:{
		id:"ID",
		inventoryItem:"InventoryItem",
		pickedForShipmentQuantity:"Int",
		processableQuantity:"Int",
		shippableQuantity:"Int",
		shippedQuantity:"Int",
		title:"String",
		totalQuantity:"Int"
	},
	InventoryTransferLineItemConnection:{
		edges:"InventoryTransferLineItemEdge",
		nodes:"InventoryTransferLineItem",
		pageInfo:"PageInfo"
	},
	InventoryTransferLineItemEdge:{
		cursor:"String",
		node:"InventoryTransferLineItem"
	},
	InventoryTransferLineItemUpdate:{
		deltaQuantity:"Int",
		inventoryItemId:"ID",
		newQuantity:"Int"
	},
	InventoryTransferMarkAsReadyToShipPayload:{
		inventoryTransfer:"InventoryTransfer",
		userErrors:"InventoryTransferMarkAsReadyToShipUserError"
	},
	InventoryTransferMarkAsReadyToShipUserError:{
		code:"InventoryTransferMarkAsReadyToShipUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferRemoveItemsPayload:{
		inventoryTransfer:"InventoryTransfer",
		removedQuantities:"InventoryTransferLineItemUpdate",
		userErrors:"InventoryTransferRemoveItemsUserError"
	},
	InventoryTransferRemoveItemsUserError:{
		code:"InventoryTransferRemoveItemsUserErrorCode",
		field:"String",
		message:"String"
	},
	InventoryTransferSetItemsPayload:{
		inventoryTransfer:"InventoryTransfer",
		updatedLineItems:"InventoryTransferLineItemUpdate",
		userErrors:"InventoryTransferSetItemsUserError"
	},
	InventoryTransferSetItemsUserError:{
		code:"InventoryTransferSetItemsUserErrorCode",
		field:"String",
		message:"String"
	},
	InvoiceReturnOutcome:{
		amount:"MoneyBag"
	},
	JSON: `scalar.JSON` as const,
	Job:{
		done:"Boolean",
		id:"ID",
		query:"QueryRoot"
	},
	JobResult:{
		"...on CustomerSegmentMembersQuery": "CustomerSegmentMembersQuery",
		done:"Boolean",
		id:"ID"
	},
	LegacyInteroperability:{
		"...on Customer": "Customer",
		"...on DraftOrder": "DraftOrder",
		"...on Fulfillment": "Fulfillment",
		"...on InventoryItem": "InventoryItem",
		"...on Location": "Location",
		"...on MarketingEvent": "MarketingEvent",
		"...on Metafield": "Metafield",
		"...on Order": "Order",
		"...on PriceRule": "PriceRule",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		"...on Refund": "Refund",
		"...on SavedSearch": "SavedSearch",
		"...on ScriptTag": "ScriptTag",
		"...on ShopifyPaymentsDispute": "ShopifyPaymentsDispute",
		"...on ShopifyPaymentsPayout": "ShopifyPaymentsPayout",
		"...on WebhookSubscription": "WebhookSubscription",
		legacyResourceId:"UnsignedInt64"
	},
	LimitedPendingOrderCount:{
		atMax:"Boolean",
		count:"Int"
	},
	LineItem:{
		canRestock:"Boolean",
		contract:"SubscriptionContract",
		currentQuantity:"Int",
		customAttributes:"Attribute",
		discountAllocations:"DiscountAllocation",
		discountedTotal:"Money",
		discountedTotalSet:"MoneyBag",
		discountedUnitPrice:"Money",
		discountedUnitPriceAfterAllDiscountsSet:"MoneyBag",
		discountedUnitPriceSet:"MoneyBag",
		duties:"Duty",
		fulfillableQuantity:"Int",
		fulfillmentService:"FulfillmentService",
		fulfillmentStatus:"String",
		id:"ID",
		image:"Image",
		isGiftCard:"Boolean",
		lineItemGroup:"LineItemGroup",
		merchantEditable:"Boolean",
		name:"String",
		nonFulfillableQuantity:"Int",
		originalTotal:"Money",
		originalTotalSet:"MoneyBag",
		originalUnitPrice:"Money",
		originalUnitPriceSet:"MoneyBag",
		product:"Product",
		quantity:"Int",
		refundableQuantity:"Int",
		requiresShipping:"Boolean",
		restockable:"Boolean",
		sellingPlan:"LineItemSellingPlan",
		sku:"String",
		staffMember:"StaffMember",
		taxLines:"TaxLine",
		taxable:"Boolean",
		title:"String",
		totalDiscount:"Money",
		totalDiscountSet:"MoneyBag",
		unfulfilledDiscountedTotal:"Money",
		unfulfilledDiscountedTotalSet:"MoneyBag",
		unfulfilledOriginalTotal:"Money",
		unfulfilledOriginalTotalSet:"MoneyBag",
		unfulfilledQuantity:"Int",
		variant:"ProductVariant",
		variantTitle:"String",
		vendor:"String"
	},
	LineItemConnection:{
		edges:"LineItemEdge",
		nodes:"LineItem",
		pageInfo:"PageInfo"
	},
	LineItemEdge:{
		cursor:"String",
		node:"LineItem"
	},
	LineItemGroup:{
		customAttributes:"Attribute",
		id:"ID",
		productId:"ID",
		quantity:"Int",
		title:"String",
		variantId:"ID",
		variantSku:"String"
	},
	LineItemSellingPlan:{
		name:"String",
		sellingPlanId:"ID"
	},
	Link:{
		label:"String",
		translations:"Translation",
		url:"URL"
	},
	LinkedMetafield:{
		key:"String",
		namespace:"String"
	},
	LocalPaymentMethodsPaymentDetails:{
		paymentDescriptor:"String",
		paymentMethodName:"String"
	},
	Locale:{
		isoCode:"String",
		name:"String"
	},
	LocalizationExtension:{
		countryCode:"CountryCode",
		key:"LocalizationExtensionKey",
		purpose:"LocalizationExtensionPurpose",
		title:"String",
		value:"String"
	},
	LocalizationExtensionConnection:{
		edges:"LocalizationExtensionEdge",
		nodes:"LocalizationExtension",
		pageInfo:"PageInfo"
	},
	LocalizationExtensionEdge:{
		cursor:"String",
		node:"LocalizationExtension"
	},
	LocalizedField:{
		countryCode:"CountryCode",
		key:"LocalizedFieldKey",
		purpose:"LocalizedFieldPurpose",
		title:"String",
		value:"String"
	},
	LocalizedFieldConnection:{
		edges:"LocalizedFieldEdge",
		nodes:"LocalizedField",
		pageInfo:"PageInfo"
	},
	LocalizedFieldEdge:{
		cursor:"String",
		node:"LocalizedField"
	},
	Location:{
		activatable:"Boolean",
		address:"LocationAddress",
		addressVerified:"Boolean",
		createdAt:"DateTime",
		deactivatable:"Boolean",
		deactivatedAt:"String",
		deletable:"Boolean",
		fulfillmentService:"FulfillmentService",
		fulfillsOnlineOrders:"Boolean",
		hasActiveInventory:"Boolean",
		hasUnfulfilledOrders:"Boolean",
		id:"ID",
		inventoryLevel:"InventoryLevel",
		inventoryLevels:"InventoryLevelConnection",
		isActive:"Boolean",
		isFulfillmentService:"Boolean",
		isPrimary:"Boolean",
		legacyResourceId:"UnsignedInt64",
		localPickupSettingsV2:"DeliveryLocalPickupSettings",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		shipsInventory:"Boolean",
		suggestedAddresses:"LocationSuggestedAddress",
		updatedAt:"DateTime"
	},
	LocationActivatePayload:{
		location:"Location",
		locationActivateUserErrors:"LocationActivateUserError"
	},
	LocationActivateUserError:{
		code:"LocationActivateUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationAddPayload:{
		location:"Location",
		userErrors:"LocationAddUserError"
	},
	LocationAddUserError:{
		code:"LocationAddUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		country:"String",
		countryCode:"String",
		formatted:"String",
		latitude:"Float",
		longitude:"Float",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	LocationConnection:{
		edges:"LocationEdge",
		nodes:"Location",
		pageInfo:"PageInfo"
	},
	LocationDeactivatePayload:{
		location:"Location",
		locationDeactivateUserErrors:"LocationDeactivateUserError"
	},
	LocationDeactivateUserError:{
		code:"LocationDeactivateUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationDeletePayload:{
		deletedLocationId:"ID",
		locationDeleteUserErrors:"LocationDeleteUserError"
	},
	LocationDeleteUserError:{
		code:"LocationDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationEdge:{
		cursor:"String",
		node:"Location"
	},
	LocationEditPayload:{
		location:"Location",
		userErrors:"LocationEditUserError"
	},
	LocationEditUserError:{
		code:"LocationEditUserErrorCode",
		field:"String",
		message:"String"
	},
	LocationLocalPickupDisablePayload:{
		locationId:"ID",
		userErrors:"DeliveryLocationLocalPickupSettingsError"
	},
	LocationLocalPickupEnablePayload:{
		localPickupSettings:"DeliveryLocalPickupSettings",
		userErrors:"DeliveryLocationLocalPickupSettingsError"
	},
	LocationSnapshot:{
		address:"LocationAddress",
		location:"Location",
		name:"String",
		snapshottedAt:"DateTime"
	},
	LocationSuggestedAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		country:"String",
		countryCode:"CountryCode",
		formatted:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	LocationsCondition:{
		applicationLevel:"MarketConditionApplicationType",
		locations:"LocationConnection"
	},
	MailingAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		coordinatesValidated:"Boolean",
		country:"String",
		countryCode:"String",
		countryCodeV2:"CountryCode",
		firstName:"String",
		formatted:"String",
		formattedArea:"String",
		id:"ID",
		lastName:"String",
		latitude:"Float",
		longitude:"Float",
		name:"String",
		phone:"String",
		province:"String",
		provinceCode:"String",
		timeZone:"String",
		validationResultSummary:"MailingAddressValidationResult",
		zip:"String"
	},
	MailingAddressConnection:{
		edges:"MailingAddressEdge",
		nodes:"MailingAddress",
		pageInfo:"PageInfo"
	},
	MailingAddressEdge:{
		cursor:"String",
		node:"MailingAddress"
	},
	ManualDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		description:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	Market:{
		assignedCustomization:"Boolean",
		catalogs:"MarketCatalogConnection",
		catalogsCount:"Count",
		conditions:"MarketConditions",
		currencySettings:"MarketCurrencySettings",
		enabled:"Boolean",
		handle:"String",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		priceInclusions:"MarketPriceInclusions",
		priceList:"PriceList",
		primary:"Boolean",
		regions:"MarketRegionConnection",
		status:"MarketStatus",
		type:"MarketType",
		webPresence:"MarketWebPresence",
		webPresences:"MarketWebPresenceConnection"
	},
	MarketCatalog:{
		id:"ID",
		markets:"MarketConnection",
		marketsCount:"Count",
		operations:"ResourceOperation",
		priceList:"PriceList",
		publication:"Publication",
		status:"CatalogStatus",
		title:"String"
	},
	MarketCatalogConnection:{
		edges:"MarketCatalogEdge",
		nodes:"MarketCatalog",
		pageInfo:"PageInfo"
	},
	MarketCatalogEdge:{
		cursor:"String",
		node:"MarketCatalog"
	},
	MarketConditions:{
		companyLocationsCondition:"CompanyLocationsCondition",
		conditionTypes:"MarketConditionType",
		locationsCondition:"LocationsCondition",
		regionsCondition:"RegionsCondition"
	},
	MarketConnection:{
		edges:"MarketEdge",
		nodes:"Market",
		pageInfo:"PageInfo"
	},
	MarketCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketCurrencySettings:{
		baseCurrency:"CurrencySetting",
		localCurrencies:"Boolean",
		roundingEnabled:"Boolean"
	},
	MarketCurrencySettingsUpdatePayload:{
		market:"Market",
		userErrors:"MarketCurrencySettingsUserError"
	},
	MarketCurrencySettingsUserError:{
		code:"MarketCurrencySettingsUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketDeletePayload:{
		deletedId:"ID",
		userErrors:"MarketUserError"
	},
	MarketEdge:{
		cursor:"String",
		node:"Market"
	},
	MarketLocalizableContent:{
		digest:"String",
		key:"String",
		value:"String"
	},
	MarketLocalizableResource:{
		marketLocalizableContent:"MarketLocalizableContent",
		marketLocalizations:"MarketLocalization",
		resourceId:"ID"
	},
	MarketLocalizableResourceConnection:{
		edges:"MarketLocalizableResourceEdge",
		nodes:"MarketLocalizableResource",
		pageInfo:"PageInfo"
	},
	MarketLocalizableResourceEdge:{
		cursor:"String",
		node:"MarketLocalizableResource"
	},
	MarketLocalization:{
		key:"String",
		market:"Market",
		outdated:"Boolean",
		updatedAt:"DateTime",
		value:"String"
	},
	MarketLocalizationsRegisterPayload:{
		marketLocalizations:"MarketLocalization",
		userErrors:"TranslationUserError"
	},
	MarketLocalizationsRemovePayload:{
		marketLocalizations:"MarketLocalization",
		userErrors:"TranslationUserError"
	},
	MarketPriceInclusions:{
		inclusiveDutiesPricingStrategy:"InclusiveDutiesPricingStrategy",
		inclusiveTaxPricingStrategy:"InclusiveTaxPricingStrategy"
	},
	MarketRegion:{
		"...on MarketRegionCountry": "MarketRegionCountry",
		id:"ID",
		name:"String"
	},
	MarketRegionConnection:{
		edges:"MarketRegionEdge",
		nodes:"MarketRegion",
		pageInfo:"PageInfo"
	},
	MarketRegionCountry:{
		code:"CountryCode",
		currency:"CurrencySetting",
		id:"ID",
		name:"String"
	},
	MarketRegionDeletePayload:{
		deletedId:"ID",
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketRegionEdge:{
		cursor:"String",
		node:"MarketRegion"
	},
	MarketRegionsCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketRegionsDeletePayload:{
		deletedIds:"ID",
		userErrors:"MarketUserError"
	},
	MarketUpdatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketUserError:{
		code:"MarketUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketWebPresence:{
		alternateLocales:"ShopLocale",
		defaultLocale:"ShopLocale",
		domain:"Domain",
		id:"ID",
		market:"Market",
		markets:"MarketConnection",
		rootUrls:"MarketWebPresenceRootUrl",
		subfolderSuffix:"String"
	},
	MarketWebPresenceConnection:{
		edges:"MarketWebPresenceEdge",
		nodes:"MarketWebPresence",
		pageInfo:"PageInfo"
	},
	MarketWebPresenceCreatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketWebPresenceDeletePayload:{
		deletedId:"ID",
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketWebPresenceEdge:{
		cursor:"String",
		node:"MarketWebPresence"
	},
	MarketWebPresenceRootUrl:{
		locale:"String",
		url:"URL"
	},
	MarketWebPresenceUpdatePayload:{
		market:"Market",
		userErrors:"MarketUserError"
	},
	MarketingActivitiesDeleteAllExternalPayload:{
		job:"Job",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivity:{
		activityListUrl:"URL",
		adSpend:"MoneyV2",
		app:"App",
		appErrors:"MarketingActivityExtensionAppErrors",
		budget:"MarketingBudget",
		createdAt:"DateTime",
		formData:"String",
		hierarchyLevel:"MarketingActivityHierarchyLevel",
		id:"ID",
		inMainWorkflowVersion:"Boolean",
		isExternal:"Boolean",
		marketingChannel:"MarketingChannel",
		marketingChannelType:"MarketingChannel",
		marketingEvent:"MarketingEvent",
		parentActivityId:"ID",
		parentRemoteId:"String",
		sourceAndMedium:"String",
		status:"MarketingActivityStatus",
		statusBadgeType:"MarketingActivityStatusBadgeType",
		statusBadgeTypeV2:"BadgeType",
		statusLabel:"String",
		statusTransitionedAt:"DateTime",
		tactic:"MarketingTactic",
		targetStatus:"MarketingActivityStatus",
		title:"String",
		updatedAt:"DateTime",
		urlParameterValue:"String",
		utmParameters:"UTMParameters"
	},
	MarketingActivityConnection:{
		edges:"MarketingActivityEdge",
		nodes:"MarketingActivity",
		pageInfo:"PageInfo"
	},
	MarketingActivityCreateExternalPayload:{
		marketingActivity:"MarketingActivity",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityCreatePayload:{
		marketingActivity:"MarketingActivity",
		redirectPath:"String",
		userErrors:"UserError"
	},
	MarketingActivityDeleteExternalPayload:{
		deletedMarketingActivityId:"ID",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityEdge:{
		cursor:"String",
		node:"MarketingActivity"
	},
	MarketingActivityExtensionAppErrors:{
		code:"MarketingActivityExtensionAppErrorCode",
		userErrors:"UserError"
	},
	MarketingActivityUpdateExternalPayload:{
		marketingActivity:"MarketingActivity",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityUpdatePayload:{
		marketingActivity:"MarketingActivity",
		redirectPath:"String",
		userErrors:"UserError"
	},
	MarketingActivityUpsertExternalPayload:{
		marketingActivity:"MarketingActivity",
		userErrors:"MarketingActivityUserError"
	},
	MarketingActivityUserError:{
		code:"MarketingActivityUserErrorCode",
		field:"String",
		message:"String"
	},
	MarketingBudget:{
		budgetType:"MarketingBudgetBudgetType",
		total:"MoneyV2"
	},
	MarketingEngagement:{
		adSpend:"MoneyV2",
		channelHandle:"String",
		clicksCount:"Int",
		commentsCount:"Int",
		complaintsCount:"Int",
		failsCount:"Int",
		favoritesCount:"Int",
		firstTimeCustomers:"Decimal",
		impressionsCount:"Int",
		isCumulative:"Boolean",
		marketingActivity:"MarketingActivity",
		occurredOn:"Date",
		orders:"Decimal",
		returningCustomers:"Decimal",
		sales:"MoneyV2",
		sendsCount:"Int",
		sessionsCount:"Int",
		sharesCount:"Int",
		uniqueClicksCount:"Int",
		uniqueViewsCount:"Int",
		unsubscribesCount:"Int",
		utcOffset:"UtcOffset",
		viewsCount:"Int"
	},
	MarketingEngagementCreatePayload:{
		marketingEngagement:"MarketingEngagement",
		userErrors:"MarketingActivityUserError"
	},
	MarketingEngagementsDeletePayload:{
		result:"String",
		userErrors:"MarketingActivityUserError"
	},
	MarketingEvent:{
		app:"App",
		channel:"MarketingChannel",
		channelHandle:"String",
		description:"String",
		endedAt:"DateTime",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		manageUrl:"URL",
		marketingChannelType:"MarketingChannel",
		previewUrl:"URL",
		remoteId:"String",
		scheduledToEndAt:"DateTime",
		sourceAndMedium:"String",
		startedAt:"DateTime",
		targetTypeDisplayText:"String",
		type:"MarketingTactic",
		utmCampaign:"String",
		utmMedium:"String",
		utmSource:"String"
	},
	MarketingEventConnection:{
		edges:"MarketingEventEdge",
		nodes:"MarketingEvent",
		pageInfo:"PageInfo"
	},
	MarketingEventEdge:{
		cursor:"String",
		node:"MarketingEvent"
	},
	MarketsB2BEntitlement:{
		catalogs:"MarketsCatalogsEntitlement",
		enabled:"Boolean"
	},
	MarketsCatalogsEntitlement:{
		enabled:"Boolean"
	},
	MarketsRegionsEntitlement:{
		catalogs:"MarketsCatalogsEntitlement",
		enabled:"Boolean"
	},
	MarketsResolvedValues:{
		catalogs:"MarketCatalogConnection",
		currencyCode:"CurrencyCode",
		priceInclusivity:"ResolvedPriceInclusivity",
		webPresences:"MarketWebPresenceConnection"
	},
	MarketsRetailEntitlement:{
		catalogs:"MarketsCatalogsEntitlement",
		enabled:"Boolean"
	},
	MarketsThemesEntitlement:{
		enabled:"Boolean"
	},
	MarketsType:{
		b2b:"MarketsB2BEntitlement",
		regions:"MarketsRegionsEntitlement",
		retail:"MarketsRetailEntitlement",
		themes:"MarketsThemesEntitlement"
	},
	Media:{
		"...on ExternalVideo": "ExternalVideo",
		"...on MediaImage": "MediaImage",
		"...on Model3d": "Model3d",
		"...on Video": "Video",
		alt:"String",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		preview:"MediaPreviewImage",
		status:"MediaStatus"
	},
	MediaConnection:{
		edges:"MediaEdge",
		nodes:"Media",
		pageInfo:"PageInfo"
	},
	MediaEdge:{
		cursor:"String",
		node:"Media"
	},
	MediaError:{
		code:"MediaErrorCode",
		details:"String",
		message:"String"
	},
	MediaImage:{
		alt:"String",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		id:"ID",
		image:"Image",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		metafield:"Metafield",
		metafields:"MetafieldConnection",
		mimeType:"String",
		originalSource:"MediaImageOriginalSource",
		preview:"MediaPreviewImage",
		status:"MediaStatus",
		translations:"Translation",
		updatedAt:"DateTime"
	},
	MediaImageOriginalSource:{
		fileSize:"Int",
		url:"URL"
	},
	MediaPreviewImage:{
		image:"Image",
		status:"MediaPreviewImageStatus"
	},
	MediaUserError:{
		code:"MediaUserErrorCode",
		field:"String",
		message:"String"
	},
	MediaWarning:{
		code:"MediaWarningCode",
		message:"String"
	},
	Menu:{
		handle:"String",
		id:"ID",
		isDefault:"Boolean",
		items:"MenuItem",
		title:"String",
		translations:"Translation"
	},
	MenuConnection:{
		edges:"MenuEdge",
		nodes:"Menu",
		pageInfo:"PageInfo"
	},
	MenuCreatePayload:{
		menu:"Menu",
		userErrors:"MenuCreateUserError"
	},
	MenuCreateUserError:{
		code:"MenuCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	MenuDeletePayload:{
		deletedMenuId:"ID",
		userErrors:"MenuDeleteUserError"
	},
	MenuDeleteUserError:{
		code:"MenuDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	MenuEdge:{
		cursor:"String",
		node:"Menu"
	},
	MenuItem:{
		id:"ID",
		items:"MenuItem",
		resourceId:"ID",
		tags:"String",
		title:"String",
		type:"MenuItemType",
		url:"String"
	},
	MenuUpdatePayload:{
		menu:"Menu",
		userErrors:"MenuUpdateUserError"
	},
	MenuUpdateUserError:{
		code:"MenuUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	MerchantApprovalSignals:{
		identityVerified:"Boolean",
		verifiedByShopify:"Boolean",
		verifiedByShopifyTier:"String"
	},
	Metafield:{
		compareDigest:"String",
		createdAt:"DateTime",
		definition:"MetafieldDefinition",
		description:"String",
		id:"ID",
		jsonValue:"JSON",
		key:"String",
		legacyResourceId:"UnsignedInt64",
		namespace:"String",
		owner:"HasMetafields",
		ownerType:"MetafieldOwnerType",
		reference:"MetafieldReference",
		references:"MetafieldReferenceConnection",
		type:"String",
		updatedAt:"DateTime",
		value:"String"
	},
	MetafieldAccess:{
		admin:"MetafieldAdminAccess",
		customerAccount:"MetafieldCustomerAccountAccess",
		storefront:"MetafieldStorefrontAccess"
	},
	MetafieldCapabilities:{
		adminFilterable:"MetafieldCapabilityAdminFilterable",
		smartCollectionCondition:"MetafieldCapabilitySmartCollectionCondition",
		uniqueValues:"MetafieldCapabilityUniqueValues"
	},
	MetafieldCapabilityAdminFilterable:{
		eligible:"Boolean",
		enabled:"Boolean",
		status:"MetafieldDefinitionAdminFilterStatus"
	},
	MetafieldCapabilitySmartCollectionCondition:{
		eligible:"Boolean",
		enabled:"Boolean"
	},
	MetafieldCapabilityUniqueValues:{
		eligible:"Boolean",
		enabled:"Boolean"
	},
	MetafieldConnection:{
		edges:"MetafieldEdge",
		nodes:"Metafield",
		pageInfo:"PageInfo"
	},
	MetafieldDefinition:{
		access:"MetafieldAccess",
		capabilities:"MetafieldCapabilities",
		constraints:"MetafieldDefinitionConstraints",
		description:"String",
		id:"ID",
		key:"String",
		metafields:"MetafieldConnection",
		metafieldsCount:"Int",
		name:"String",
		namespace:"String",
		ownerType:"MetafieldOwnerType",
		pinnedPosition:"Int",
		standardTemplate:"StandardMetafieldDefinitionTemplate",
		type:"MetafieldDefinitionType",
		useAsCollectionCondition:"Boolean",
		validationStatus:"MetafieldDefinitionValidationStatus",
		validations:"MetafieldDefinitionValidation"
	},
	MetafieldDefinitionConnection:{
		edges:"MetafieldDefinitionEdge",
		nodes:"MetafieldDefinition",
		pageInfo:"PageInfo"
	},
	MetafieldDefinitionConstraintValue:{
		value:"String"
	},
	MetafieldDefinitionConstraintValueConnection:{
		edges:"MetafieldDefinitionConstraintValueEdge",
		nodes:"MetafieldDefinitionConstraintValue",
		pageInfo:"PageInfo"
	},
	MetafieldDefinitionConstraintValueEdge:{
		cursor:"String",
		node:"MetafieldDefinitionConstraintValue"
	},
	MetafieldDefinitionConstraints:{
		key:"String",
		values:"MetafieldDefinitionConstraintValueConnection"
	},
	MetafieldDefinitionCreatePayload:{
		createdDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionCreateUserError"
	},
	MetafieldDefinitionCreateUserError:{
		code:"MetafieldDefinitionCreateUserErrorCode",
		elementIndex:"Int",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionDeletePayload:{
		deletedDefinition:"MetafieldDefinitionIdentifier",
		deletedDefinitionId:"ID",
		userErrors:"MetafieldDefinitionDeleteUserError"
	},
	MetafieldDefinitionDeleteUserError:{
		code:"MetafieldDefinitionDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionEdge:{
		cursor:"String",
		node:"MetafieldDefinition"
	},
	MetafieldDefinitionIdentifier:{
		key:"String",
		namespace:"String",
		ownerType:"MetafieldOwnerType"
	},
	MetafieldDefinitionPinPayload:{
		pinnedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionPinUserError"
	},
	MetafieldDefinitionPinUserError:{
		code:"MetafieldDefinitionPinUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionSupportedValidation:{
		name:"String",
		type:"String"
	},
	MetafieldDefinitionType:{
		category:"String",
		name:"String",
		supportedValidations:"MetafieldDefinitionSupportedValidation",
		supportsDefinitionMigrations:"Boolean",
		valueType:"MetafieldValueType"
	},
	MetafieldDefinitionUnpinPayload:{
		unpinnedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionUnpinUserError"
	},
	MetafieldDefinitionUnpinUserError:{
		code:"MetafieldDefinitionUnpinUserErrorCode",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionUpdatePayload:{
		updatedDefinition:"MetafieldDefinition",
		userErrors:"MetafieldDefinitionUpdateUserError",
		validationJob:"Job"
	},
	MetafieldDefinitionUpdateUserError:{
		code:"MetafieldDefinitionUpdateUserErrorCode",
		elementIndex:"Int",
		field:"String",
		message:"String"
	},
	MetafieldDefinitionValidation:{
		name:"String",
		type:"String",
		value:"String"
	},
	MetafieldEdge:{
		cursor:"String",
		node:"Metafield"
	},
	MetafieldIdentifier:{
		key:"String",
		namespace:"String",
		ownerId:"ID"
	},
	MetafieldReference:{
		"...on Article":"Article",
		"...on Collection":"Collection",
		"...on Company":"Company",
		"...on Customer":"Customer",
		"...on GenericFile":"GenericFile",
		"...on MediaImage":"MediaImage",
		"...on Metaobject":"Metaobject",
		"...on Model3d":"Model3d",
		"...on Order":"Order",
		"...on Page":"Page",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant",
		"...on TaxonomyValue":"TaxonomyValue",
		"...on Video":"Video"
	},
	MetafieldReferenceConnection:{
		edges:"MetafieldReferenceEdge",
		nodes:"MetafieldReference",
		pageInfo:"PageInfo"
	},
	MetafieldReferenceEdge:{
		cursor:"String",
		node:"MetafieldReference"
	},
	MetafieldReferencer:{
		"...on AppInstallation":"AppInstallation",
		"...on Article":"Article",
		"...on Blog":"Blog",
		"...on Collection":"Collection",
		"...on Company":"Company",
		"...on CompanyLocation":"CompanyLocation",
		"...on Customer":"Customer",
		"...on DeliveryCustomization":"DeliveryCustomization",
		"...on DiscountAutomaticNode":"DiscountAutomaticNode",
		"...on DiscountCodeNode":"DiscountCodeNode",
		"...on DiscountNode":"DiscountNode",
		"...on DraftOrder":"DraftOrder",
		"...on FulfillmentOrder":"FulfillmentOrder",
		"...on Location":"Location",
		"...on Market":"Market",
		"...on Metaobject":"Metaobject",
		"...on Order":"Order",
		"...on Page":"Page",
		"...on PaymentCustomization":"PaymentCustomization",
		"...on Product":"Product",
		"...on ProductVariant":"ProductVariant",
		"...on Shop":"Shop"
	},
	MetafieldRelation:{
		key:"String",
		name:"String",
		namespace:"String",
		referencer:"MetafieldReferencer",
		target:"MetafieldReference"
	},
	MetafieldRelationConnection:{
		edges:"MetafieldRelationEdge",
		nodes:"MetafieldRelation",
		pageInfo:"PageInfo"
	},
	MetafieldRelationEdge:{
		cursor:"String",
		node:"MetafieldRelation"
	},
	MetafieldsDeletePayload:{
		deletedMetafields:"MetafieldIdentifier",
		userErrors:"UserError"
	},
	MetafieldsSetPayload:{
		metafields:"Metafield",
		userErrors:"MetafieldsSetUserError"
	},
	MetafieldsSetUserError:{
		code:"MetafieldsSetUserErrorCode",
		elementIndex:"Int",
		field:"String",
		message:"String"
	},
	Metaobject:{
		capabilities:"MetaobjectCapabilityData",
		createdBy:"App",
		createdByApp:"App",
		createdByStaff:"StaffMember",
		definition:"MetaobjectDefinition",
		displayName:"String",
		field:"MetaobjectField",
		fields:"MetaobjectField",
		handle:"String",
		id:"ID",
		referencedBy:"MetafieldRelationConnection",
		staffMember:"StaffMember",
		thumbnailField:"MetaobjectField",
		type:"String",
		updatedAt:"DateTime"
	},
	MetaobjectAccess:{
		admin:"MetaobjectAdminAccess",
		storefront:"MetaobjectStorefrontAccess"
	},
	MetaobjectBulkDeletePayload:{
		job:"Job",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectCapabilities:{
		onlineStore:"MetaobjectCapabilitiesOnlineStore",
		publishable:"MetaobjectCapabilitiesPublishable",
		renderable:"MetaobjectCapabilitiesRenderable",
		translatable:"MetaobjectCapabilitiesTranslatable"
	},
	MetaobjectCapabilitiesOnlineStore:{
		data:"MetaobjectCapabilityDefinitionDataOnlineStore",
		enabled:"Boolean"
	},
	MetaobjectCapabilitiesPublishable:{
		enabled:"Boolean"
	},
	MetaobjectCapabilitiesRenderable:{
		data:"MetaobjectCapabilityDefinitionDataRenderable",
		enabled:"Boolean"
	},
	MetaobjectCapabilitiesTranslatable:{
		enabled:"Boolean"
	},
	MetaobjectCapabilityData:{
		onlineStore:"MetaobjectCapabilityDataOnlineStore",
		publishable:"MetaobjectCapabilityDataPublishable"
	},
	MetaobjectCapabilityDataOnlineStore:{
		templateSuffix:"String"
	},
	MetaobjectCapabilityDataPublishable:{
		status:"MetaobjectStatus"
	},
	MetaobjectCapabilityDefinitionDataOnlineStore:{
		canCreateRedirects:"Boolean",
		urlHandle:"String"
	},
	MetaobjectCapabilityDefinitionDataRenderable:{
		metaDescriptionKey:"String",
		metaTitleKey:"String"
	},
	MetaobjectConnection:{
		edges:"MetaobjectEdge",
		nodes:"Metaobject",
		pageInfo:"PageInfo"
	},
	MetaobjectCreatePayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinition:{
		access:"MetaobjectAccess",
		capabilities:"MetaobjectCapabilities",
		createdByApp:"App",
		createdByStaff:"StaffMember",
		description:"String",
		displayNameKey:"String",
		fieldDefinitions:"MetaobjectFieldDefinition",
		hasThumbnailField:"Boolean",
		id:"ID",
		metaobjects:"MetaobjectConnection",
		metaobjectsCount:"Int",
		name:"String",
		standardTemplate:"StandardMetaobjectDefinitionTemplate",
		type:"String"
	},
	MetaobjectDefinitionConnection:{
		edges:"MetaobjectDefinitionEdge",
		nodes:"MetaobjectDefinition",
		pageInfo:"PageInfo"
	},
	MetaobjectDefinitionCreatePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinitionDeletePayload:{
		deletedId:"ID",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDefinitionEdge:{
		cursor:"String",
		node:"MetaobjectDefinition"
	},
	MetaobjectDefinitionUpdatePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectDeletePayload:{
		deletedId:"ID",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectEdge:{
		cursor:"String",
		node:"Metaobject"
	},
	MetaobjectField:{
		definition:"MetaobjectFieldDefinition",
		jsonValue:"JSON",
		key:"String",
		reference:"MetafieldReference",
		references:"MetafieldReferenceConnection",
		thumbnail:"MetaobjectThumbnail",
		type:"String",
		value:"String"
	},
	MetaobjectFieldCapabilityAdminFilterable:{
		eligible:"Boolean",
		enabled:"Boolean"
	},
	MetaobjectFieldDefinition:{
		capabilities:"MetaobjectFieldDefinitionCapabilities",
		description:"String",
		key:"String",
		name:"String",
		required:"Boolean",
		type:"MetafieldDefinitionType",
		validations:"MetafieldDefinitionValidation"
	},
	MetaobjectFieldDefinitionCapabilities:{
		adminFilterable:"MetaobjectFieldCapabilityAdminFilterable"
	},
	MetaobjectThumbnail:{
		file:"File",
		hex:"String"
	},
	MetaobjectUpdatePayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectUpsertPayload:{
		metaobject:"Metaobject",
		userErrors:"MetaobjectUserError"
	},
	MetaobjectUserError:{
		code:"MetaobjectUserErrorCode",
		elementIndex:"Int",
		elementKey:"String",
		field:"String",
		message:"String"
	},
	MobilePlatformApplication:{
		"...on AndroidApplication":"AndroidApplication",
		"...on AppleApplication":"AppleApplication"
	},
	MobilePlatformApplicationConnection:{
		edges:"MobilePlatformApplicationEdge",
		nodes:"MobilePlatformApplication",
		pageInfo:"PageInfo"
	},
	MobilePlatformApplicationCreatePayload:{
		mobilePlatformApplication:"MobilePlatformApplication",
		userErrors:"MobilePlatformApplicationUserError"
	},
	MobilePlatformApplicationDeletePayload:{
		deletedMobilePlatformApplicationId:"ID",
		userErrors:"MobilePlatformApplicationUserError"
	},
	MobilePlatformApplicationEdge:{
		cursor:"String",
		node:"MobilePlatformApplication"
	},
	MobilePlatformApplicationUpdatePayload:{
		mobilePlatformApplication:"MobilePlatformApplication",
		userErrors:"MobilePlatformApplicationUserError"
	},
	MobilePlatformApplicationUserError:{
		code:"MobilePlatformApplicationUserErrorCode",
		field:"String",
		message:"String"
	},
	Model3d:{
		alt:"String",
		boundingBox:"Model3dBoundingBox",
		createdAt:"DateTime",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		filename:"String",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originalSource:"Model3dSource",
		preview:"MediaPreviewImage",
		sources:"Model3dSource",
		status:"MediaStatus",
		updatedAt:"DateTime"
	},
	Model3dBoundingBox:{
		size:"Vector3"
	},
	Model3dSource:{
		filesize:"Int",
		format:"String",
		mimeType:"String",
		url:"String"
	},
	Money: `scalar.Money` as const,
	MoneyBag:{
		presentmentMoney:"MoneyV2",
		shopMoney:"MoneyV2"
	},
	MoneyV2:{
		amount:"Decimal",
		currencyCode:"CurrencyCode"
	},
	Mutation:{
		abandonmentEmailStateUpdate:"AbandonmentEmailStateUpdatePayload",
		abandonmentUpdateActivitiesDeliveryStatuses:"AbandonmentUpdateActivitiesDeliveryStatusesPayload",
		appPurchaseOneTimeCreate:"AppPurchaseOneTimeCreatePayload",
		appRevokeAccessScopes:"AppRevokeAccessScopesPayload",
		appSubscriptionCancel:"AppSubscriptionCancelPayload",
		appSubscriptionCreate:"AppSubscriptionCreatePayload",
		appSubscriptionLineItemUpdate:"AppSubscriptionLineItemUpdatePayload",
		appSubscriptionTrialExtend:"AppSubscriptionTrialExtendPayload",
		appUninstall:"AppUninstallPayload",
		appUsageRecordCreate:"AppUsageRecordCreatePayload",
		articleCreate:"ArticleCreatePayload",
		articleDelete:"ArticleDeletePayload",
		articleUpdate:"ArticleUpdatePayload",
		backupRegionUpdate:"BackupRegionUpdatePayload",
		blogCreate:"BlogCreatePayload",
		blogDelete:"BlogDeletePayload",
		blogUpdate:"BlogUpdatePayload",
		bulkOperationCancel:"BulkOperationCancelPayload",
		bulkOperationRunMutation:"BulkOperationRunMutationPayload",
		bulkOperationRunQuery:"BulkOperationRunQueryPayload",
		bulkProductResourceFeedbackCreate:"BulkProductResourceFeedbackCreatePayload",
		carrierServiceCreate:"CarrierServiceCreatePayload",
		carrierServiceDelete:"CarrierServiceDeletePayload",
		carrierServiceUpdate:"CarrierServiceUpdatePayload",
		cartTransformCreate:"CartTransformCreatePayload",
		cartTransformDelete:"CartTransformDeletePayload",
		catalogContextUpdate:"CatalogContextUpdatePayload",
		catalogCreate:"CatalogCreatePayload",
		catalogDelete:"CatalogDeletePayload",
		catalogUpdate:"CatalogUpdatePayload",
		checkoutBrandingUpsert:"CheckoutBrandingUpsertPayload",
		collectionAddProducts:"CollectionAddProductsPayload",
		collectionAddProductsV2:"CollectionAddProductsV2Payload",
		collectionCreate:"CollectionCreatePayload",
		collectionDelete:"CollectionDeletePayload",
		collectionPublish:"CollectionPublishPayload",
		collectionRemoveProducts:"CollectionRemoveProductsPayload",
		collectionReorderProducts:"CollectionReorderProductsPayload",
		collectionUnpublish:"CollectionUnpublishPayload",
		collectionUpdate:"CollectionUpdatePayload",
		combinedListingUpdate:"CombinedListingUpdatePayload",
		commentApprove:"CommentApprovePayload",
		commentDelete:"CommentDeletePayload",
		commentNotSpam:"CommentNotSpamPayload",
		commentSpam:"CommentSpamPayload",
		companiesDelete:"CompaniesDeletePayload",
		companyAddressDelete:"CompanyAddressDeletePayload",
		companyAssignCustomerAsContact:"CompanyAssignCustomerAsContactPayload",
		companyAssignMainContact:"CompanyAssignMainContactPayload",
		companyContactAssignRole:"CompanyContactAssignRolePayload",
		companyContactAssignRoles:"CompanyContactAssignRolesPayload",
		companyContactCreate:"CompanyContactCreatePayload",
		companyContactDelete:"CompanyContactDeletePayload",
		companyContactRemoveFromCompany:"CompanyContactRemoveFromCompanyPayload",
		companyContactRevokeRole:"CompanyContactRevokeRolePayload",
		companyContactRevokeRoles:"CompanyContactRevokeRolesPayload",
		companyContactSendWelcomeEmail:"CompanyContactSendWelcomeEmailPayload",
		companyContactUpdate:"CompanyContactUpdatePayload",
		companyContactsDelete:"CompanyContactsDeletePayload",
		companyCreate:"CompanyCreatePayload",
		companyDelete:"CompanyDeletePayload",
		companyLocationAssignAddress:"CompanyLocationAssignAddressPayload",
		companyLocationAssignRoles:"CompanyLocationAssignRolesPayload",
		companyLocationAssignStaffMembers:"CompanyLocationAssignStaffMembersPayload",
		companyLocationAssignTaxExemptions:"CompanyLocationAssignTaxExemptionsPayload",
		companyLocationCreate:"CompanyLocationCreatePayload",
		companyLocationCreateTaxRegistration:"CompanyLocationCreateTaxRegistrationPayload",
		companyLocationDelete:"CompanyLocationDeletePayload",
		companyLocationRemoveStaffMembers:"CompanyLocationRemoveStaffMembersPayload",
		companyLocationRevokeRoles:"CompanyLocationRevokeRolesPayload",
		companyLocationRevokeTaxExemptions:"CompanyLocationRevokeTaxExemptionsPayload",
		companyLocationRevokeTaxRegistration:"CompanyLocationRevokeTaxRegistrationPayload",
		companyLocationTaxSettingsUpdate:"CompanyLocationTaxSettingsUpdatePayload",
		companyLocationUpdate:"CompanyLocationUpdatePayload",
		companyLocationsDelete:"CompanyLocationsDeletePayload",
		companyRevokeMainContact:"CompanyRevokeMainContactPayload",
		companyUpdate:"CompanyUpdatePayload",
		consentPolicyUpdate:"ConsentPolicyUpdatePayload",
		customerAddTaxExemptions:"CustomerAddTaxExemptionsPayload",
		customerAddressCreate:"CustomerAddressCreatePayload",
		customerAddressDelete:"CustomerAddressDeletePayload",
		customerAddressUpdate:"CustomerAddressUpdatePayload",
		customerCancelDataErasure:"CustomerCancelDataErasurePayload",
		customerCreate:"CustomerCreatePayload",
		customerDelete:"CustomerDeletePayload",
		customerEmailMarketingConsentUpdate:"CustomerEmailMarketingConsentUpdatePayload",
		customerGenerateAccountActivationUrl:"CustomerGenerateAccountActivationUrlPayload",
		customerMerge:"CustomerMergePayload",
		customerPaymentMethodCreateFromDuplicationData:"CustomerPaymentMethodCreateFromDuplicationDataPayload",
		customerPaymentMethodCreditCardCreate:"CustomerPaymentMethodCreditCardCreatePayload",
		customerPaymentMethodCreditCardUpdate:"CustomerPaymentMethodCreditCardUpdatePayload",
		customerPaymentMethodGetDuplicationData:"CustomerPaymentMethodGetDuplicationDataPayload",
		customerPaymentMethodGetUpdateUrl:"CustomerPaymentMethodGetUpdateUrlPayload",
		customerPaymentMethodPaypalBillingAgreementCreate:"CustomerPaymentMethodPaypalBillingAgreementCreatePayload",
		customerPaymentMethodPaypalBillingAgreementUpdate:"CustomerPaymentMethodPaypalBillingAgreementUpdatePayload",
		customerPaymentMethodRemoteCreate:"CustomerPaymentMethodRemoteCreatePayload",
		customerPaymentMethodRevoke:"CustomerPaymentMethodRevokePayload",
		customerPaymentMethodSendUpdateEmail:"CustomerPaymentMethodSendUpdateEmailPayload",
		customerRemoveTaxExemptions:"CustomerRemoveTaxExemptionsPayload",
		customerReplaceTaxExemptions:"CustomerReplaceTaxExemptionsPayload",
		customerRequestDataErasure:"CustomerRequestDataErasurePayload",
		customerSegmentMembersQueryCreate:"CustomerSegmentMembersQueryCreatePayload",
		customerSendAccountInviteEmail:"CustomerSendAccountInviteEmailPayload",
		customerSet:"CustomerSetPayload",
		customerSmsMarketingConsentUpdate:"CustomerSmsMarketingConsentUpdatePayload",
		customerUpdate:"CustomerUpdatePayload",
		customerUpdateDefaultAddress:"CustomerUpdateDefaultAddressPayload",
		dataSaleOptOut:"DataSaleOptOutPayload",
		delegateAccessTokenCreate:"DelegateAccessTokenCreatePayload",
		delegateAccessTokenDestroy:"DelegateAccessTokenDestroyPayload",
		deliveryCustomizationActivation:"DeliveryCustomizationActivationPayload",
		deliveryCustomizationCreate:"DeliveryCustomizationCreatePayload",
		deliveryCustomizationDelete:"DeliveryCustomizationDeletePayload",
		deliveryCustomizationUpdate:"DeliveryCustomizationUpdatePayload",
		deliveryProfileCreate:"DeliveryProfileCreatePayload",
		deliveryProfileRemove:"DeliveryProfileRemovePayload",
		deliveryProfileUpdate:"DeliveryProfileUpdatePayload",
		deliveryPromiseParticipantsUpdate:"DeliveryPromiseParticipantsUpdatePayload",
		deliveryPromiseProviderUpsert:"DeliveryPromiseProviderUpsertPayload",
		deliverySettingUpdate:"DeliverySettingUpdatePayload",
		deliveryShippingOriginAssign:"DeliveryShippingOriginAssignPayload",
		discountAutomaticActivate:"DiscountAutomaticActivatePayload",
		discountAutomaticAppCreate:"DiscountAutomaticAppCreatePayload",
		discountAutomaticAppUpdate:"DiscountAutomaticAppUpdatePayload",
		discountAutomaticBasicCreate:"DiscountAutomaticBasicCreatePayload",
		discountAutomaticBasicUpdate:"DiscountAutomaticBasicUpdatePayload",
		discountAutomaticBulkDelete:"DiscountAutomaticBulkDeletePayload",
		discountAutomaticBxgyCreate:"DiscountAutomaticBxgyCreatePayload",
		discountAutomaticBxgyUpdate:"DiscountAutomaticBxgyUpdatePayload",
		discountAutomaticDeactivate:"DiscountAutomaticDeactivatePayload",
		discountAutomaticDelete:"DiscountAutomaticDeletePayload",
		discountAutomaticFreeShippingCreate:"DiscountAutomaticFreeShippingCreatePayload",
		discountAutomaticFreeShippingUpdate:"DiscountAutomaticFreeShippingUpdatePayload",
		discountCodeActivate:"DiscountCodeActivatePayload",
		discountCodeAppCreate:"DiscountCodeAppCreatePayload",
		discountCodeAppUpdate:"DiscountCodeAppUpdatePayload",
		discountCodeBasicCreate:"DiscountCodeBasicCreatePayload",
		discountCodeBasicUpdate:"DiscountCodeBasicUpdatePayload",
		discountCodeBulkActivate:"DiscountCodeBulkActivatePayload",
		discountCodeBulkDeactivate:"DiscountCodeBulkDeactivatePayload",
		discountCodeBulkDelete:"DiscountCodeBulkDeletePayload",
		discountCodeBxgyCreate:"DiscountCodeBxgyCreatePayload",
		discountCodeBxgyUpdate:"DiscountCodeBxgyUpdatePayload",
		discountCodeDeactivate:"DiscountCodeDeactivatePayload",
		discountCodeDelete:"DiscountCodeDeletePayload",
		discountCodeFreeShippingCreate:"DiscountCodeFreeShippingCreatePayload",
		discountCodeFreeShippingUpdate:"DiscountCodeFreeShippingUpdatePayload",
		discountCodeRedeemCodeBulkDelete:"DiscountCodeRedeemCodeBulkDeletePayload",
		discountRedeemCodeBulkAdd:"DiscountRedeemCodeBulkAddPayload",
		disputeEvidenceUpdate:"DisputeEvidenceUpdatePayload",
		draftOrderBulkAddTags:"DraftOrderBulkAddTagsPayload",
		draftOrderBulkDelete:"DraftOrderBulkDeletePayload",
		draftOrderBulkRemoveTags:"DraftOrderBulkRemoveTagsPayload",
		draftOrderCalculate:"DraftOrderCalculatePayload",
		draftOrderComplete:"DraftOrderCompletePayload",
		draftOrderCreate:"DraftOrderCreatePayload",
		draftOrderCreateFromOrder:"DraftOrderCreateFromOrderPayload",
		draftOrderDelete:"DraftOrderDeletePayload",
		draftOrderDuplicate:"DraftOrderDuplicatePayload",
		draftOrderInvoicePreview:"DraftOrderInvoicePreviewPayload",
		draftOrderInvoiceSend:"DraftOrderInvoiceSendPayload",
		draftOrderUpdate:"DraftOrderUpdatePayload",
		eventBridgeServerPixelUpdate:"EventBridgeServerPixelUpdatePayload",
		eventBridgeWebhookSubscriptionCreate:"EventBridgeWebhookSubscriptionCreatePayload",
		eventBridgeWebhookSubscriptionUpdate:"EventBridgeWebhookSubscriptionUpdatePayload",
		fileAcknowledgeUpdateFailed:"FileAcknowledgeUpdateFailedPayload",
		fileCreate:"FileCreatePayload",
		fileDelete:"FileDeletePayload",
		fileUpdate:"FileUpdatePayload",
		flowGenerateSignature:"FlowGenerateSignaturePayload",
		flowTriggerReceive:"FlowTriggerReceivePayload",
		fulfillmentCancel:"FulfillmentCancelPayload",
		fulfillmentConstraintRuleCreate:"FulfillmentConstraintRuleCreatePayload",
		fulfillmentConstraintRuleDelete:"FulfillmentConstraintRuleDeletePayload",
		fulfillmentConstraintRuleUpdate:"FulfillmentConstraintRuleUpdatePayload",
		fulfillmentCreate:"FulfillmentCreatePayload",
		fulfillmentCreateV2:"FulfillmentCreateV2Payload",
		fulfillmentEventCreate:"FulfillmentEventCreatePayload",
		fulfillmentOrderAcceptCancellationRequest:"FulfillmentOrderAcceptCancellationRequestPayload",
		fulfillmentOrderAcceptFulfillmentRequest:"FulfillmentOrderAcceptFulfillmentRequestPayload",
		fulfillmentOrderCancel:"FulfillmentOrderCancelPayload",
		fulfillmentOrderClose:"FulfillmentOrderClosePayload",
		fulfillmentOrderHold:"FulfillmentOrderHoldPayload",
		fulfillmentOrderLineItemsPreparedForPickup:"FulfillmentOrderLineItemsPreparedForPickupPayload",
		fulfillmentOrderMerge:"FulfillmentOrderMergePayload",
		fulfillmentOrderMove:"FulfillmentOrderMovePayload",
		fulfillmentOrderOpen:"FulfillmentOrderOpenPayload",
		fulfillmentOrderRejectCancellationRequest:"FulfillmentOrderRejectCancellationRequestPayload",
		fulfillmentOrderRejectFulfillmentRequest:"FulfillmentOrderRejectFulfillmentRequestPayload",
		fulfillmentOrderReleaseHold:"FulfillmentOrderReleaseHoldPayload",
		fulfillmentOrderReschedule:"FulfillmentOrderReschedulePayload",
		fulfillmentOrderSplit:"FulfillmentOrderSplitPayload",
		fulfillmentOrderSubmitCancellationRequest:"FulfillmentOrderSubmitCancellationRequestPayload",
		fulfillmentOrderSubmitFulfillmentRequest:"FulfillmentOrderSubmitFulfillmentRequestPayload",
		fulfillmentOrdersReroute:"FulfillmentOrdersReroutePayload",
		fulfillmentOrdersSetFulfillmentDeadline:"FulfillmentOrdersSetFulfillmentDeadlinePayload",
		fulfillmentServiceCreate:"FulfillmentServiceCreatePayload",
		fulfillmentServiceDelete:"FulfillmentServiceDeletePayload",
		fulfillmentServiceUpdate:"FulfillmentServiceUpdatePayload",
		fulfillmentTrackingInfoUpdate:"FulfillmentTrackingInfoUpdatePayload",
		fulfillmentTrackingInfoUpdateV2:"FulfillmentTrackingInfoUpdateV2Payload",
		giftCardCreate:"GiftCardCreatePayload",
		giftCardCredit:"GiftCardCreditPayload",
		giftCardDeactivate:"GiftCardDeactivatePayload",
		giftCardDebit:"GiftCardDebitPayload",
		giftCardSendNotificationToCustomer:"GiftCardSendNotificationToCustomerPayload",
		giftCardSendNotificationToRecipient:"GiftCardSendNotificationToRecipientPayload",
		giftCardUpdate:"GiftCardUpdatePayload",
		inventoryActivate:"InventoryActivatePayload",
		inventoryAdjustQuantities:"InventoryAdjustQuantitiesPayload",
		inventoryBulkToggleActivation:"InventoryBulkToggleActivationPayload",
		inventoryDeactivate:"InventoryDeactivatePayload",
		inventoryItemUpdate:"InventoryItemUpdatePayload",
		inventoryMoveQuantities:"InventoryMoveQuantitiesPayload",
		inventorySetOnHandQuantities:"InventorySetOnHandQuantitiesPayload",
		inventorySetQuantities:"InventorySetQuantitiesPayload",
		inventorySetScheduledChanges:"InventorySetScheduledChangesPayload",
		inventoryShipmentAddItems:"InventoryShipmentAddItemsPayload",
		inventoryShipmentCreate:"InventoryShipmentCreatePayload",
		inventoryShipmentCreateInTransit:"InventoryShipmentCreateInTransitPayload",
		inventoryShipmentDelete:"InventoryShipmentDeletePayload",
		inventoryShipmentMarkInTransit:"InventoryShipmentMarkInTransitPayload",
		inventoryShipmentReceive:"InventoryShipmentReceivePayload",
		inventoryShipmentRemoveItems:"InventoryShipmentRemoveItemsPayload",
		inventoryShipmentSetTracking:"InventoryShipmentSetTrackingPayload",
		inventoryShipmentUpdateItemQuantities:"InventoryShipmentUpdateItemQuantitiesPayload",
		inventoryTransferCancel:"InventoryTransferCancelPayload",
		inventoryTransferCreate:"InventoryTransferCreatePayload",
		inventoryTransferCreateAsReadyToShip:"InventoryTransferCreateAsReadyToShipPayload",
		inventoryTransferDelete:"InventoryTransferDeletePayload",
		inventoryTransferDuplicate:"InventoryTransferDuplicatePayload",
		inventoryTransferEdit:"InventoryTransferEditPayload",
		inventoryTransferMarkAsReadyToShip:"InventoryTransferMarkAsReadyToShipPayload",
		inventoryTransferRemoveItems:"InventoryTransferRemoveItemsPayload",
		inventoryTransferSetItems:"InventoryTransferSetItemsPayload",
		locationActivate:"LocationActivatePayload",
		locationAdd:"LocationAddPayload",
		locationDeactivate:"LocationDeactivatePayload",
		locationDelete:"LocationDeletePayload",
		locationEdit:"LocationEditPayload",
		locationLocalPickupDisable:"LocationLocalPickupDisablePayload",
		locationLocalPickupEnable:"LocationLocalPickupEnablePayload",
		marketCreate:"MarketCreatePayload",
		marketCurrencySettingsUpdate:"MarketCurrencySettingsUpdatePayload",
		marketDelete:"MarketDeletePayload",
		marketLocalizationsRegister:"MarketLocalizationsRegisterPayload",
		marketLocalizationsRemove:"MarketLocalizationsRemovePayload",
		marketRegionDelete:"MarketRegionDeletePayload",
		marketRegionsCreate:"MarketRegionsCreatePayload",
		marketRegionsDelete:"MarketRegionsDeletePayload",
		marketUpdate:"MarketUpdatePayload",
		marketWebPresenceCreate:"MarketWebPresenceCreatePayload",
		marketWebPresenceDelete:"MarketWebPresenceDeletePayload",
		marketWebPresenceUpdate:"MarketWebPresenceUpdatePayload",
		marketingActivitiesDeleteAllExternal:"MarketingActivitiesDeleteAllExternalPayload",
		marketingActivityCreate:"MarketingActivityCreatePayload",
		marketingActivityCreateExternal:"MarketingActivityCreateExternalPayload",
		marketingActivityDeleteExternal:"MarketingActivityDeleteExternalPayload",
		marketingActivityUpdate:"MarketingActivityUpdatePayload",
		marketingActivityUpdateExternal:"MarketingActivityUpdateExternalPayload",
		marketingActivityUpsertExternal:"MarketingActivityUpsertExternalPayload",
		marketingEngagementCreate:"MarketingEngagementCreatePayload",
		marketingEngagementsDelete:"MarketingEngagementsDeletePayload",
		menuCreate:"MenuCreatePayload",
		menuDelete:"MenuDeletePayload",
		menuUpdate:"MenuUpdatePayload",
		metafieldDefinitionCreate:"MetafieldDefinitionCreatePayload",
		metafieldDefinitionDelete:"MetafieldDefinitionDeletePayload",
		metafieldDefinitionPin:"MetafieldDefinitionPinPayload",
		metafieldDefinitionUnpin:"MetafieldDefinitionUnpinPayload",
		metafieldDefinitionUpdate:"MetafieldDefinitionUpdatePayload",
		metafieldsDelete:"MetafieldsDeletePayload",
		metafieldsSet:"MetafieldsSetPayload",
		metaobjectBulkDelete:"MetaobjectBulkDeletePayload",
		metaobjectCreate:"MetaobjectCreatePayload",
		metaobjectDefinitionCreate:"MetaobjectDefinitionCreatePayload",
		metaobjectDefinitionDelete:"MetaobjectDefinitionDeletePayload",
		metaobjectDefinitionUpdate:"MetaobjectDefinitionUpdatePayload",
		metaobjectDelete:"MetaobjectDeletePayload",
		metaobjectUpdate:"MetaobjectUpdatePayload",
		metaobjectUpsert:"MetaobjectUpsertPayload",
		mobilePlatformApplicationCreate:"MobilePlatformApplicationCreatePayload",
		mobilePlatformApplicationDelete:"MobilePlatformApplicationDeletePayload",
		mobilePlatformApplicationUpdate:"MobilePlatformApplicationUpdatePayload",
		orderCancel:"OrderCancelPayload",
		orderCapture:"OrderCapturePayload",
		orderClose:"OrderClosePayload",
		orderCreate:"OrderCreatePayload",
		orderCreateMandatePayment:"OrderCreateMandatePaymentPayload",
		orderCreateManualPayment:"OrderCreateManualPaymentPayload",
		orderCustomerRemove:"OrderCustomerRemovePayload",
		orderCustomerSet:"OrderCustomerSetPayload",
		orderDelete:"OrderDeletePayload",
		orderEditAddCustomItem:"OrderEditAddCustomItemPayload",
		orderEditAddLineItemDiscount:"OrderEditAddLineItemDiscountPayload",
		orderEditAddShippingLine:"OrderEditAddShippingLinePayload",
		orderEditAddVariant:"OrderEditAddVariantPayload",
		orderEditBegin:"OrderEditBeginPayload",
		orderEditCommit:"OrderEditCommitPayload",
		orderEditRemoveDiscount:"OrderEditRemoveDiscountPayload",
		orderEditRemoveLineItemDiscount:"OrderEditRemoveLineItemDiscountPayload",
		orderEditRemoveShippingLine:"OrderEditRemoveShippingLinePayload",
		orderEditSetQuantity:"OrderEditSetQuantityPayload",
		orderEditUpdateDiscount:"OrderEditUpdateDiscountPayload",
		orderEditUpdateShippingLine:"OrderEditUpdateShippingLinePayload",
		orderInvoiceSend:"OrderInvoiceSendPayload",
		orderMarkAsPaid:"OrderMarkAsPaidPayload",
		orderOpen:"OrderOpenPayload",
		orderRiskAssessmentCreate:"OrderRiskAssessmentCreatePayload",
		orderUpdate:"OrderUpdatePayload",
		pageCreate:"PageCreatePayload",
		pageDelete:"PageDeletePayload",
		pageUpdate:"PageUpdatePayload",
		paymentCustomizationActivation:"PaymentCustomizationActivationPayload",
		paymentCustomizationCreate:"PaymentCustomizationCreatePayload",
		paymentCustomizationDelete:"PaymentCustomizationDeletePayload",
		paymentCustomizationUpdate:"PaymentCustomizationUpdatePayload",
		paymentReminderSend:"PaymentReminderSendPayload",
		paymentTermsCreate:"PaymentTermsCreatePayload",
		paymentTermsDelete:"PaymentTermsDeletePayload",
		paymentTermsUpdate:"PaymentTermsUpdatePayload",
		priceListCreate:"PriceListCreatePayload",
		priceListDelete:"PriceListDeletePayload",
		priceListFixedPricesAdd:"PriceListFixedPricesAddPayload",
		priceListFixedPricesByProductUpdate:"PriceListFixedPricesByProductUpdatePayload",
		priceListFixedPricesDelete:"PriceListFixedPricesDeletePayload",
		priceListFixedPricesUpdate:"PriceListFixedPricesUpdatePayload",
		priceListUpdate:"PriceListUpdatePayload",
		privacyFeaturesDisable:"PrivacyFeaturesDisablePayload",
		productBundleCreate:"ProductBundleCreatePayload",
		productBundleUpdate:"ProductBundleUpdatePayload",
		productChangeStatus:"ProductChangeStatusPayload",
		productCreate:"ProductCreatePayload",
		productCreateMedia:"ProductCreateMediaPayload",
		productDelete:"ProductDeletePayload",
		productDeleteMedia:"ProductDeleteMediaPayload",
		productDuplicate:"ProductDuplicatePayload",
		productFeedCreate:"ProductFeedCreatePayload",
		productFeedDelete:"ProductFeedDeletePayload",
		productFullSync:"ProductFullSyncPayload",
		productJoinSellingPlanGroups:"ProductJoinSellingPlanGroupsPayload",
		productLeaveSellingPlanGroups:"ProductLeaveSellingPlanGroupsPayload",
		productOptionUpdate:"ProductOptionUpdatePayload",
		productOptionsCreate:"ProductOptionsCreatePayload",
		productOptionsDelete:"ProductOptionsDeletePayload",
		productOptionsReorder:"ProductOptionsReorderPayload",
		productPublish:"ProductPublishPayload",
		productReorderMedia:"ProductReorderMediaPayload",
		productSet:"ProductSetPayload",
		productUnpublish:"ProductUnpublishPayload",
		productUpdate:"ProductUpdatePayload",
		productUpdateMedia:"ProductUpdateMediaPayload",
		productVariantAppendMedia:"ProductVariantAppendMediaPayload",
		productVariantDetachMedia:"ProductVariantDetachMediaPayload",
		productVariantJoinSellingPlanGroups:"ProductVariantJoinSellingPlanGroupsPayload",
		productVariantLeaveSellingPlanGroups:"ProductVariantLeaveSellingPlanGroupsPayload",
		productVariantRelationshipBulkUpdate:"ProductVariantRelationshipBulkUpdatePayload",
		productVariantsBulkCreate:"ProductVariantsBulkCreatePayload",
		productVariantsBulkDelete:"ProductVariantsBulkDeletePayload",
		productVariantsBulkReorder:"ProductVariantsBulkReorderPayload",
		productVariantsBulkUpdate:"ProductVariantsBulkUpdatePayload",
		pubSubServerPixelUpdate:"PubSubServerPixelUpdatePayload",
		pubSubWebhookSubscriptionCreate:"PubSubWebhookSubscriptionCreatePayload",
		pubSubWebhookSubscriptionUpdate:"PubSubWebhookSubscriptionUpdatePayload",
		publicationCreate:"PublicationCreatePayload",
		publicationDelete:"PublicationDeletePayload",
		publicationUpdate:"PublicationUpdatePayload",
		publishablePublish:"PublishablePublishPayload",
		publishablePublishToCurrentChannel:"PublishablePublishToCurrentChannelPayload",
		publishableUnpublish:"PublishableUnpublishPayload",
		publishableUnpublishToCurrentChannel:"PublishableUnpublishToCurrentChannelPayload",
		quantityPricingByVariantUpdate:"QuantityPricingByVariantUpdatePayload",
		quantityRulesAdd:"QuantityRulesAddPayload",
		quantityRulesDelete:"QuantityRulesDeletePayload",
		refundCreate:"RefundCreatePayload",
		removeFromReturn:"RemoveFromReturnPayload",
		returnApproveRequest:"ReturnApproveRequestPayload",
		returnCancel:"ReturnCancelPayload",
		returnClose:"ReturnClosePayload",
		returnCreate:"ReturnCreatePayload",
		returnDeclineRequest:"ReturnDeclineRequestPayload",
		returnLineItemRemoveFromReturn:"ReturnLineItemRemoveFromReturnPayload",
		returnProcess:"ReturnProcessPayload",
		returnRefund:"ReturnRefundPayload",
		returnReopen:"ReturnReopenPayload",
		returnRequest:"ReturnRequestPayload",
		reverseDeliveryCreateWithShipping:"ReverseDeliveryCreateWithShippingPayload",
		reverseDeliveryShippingUpdate:"ReverseDeliveryShippingUpdatePayload",
		reverseFulfillmentOrderDispose:"ReverseFulfillmentOrderDisposePayload",
		savedSearchCreate:"SavedSearchCreatePayload",
		savedSearchDelete:"SavedSearchDeletePayload",
		savedSearchUpdate:"SavedSearchUpdatePayload",
		scriptTagCreate:"ScriptTagCreatePayload",
		scriptTagDelete:"ScriptTagDeletePayload",
		scriptTagUpdate:"ScriptTagUpdatePayload",
		segmentCreate:"SegmentCreatePayload",
		segmentDelete:"SegmentDeletePayload",
		segmentUpdate:"SegmentUpdatePayload",
		sellingPlanGroupAddProductVariants:"SellingPlanGroupAddProductVariantsPayload",
		sellingPlanGroupAddProducts:"SellingPlanGroupAddProductsPayload",
		sellingPlanGroupCreate:"SellingPlanGroupCreatePayload",
		sellingPlanGroupDelete:"SellingPlanGroupDeletePayload",
		sellingPlanGroupRemoveProductVariants:"SellingPlanGroupRemoveProductVariantsPayload",
		sellingPlanGroupRemoveProducts:"SellingPlanGroupRemoveProductsPayload",
		sellingPlanGroupUpdate:"SellingPlanGroupUpdatePayload",
		serverPixelCreate:"ServerPixelCreatePayload",
		serverPixelDelete:"ServerPixelDeletePayload",
		shippingPackageDelete:"ShippingPackageDeletePayload",
		shippingPackageMakeDefault:"ShippingPackageMakeDefaultPayload",
		shippingPackageUpdate:"ShippingPackageUpdatePayload",
		shopLocaleDisable:"ShopLocaleDisablePayload",
		shopLocaleEnable:"ShopLocaleEnablePayload",
		shopLocaleUpdate:"ShopLocaleUpdatePayload",
		shopPolicyUpdate:"ShopPolicyUpdatePayload",
		shopResourceFeedbackCreate:"ShopResourceFeedbackCreatePayload",
		shopifyPaymentsPayoutAlternateCurrencyCreate:"ShopifyPaymentsPayoutAlternateCurrencyCreatePayload",
		stagedUploadTargetGenerate:"StagedUploadTargetGeneratePayload",
		stagedUploadTargetsGenerate:"StagedUploadTargetsGeneratePayload",
		stagedUploadsCreate:"StagedUploadsCreatePayload",
		standardMetafieldDefinitionEnable:"StandardMetafieldDefinitionEnablePayload",
		standardMetaobjectDefinitionEnable:"StandardMetaobjectDefinitionEnablePayload",
		storeCreditAccountCredit:"StoreCreditAccountCreditPayload",
		storeCreditAccountDebit:"StoreCreditAccountDebitPayload",
		storefrontAccessTokenCreate:"StorefrontAccessTokenCreatePayload",
		storefrontAccessTokenDelete:"StorefrontAccessTokenDeletePayload",
		subscriptionBillingAttemptCreate:"SubscriptionBillingAttemptCreatePayload",
		subscriptionBillingCycleBulkCharge:"SubscriptionBillingCycleBulkChargePayload",
		subscriptionBillingCycleBulkSearch:"SubscriptionBillingCycleBulkSearchPayload",
		subscriptionBillingCycleCharge:"SubscriptionBillingCycleChargePayload",
		subscriptionBillingCycleContractDraftCommit:"SubscriptionBillingCycleContractDraftCommitPayload",
		subscriptionBillingCycleContractDraftConcatenate:"SubscriptionBillingCycleContractDraftConcatenatePayload",
		subscriptionBillingCycleContractEdit:"SubscriptionBillingCycleContractEditPayload",
		subscriptionBillingCycleEditDelete:"SubscriptionBillingCycleEditDeletePayload",
		subscriptionBillingCycleEditsDelete:"SubscriptionBillingCycleEditsDeletePayload",
		subscriptionBillingCycleScheduleEdit:"SubscriptionBillingCycleScheduleEditPayload",
		subscriptionBillingCycleSkip:"SubscriptionBillingCycleSkipPayload",
		subscriptionBillingCycleUnskip:"SubscriptionBillingCycleUnskipPayload",
		subscriptionContractActivate:"SubscriptionContractActivatePayload",
		subscriptionContractAtomicCreate:"SubscriptionContractAtomicCreatePayload",
		subscriptionContractCancel:"SubscriptionContractCancelPayload",
		subscriptionContractCreate:"SubscriptionContractCreatePayload",
		subscriptionContractExpire:"SubscriptionContractExpirePayload",
		subscriptionContractFail:"SubscriptionContractFailPayload",
		subscriptionContractPause:"SubscriptionContractPausePayload",
		subscriptionContractProductChange:"SubscriptionContractProductChangePayload",
		subscriptionContractSetNextBillingDate:"SubscriptionContractSetNextBillingDatePayload",
		subscriptionContractUpdate:"SubscriptionContractUpdatePayload",
		subscriptionDraftCommit:"SubscriptionDraftCommitPayload",
		subscriptionDraftDiscountAdd:"SubscriptionDraftDiscountAddPayload",
		subscriptionDraftDiscountCodeApply:"SubscriptionDraftDiscountCodeApplyPayload",
		subscriptionDraftDiscountRemove:"SubscriptionDraftDiscountRemovePayload",
		subscriptionDraftDiscountUpdate:"SubscriptionDraftDiscountUpdatePayload",
		subscriptionDraftFreeShippingDiscountAdd:"SubscriptionDraftFreeShippingDiscountAddPayload",
		subscriptionDraftFreeShippingDiscountUpdate:"SubscriptionDraftFreeShippingDiscountUpdatePayload",
		subscriptionDraftLineAdd:"SubscriptionDraftLineAddPayload",
		subscriptionDraftLineRemove:"SubscriptionDraftLineRemovePayload",
		subscriptionDraftLineUpdate:"SubscriptionDraftLineUpdatePayload",
		subscriptionDraftUpdate:"SubscriptionDraftUpdatePayload",
		tagsAdd:"TagsAddPayload",
		tagsRemove:"TagsRemovePayload",
		taxAppConfigure:"TaxAppConfigurePayload",
		themeCreate:"ThemeCreatePayload",
		themeDelete:"ThemeDeletePayload",
		themeDuplicate:"ThemeDuplicatePayload",
		themeFilesCopy:"ThemeFilesCopyPayload",
		themeFilesDelete:"ThemeFilesDeletePayload",
		themeFilesUpsert:"ThemeFilesUpsertPayload",
		themePublish:"ThemePublishPayload",
		themeUpdate:"ThemeUpdatePayload",
		transactionVoid:"TransactionVoidPayload",
		translationsRegister:"TranslationsRegisterPayload",
		translationsRemove:"TranslationsRemovePayload",
		urlRedirectBulkDeleteAll:"UrlRedirectBulkDeleteAllPayload",
		urlRedirectBulkDeleteByIds:"UrlRedirectBulkDeleteByIdsPayload",
		urlRedirectBulkDeleteBySavedSearch:"UrlRedirectBulkDeleteBySavedSearchPayload",
		urlRedirectBulkDeleteBySearch:"UrlRedirectBulkDeleteBySearchPayload",
		urlRedirectCreate:"UrlRedirectCreatePayload",
		urlRedirectDelete:"UrlRedirectDeletePayload",
		urlRedirectImportCreate:"UrlRedirectImportCreatePayload",
		urlRedirectImportSubmit:"UrlRedirectImportSubmitPayload",
		urlRedirectUpdate:"UrlRedirectUpdatePayload",
		validationCreate:"ValidationCreatePayload",
		validationDelete:"ValidationDeletePayload",
		validationUpdate:"ValidationUpdatePayload",
		webPixelCreate:"WebPixelCreatePayload",
		webPixelDelete:"WebPixelDeletePayload",
		webPixelUpdate:"WebPixelUpdatePayload",
		webPresenceCreate:"WebPresenceCreatePayload",
		webPresenceDelete:"WebPresenceDeletePayload",
		webPresenceUpdate:"WebPresenceUpdatePayload",
		webhookSubscriptionCreate:"WebhookSubscriptionCreatePayload",
		webhookSubscriptionDelete:"WebhookSubscriptionDeletePayload",
		webhookSubscriptionUpdate:"WebhookSubscriptionUpdatePayload"
	},
	MutationsStagedUploadTargetGenerateUploadParameter:{
		name:"String",
		value:"String"
	},
	Navigable:{
		"...on AbandonedCheckout": "AbandonedCheckout",
		"...on Article": "Article",
		"...on Company": "Company",
		"...on CompanyLocation": "CompanyLocation",
		"...on CustomerAccountAppExtensionPage": "CustomerAccountAppExtensionPage",
		"...on CustomerAccountNativePage": "CustomerAccountNativePage",
		"...on CustomerAccountPage": "CustomerAccountPage",
		"...on DraftOrder": "DraftOrder",
		"...on Page": "Page",
		"...on Product": "Product",
		"...on ProductVariant": "ProductVariant",
		defaultCursor:"String"
	},
	NavigationItem:{
		id:"String",
		title:"String",
		url:"URL"
	},
	Node:{
		"...on AbandonedCheckout": "AbandonedCheckout",
		"...on AbandonedCheckoutLineItem": "AbandonedCheckoutLineItem",
		"...on Abandonment": "Abandonment",
		"...on AddAllProductsOperation": "AddAllProductsOperation",
		"...on AdditionalFee": "AdditionalFee",
		"...on App": "App",
		"...on AppCatalog": "AppCatalog",
		"...on AppCredit": "AppCredit",
		"...on AppInstallation": "AppInstallation",
		"...on AppPurchaseOneTime": "AppPurchaseOneTime",
		"...on AppRevenueAttributionRecord": "AppRevenueAttributionRecord",
		"...on AppSubscription": "AppSubscription",
		"...on AppUsageRecord": "AppUsageRecord",
		"...on Article": "Article",
		"...on BasicEvent": "BasicEvent",
		"...on Blog": "Blog",
		"...on BulkOperation": "BulkOperation",
		"...on BusinessEntity": "BusinessEntity",
		"...on CalculatedOrder": "CalculatedOrder",
		"...on CartTransform": "CartTransform",
		"...on CashTrackingAdjustment": "CashTrackingAdjustment",
		"...on CashTrackingSession": "CashTrackingSession",
		"...on Catalog": "Catalog",
		"...on CatalogCsvOperation": "CatalogCsvOperation",
		"...on Channel": "Channel",
		"...on ChannelDefinition": "ChannelDefinition",
		"...on ChannelInformation": "ChannelInformation",
		"...on CheckoutProfile": "CheckoutProfile",
		"...on Collection": "Collection",
		"...on Comment": "Comment",
		"...on CommentEvent": "CommentEvent",
		"...on Company": "Company",
		"...on CompanyAddress": "CompanyAddress",
		"...on CompanyContact": "CompanyContact",
		"...on CompanyContactRole": "CompanyContactRole",
		"...on CompanyContactRoleAssignment": "CompanyContactRoleAssignment",
		"...on CompanyLocation": "CompanyLocation",
		"...on CompanyLocationCatalog": "CompanyLocationCatalog",
		"...on CompanyLocationStaffMemberAssignment": "CompanyLocationStaffMemberAssignment",
		"...on ConsentPolicy": "ConsentPolicy",
		"...on CurrencyExchangeAdjustment": "CurrencyExchangeAdjustment",
		"...on Customer": "Customer",
		"...on CustomerAccountAppExtensionPage": "CustomerAccountAppExtensionPage",
		"...on CustomerAccountNativePage": "CustomerAccountNativePage",
		"...on CustomerAccountPage": "CustomerAccountPage",
		"...on CustomerPaymentMethod": "CustomerPaymentMethod",
		"...on CustomerSegmentMembersQuery": "CustomerSegmentMembersQuery",
		"...on CustomerVisit": "CustomerVisit",
		"...on DeliveryCarrierService": "DeliveryCarrierService",
		"...on DeliveryCondition": "DeliveryCondition",
		"...on DeliveryCountry": "DeliveryCountry",
		"...on DeliveryCustomization": "DeliveryCustomization",
		"...on DeliveryLocationGroup": "DeliveryLocationGroup",
		"...on DeliveryMethod": "DeliveryMethod",
		"...on DeliveryMethodDefinition": "DeliveryMethodDefinition",
		"...on DeliveryParticipant": "DeliveryParticipant",
		"...on DeliveryProfile": "DeliveryProfile",
		"...on DeliveryProfileItem": "DeliveryProfileItem",
		"...on DeliveryPromiseParticipant": "DeliveryPromiseParticipant",
		"...on DeliveryPromiseProvider": "DeliveryPromiseProvider",
		"...on DeliveryProvince": "DeliveryProvince",
		"...on DeliveryRateDefinition": "DeliveryRateDefinition",
		"...on DeliveryZone": "DeliveryZone",
		"...on DiscountAutomaticBxgy": "DiscountAutomaticBxgy",
		"...on DiscountAutomaticNode": "DiscountAutomaticNode",
		"...on DiscountCodeNode": "DiscountCodeNode",
		"...on DiscountNode": "DiscountNode",
		"...on DiscountRedeemCodeBulkCreation": "DiscountRedeemCodeBulkCreation",
		"...on Domain": "Domain",
		"...on DraftOrder": "DraftOrder",
		"...on DraftOrderLineItem": "DraftOrderLineItem",
		"...on DraftOrderTag": "DraftOrderTag",
		"...on Duty": "Duty",
		"...on ExchangeLineItem": "ExchangeLineItem",
		"...on ExchangeV2": "ExchangeV2",
		"...on ExternalVideo": "ExternalVideo",
		"...on Fulfillment": "Fulfillment",
		"...on FulfillmentConstraintRule": "FulfillmentConstraintRule",
		"...on FulfillmentEvent": "FulfillmentEvent",
		"...on FulfillmentHold": "FulfillmentHold",
		"...on FulfillmentLineItem": "FulfillmentLineItem",
		"...on FulfillmentOrder": "FulfillmentOrder",
		"...on FulfillmentOrderDestination": "FulfillmentOrderDestination",
		"...on FulfillmentOrderLineItem": "FulfillmentOrderLineItem",
		"...on FulfillmentOrderMerchantRequest": "FulfillmentOrderMerchantRequest",
		"...on GenericFile": "GenericFile",
		"...on GiftCard": "GiftCard",
		"...on GiftCardCreditTransaction": "GiftCardCreditTransaction",
		"...on GiftCardDebitTransaction": "GiftCardDebitTransaction",
		"...on InventoryAdjustmentGroup": "InventoryAdjustmentGroup",
		"...on InventoryItem": "InventoryItem",
		"...on InventoryItemMeasurement": "InventoryItemMeasurement",
		"...on InventoryLevel": "InventoryLevel",
		"...on InventoryQuantity": "InventoryQuantity",
		"...on InventoryShipment": "InventoryShipment",
		"...on InventoryShipmentLineItem": "InventoryShipmentLineItem",
		"...on InventoryTransfer": "InventoryTransfer",
		"...on InventoryTransferLineItem": "InventoryTransferLineItem",
		"...on LineItem": "LineItem",
		"...on LineItemGroup": "LineItemGroup",
		"...on Location": "Location",
		"...on MailingAddress": "MailingAddress",
		"...on Market": "Market",
		"...on MarketCatalog": "MarketCatalog",
		"...on MarketRegionCountry": "MarketRegionCountry",
		"...on MarketWebPresence": "MarketWebPresence",
		"...on MarketingActivity": "MarketingActivity",
		"...on MarketingEvent": "MarketingEvent",
		"...on MediaImage": "MediaImage",
		"...on Menu": "Menu",
		"...on Metafield": "Metafield",
		"...on MetafieldDefinition": "MetafieldDefinition",
		"...on Metaobject": "Metaobject",
		"...on MetaobjectDefinition": "MetaobjectDefinition",
		"...on Model3d": "Model3d",
		"...on OnlineStoreTheme": "OnlineStoreTheme",
		"...on Order": "Order",
		"...on OrderAdjustment": "OrderAdjustment",
		"...on OrderDisputeSummary": "OrderDisputeSummary",
		"...on OrderEditSession": "OrderEditSession",
		"...on OrderTransaction": "OrderTransaction",
		"...on Page": "Page",
		"...on PaymentCustomization": "PaymentCustomization",
		"...on PaymentMandate": "PaymentMandate",
		"...on PaymentSchedule": "PaymentSchedule",
		"...on PaymentTerms": "PaymentTerms",
		"...on PaymentTermsTemplate": "PaymentTermsTemplate",
		"...on PointOfSaleDevice": "PointOfSaleDevice",
		"...on PriceList": "PriceList",
		"...on PriceRule": "PriceRule",
		"...on PriceRuleDiscountCode": "PriceRuleDiscountCode",
		"...on Product": "Product",
		"...on ProductBundleOperation": "ProductBundleOperation",
		"...on ProductDeleteOperation": "ProductDeleteOperation",
		"...on ProductDuplicateOperation": "ProductDuplicateOperation",
		"...on ProductFeed": "ProductFeed",
		"...on ProductOption": "ProductOption",
		"...on ProductOptionValue": "ProductOptionValue",
		"...on ProductSetOperation": "ProductSetOperation",
		"...on ProductTaxonomyNode": "ProductTaxonomyNode",
		"...on ProductVariant": "ProductVariant",
		"...on ProductVariantComponent": "ProductVariantComponent",
		"...on Publication": "Publication",
		"...on PublicationResourceOperation": "PublicationResourceOperation",
		"...on QuantityPriceBreak": "QuantityPriceBreak",
		"...on Refund": "Refund",
		"...on RefundShippingLine": "RefundShippingLine",
		"...on Return": "Return",
		"...on ReturnLineItem": "ReturnLineItem",
		"...on ReturnLineItemType": "ReturnLineItemType",
		"...on ReturnableFulfillment": "ReturnableFulfillment",
		"...on ReverseDelivery": "ReverseDelivery",
		"...on ReverseDeliveryLineItem": "ReverseDeliveryLineItem",
		"...on ReverseFulfillmentOrder": "ReverseFulfillmentOrder",
		"...on ReverseFulfillmentOrderDisposition": "ReverseFulfillmentOrderDisposition",
		"...on ReverseFulfillmentOrderLineItem": "ReverseFulfillmentOrderLineItem",
		"...on SaleAdditionalFee": "SaleAdditionalFee",
		"...on SavedSearch": "SavedSearch",
		"...on ScriptTag": "ScriptTag",
		"...on Segment": "Segment",
		"...on SellingPlan": "SellingPlan",
		"...on SellingPlanGroup": "SellingPlanGroup",
		"...on ServerPixel": "ServerPixel",
		"...on Shop": "Shop",
		"...on ShopAddress": "ShopAddress",
		"...on ShopPolicy": "ShopPolicy",
		"...on ShopifyPaymentsAccount": "ShopifyPaymentsAccount",
		"...on ShopifyPaymentsBalanceTransaction": "ShopifyPaymentsBalanceTransaction",
		"...on ShopifyPaymentsBankAccount": "ShopifyPaymentsBankAccount",
		"...on ShopifyPaymentsDispute": "ShopifyPaymentsDispute",
		"...on ShopifyPaymentsDisputeEvidence": "ShopifyPaymentsDisputeEvidence",
		"...on ShopifyPaymentsDisputeFileUpload": "ShopifyPaymentsDisputeFileUpload",
		"...on ShopifyPaymentsDisputeFulfillment": "ShopifyPaymentsDisputeFulfillment",
		"...on ShopifyPaymentsPayout": "ShopifyPaymentsPayout",
		"...on StaffMember": "StaffMember",
		"...on StandardMetafieldDefinitionTemplate": "StandardMetafieldDefinitionTemplate",
		"...on StoreCreditAccount": "StoreCreditAccount",
		"...on StoreCreditAccountCreditTransaction": "StoreCreditAccountCreditTransaction",
		"...on StoreCreditAccountDebitRevertTransaction": "StoreCreditAccountDebitRevertTransaction",
		"...on StoreCreditAccountDebitTransaction": "StoreCreditAccountDebitTransaction",
		"...on StorefrontAccessToken": "StorefrontAccessToken",
		"...on SubscriptionBillingAttempt": "SubscriptionBillingAttempt",
		"...on SubscriptionContract": "SubscriptionContract",
		"...on SubscriptionDraft": "SubscriptionDraft",
		"...on TaxonomyAttribute": "TaxonomyAttribute",
		"...on TaxonomyCategory": "TaxonomyCategory",
		"...on TaxonomyChoiceListAttribute": "TaxonomyChoiceListAttribute",
		"...on TaxonomyMeasurementAttribute": "TaxonomyMeasurementAttribute",
		"...on TaxonomyValue": "TaxonomyValue",
		"...on TenderTransaction": "TenderTransaction",
		"...on TransactionFee": "TransactionFee",
		"...on UnverifiedReturnLineItem": "UnverifiedReturnLineItem",
		"...on UrlRedirect": "UrlRedirect",
		"...on UrlRedirectImport": "UrlRedirectImport",
		"...on Validation": "Validation",
		"...on Video": "Video",
		"...on WebPixel": "WebPixel",
		"...on WebhookSubscription": "WebhookSubscription",
		id:"ID"
	},
	OnlineStore:{
		passwordProtection:"OnlineStorePasswordProtection"
	},
	OnlineStorePasswordProtection:{
		enabled:"Boolean"
	},
	OnlineStorePreviewable:{
		"...on Product": "Product",
		onlineStorePreviewUrl:"URL"
	},
	OnlineStoreTheme:{
		createdAt:"DateTime",
		files:"OnlineStoreThemeFileConnection",
		id:"ID",
		name:"String",
		prefix:"String",
		processing:"Boolean",
		processingFailed:"Boolean",
		role:"ThemeRole",
		themeStoreId:"Int",
		translations:"Translation",
		updatedAt:"DateTime"
	},
	OnlineStoreThemeConnection:{
		edges:"OnlineStoreThemeEdge",
		nodes:"OnlineStoreTheme",
		pageInfo:"PageInfo"
	},
	OnlineStoreThemeEdge:{
		cursor:"String",
		node:"OnlineStoreTheme"
	},
	OnlineStoreThemeFile:{
		body:"OnlineStoreThemeFileBody",
		checksumMd5:"String",
		contentType:"String",
		createdAt:"DateTime",
		filename:"String",
		size:"UnsignedInt64",
		updatedAt:"DateTime"
	},
	OnlineStoreThemeFileBody:{
		"...on OnlineStoreThemeFileBodyBase64":"OnlineStoreThemeFileBodyBase64",
		"...on OnlineStoreThemeFileBodyText":"OnlineStoreThemeFileBodyText",
		"...on OnlineStoreThemeFileBodyUrl":"OnlineStoreThemeFileBodyUrl"
	},
	OnlineStoreThemeFileBodyBase64:{
		contentBase64:"String"
	},
	OnlineStoreThemeFileBodyText:{
		content:"String"
	},
	OnlineStoreThemeFileBodyUrl:{
		url:"URL"
	},
	OnlineStoreThemeFileConnection:{
		edges:"OnlineStoreThemeFileEdge",
		nodes:"OnlineStoreThemeFile",
		pageInfo:"PageInfo",
		userErrors:"OnlineStoreThemeFileReadResult"
	},
	OnlineStoreThemeFileEdge:{
		cursor:"String",
		node:"OnlineStoreThemeFile"
	},
	OnlineStoreThemeFileOperationResult:{
		checksumMd5:"String",
		createdAt:"DateTime",
		filename:"String",
		size:"UnsignedInt64",
		updatedAt:"DateTime"
	},
	OnlineStoreThemeFileReadResult:{
		code:"OnlineStoreThemeFileResultType",
		filename:"String"
	},
	OnlineStoreThemeFilesUserErrors:{
		code:"OnlineStoreThemeFilesUserErrorsCode",
		field:"String",
		filename:"String",
		message:"String"
	},
	Order:{
		additionalFees:"AdditionalFee",
		agreements:"SalesAgreementConnection",
		alerts:"ResourceAlert",
		app:"OrderApp",
		billingAddress:"MailingAddress",
		billingAddressMatchesShippingAddress:"Boolean",
		canMarkAsPaid:"Boolean",
		canNotifyCustomer:"Boolean",
		cancelReason:"OrderCancelReason",
		cancellation:"OrderCancellation",
		cancelledAt:"DateTime",
		capturable:"Boolean",
		cartDiscountAmount:"Money",
		cartDiscountAmountSet:"MoneyBag",
		channel:"Channel",
		channelInformation:"ChannelInformation",
		clientIp:"String",
		closed:"Boolean",
		closedAt:"DateTime",
		confirmationNumber:"String",
		confirmed:"Boolean",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		currentCartDiscountAmountSet:"MoneyBag",
		currentShippingPriceSet:"MoneyBag",
		currentSubtotalLineItemsQuantity:"Int",
		currentSubtotalPriceSet:"MoneyBag",
		currentTaxLines:"TaxLine",
		currentTotalAdditionalFeesSet:"MoneyBag",
		currentTotalDiscountsSet:"MoneyBag",
		currentTotalDutiesSet:"MoneyBag",
		currentTotalPriceSet:"MoneyBag",
		currentTotalTaxSet:"MoneyBag",
		currentTotalWeight:"UnsignedInt64",
		customAttributes:"Attribute",
		customer:"Customer",
		customerAcceptsMarketing:"Boolean",
		customerJourney:"CustomerJourney",
		customerJourneySummary:"CustomerJourneySummary",
		customerLocale:"String",
		discountApplications:"DiscountApplicationConnection",
		discountCode:"String",
		discountCodes:"String",
		displayAddress:"MailingAddress",
		displayFinancialStatus:"OrderDisplayFinancialStatus",
		displayFulfillmentStatus:"OrderDisplayFulfillmentStatus",
		disputes:"OrderDisputeSummary",
		dutiesIncluded:"Boolean",
		edited:"Boolean",
		email:"String",
		estimatedTaxes:"Boolean",
		events:"EventConnection",
		exchangeV2s:"ExchangeV2Connection",
		fulfillable:"Boolean",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillments:"Fulfillment",
		fulfillmentsCount:"Count",
		fullyPaid:"Boolean",
		hasTimelineComment:"Boolean",
		id:"ID",
		landingPageDisplayText:"String",
		landingPageUrl:"URL",
		legacyResourceId:"UnsignedInt64",
		lineItems:"LineItemConnection",
		localizationExtensions:"LocalizationExtensionConnection",
		localizedFields:"LocalizedFieldConnection",
		merchantBusinessEntity:"BusinessEntity",
		merchantEditable:"Boolean",
		merchantEditableErrors:"String",
		merchantOfRecordApp:"OrderApp",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		netPayment:"Money",
		netPaymentSet:"MoneyBag",
		nonFulfillableLineItems:"LineItemConnection",
		note:"String",
		number:"Int",
		originalTotalAdditionalFeesSet:"MoneyBag",
		originalTotalDutiesSet:"MoneyBag",
		originalTotalPriceSet:"MoneyBag",
		paymentCollectionDetails:"OrderPaymentCollectionDetails",
		paymentGatewayNames:"String",
		paymentTerms:"PaymentTerms",
		phone:"String",
		physicalLocation:"Location",
		poNumber:"String",
		presentmentCurrencyCode:"CurrencyCode",
		processedAt:"DateTime",
		productNetwork:"Boolean",
		publication:"Publication",
		purchasingEntity:"PurchasingEntity",
		referralCode:"String",
		referrerDisplayText:"String",
		referrerUrl:"URL",
		refundDiscrepancySet:"MoneyBag",
		refundable:"Boolean",
		refunds:"Refund",
		registeredSourceUrl:"URL",
		requiresShipping:"Boolean",
		restockable:"Boolean",
		retailLocation:"Location",
		returnStatus:"OrderReturnStatus",
		returns:"ReturnConnection",
		risk:"OrderRiskSummary",
		riskLevel:"OrderRiskLevel",
		risks:"OrderRisk",
		shippingAddress:"MailingAddress",
		shippingLine:"ShippingLine",
		shippingLines:"ShippingLineConnection",
		shopifyProtect:"ShopifyProtectOrderSummary",
		sourceIdentifier:"String",
		sourceName:"String",
		staffMember:"StaffMember",
		statusPageUrl:"URL",
		subtotalLineItemsQuantity:"Int",
		subtotalPrice:"Money",
		subtotalPriceSet:"MoneyBag",
		suggestedRefund:"SuggestedRefund",
		tags:"String",
		taxExempt:"Boolean",
		taxLines:"TaxLine",
		taxesIncluded:"Boolean",
		test:"Boolean",
		totalCapturable:"Money",
		totalCapturableSet:"MoneyBag",
		totalCashRoundingAdjustment:"CashRoundingAdjustment",
		totalDiscounts:"Money",
		totalDiscountsSet:"MoneyBag",
		totalOutstandingSet:"MoneyBag",
		totalPrice:"Money",
		totalPriceSet:"MoneyBag",
		totalReceived:"Money",
		totalReceivedSet:"MoneyBag",
		totalRefunded:"Money",
		totalRefundedSet:"MoneyBag",
		totalRefundedShippingSet:"MoneyBag",
		totalShippingPrice:"Money",
		totalShippingPriceSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag",
		totalTipReceived:"MoneyV2",
		totalTipReceivedSet:"MoneyBag",
		totalWeight:"UnsignedInt64",
		transactions:"OrderTransaction",
		transactionsCount:"Count",
		unpaid:"Boolean",
		updatedAt:"DateTime"
	},
	OrderAdjustment:{
		amountSet:"MoneyBag",
		id:"ID",
		reason:"OrderAdjustmentDiscrepancyReason",
		taxAmountSet:"MoneyBag"
	},
	OrderAdjustmentConnection:{
		edges:"OrderAdjustmentEdge",
		nodes:"OrderAdjustment",
		pageInfo:"PageInfo"
	},
	OrderAdjustmentEdge:{
		cursor:"String",
		node:"OrderAdjustment"
	},
	OrderAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		order:"Order",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	OrderApp:{
		icon:"Image",
		id:"ID",
		name:"String"
	},
	OrderCancelPayload:{
		job:"Job",
		orderCancelUserErrors:"OrderCancelUserError",
		userErrors:"UserError"
	},
	OrderCancelUserError:{
		code:"OrderCancelUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderCancellation:{
		staffNote:"String"
	},
	OrderCapturePayload:{
		transaction:"OrderTransaction",
		userErrors:"UserError"
	},
	OrderClosePayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderConnection:{
		edges:"OrderEdge",
		nodes:"Order",
		pageInfo:"PageInfo"
	},
	OrderCreateMandatePaymentPayload:{
		job:"Job",
		paymentReferenceId:"String",
		userErrors:"OrderCreateMandatePaymentUserError"
	},
	OrderCreateMandatePaymentUserError:{
		code:"OrderCreateMandatePaymentUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderCreateManualPaymentOrderCreateManualPaymentError:{
		code:"OrderCreateManualPaymentOrderCreateManualPaymentErrorCode",
		field:"String",
		message:"String"
	},
	OrderCreateManualPaymentPayload:{
		order:"Order",
		userErrors:"OrderCreateManualPaymentOrderCreateManualPaymentError"
	},
	OrderCreatePayload:{
		order:"Order",
		userErrors:"OrderCreateUserError"
	},
	OrderCreateUserError:{
		code:"OrderCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderCustomerRemovePayload:{
		order:"Order",
		userErrors:"OrderCustomerRemoveUserError"
	},
	OrderCustomerRemoveUserError:{
		code:"OrderCustomerRemoveUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderCustomerSetPayload:{
		order:"Order",
		userErrors:"OrderCustomerSetUserError"
	},
	OrderCustomerSetUserError:{
		code:"OrderCustomerSetUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderDeletePayload:{
		deletedId:"ID",
		userErrors:"OrderDeleteUserError"
	},
	OrderDeleteUserError:{
		code:"OrderDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderDisputeSummary:{
		id:"ID",
		initiatedAs:"DisputeType",
		status:"DisputeStatus"
	},
	OrderEdge:{
		cursor:"String",
		node:"Order"
	},
	OrderEditAddCustomItemPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditAddLineItemDiscountPayload:{
		addedDiscountStagedChange:"OrderStagedChangeAddLineItemDiscount",
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditAddShippingLinePayload:{
		calculatedOrder:"CalculatedOrder",
		calculatedShippingLine:"CalculatedShippingLine",
		orderEditSession:"OrderEditSession",
		userErrors:"OrderEditAddShippingLineUserError"
	},
	OrderEditAddShippingLineUserError:{
		code:"OrderEditAddShippingLineUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderEditAddVariantPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	OrderEditBeginPayload:{
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditCommitPayload:{
		order:"Order",
		successMessages:"String",
		userErrors:"UserError"
	},
	OrderEditRemoveDiscountPayload:{
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"OrderEditRemoveDiscountUserError"
	},
	OrderEditRemoveDiscountUserError:{
		code:"OrderEditRemoveDiscountUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderEditRemoveLineItemDiscountPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditRemoveShippingLinePayload:{
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"OrderEditRemoveShippingLineUserError"
	},
	OrderEditRemoveShippingLineUserError:{
		code:"OrderEditRemoveShippingLineUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderEditSession:{
		id:"ID"
	},
	OrderEditSetQuantityPayload:{
		calculatedLineItem:"CalculatedLineItem",
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"UserError"
	},
	OrderEditUpdateDiscountPayload:{
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"OrderEditUpdateDiscountUserError"
	},
	OrderEditUpdateDiscountUserError:{
		code:"OrderEditUpdateDiscountUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderEditUpdateShippingLinePayload:{
		calculatedOrder:"CalculatedOrder",
		orderEditSession:"OrderEditSession",
		userErrors:"OrderEditUpdateShippingLineUserError"
	},
	OrderEditUpdateShippingLineUserError:{
		code:"OrderEditUpdateShippingLineUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderInvoiceSendPayload:{
		order:"Order",
		userErrors:"OrderInvoiceSendUserError"
	},
	OrderInvoiceSendUserError:{
		code:"OrderInvoiceSendUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderMarkAsPaidPayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderOpenPayload:{
		order:"Order",
		userErrors:"UserError"
	},
	OrderPaymentCollectionDetails:{
		additionalPaymentCollectionUrl:"URL",
		vaultedPaymentMethods:"PaymentMandate"
	},
	OrderPaymentStatus:{
		errorMessage:"String",
		paymentReferenceId:"String",
		status:"OrderPaymentStatusResult",
		transactions:"OrderTransaction",
		translatedErrorMessage:"String"
	},
	OrderRisk:{
		display:"Boolean",
		level:"OrderRiskLevel",
		message:"String"
	},
	OrderRiskAssessment:{
		facts:"RiskFact",
		provider:"App",
		riskLevel:"RiskAssessmentResult"
	},
	OrderRiskAssessmentCreatePayload:{
		orderRiskAssessment:"OrderRiskAssessment",
		userErrors:"OrderRiskAssessmentCreateUserError"
	},
	OrderRiskAssessmentCreateUserError:{
		code:"OrderRiskAssessmentCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	OrderRiskSummary:{
		assessments:"OrderRiskAssessment",
		recommendation:"OrderRiskRecommendationResult"
	},
	OrderStagedChange:{
		"...on OrderStagedChangeAddCustomItem":"OrderStagedChangeAddCustomItem",
		"...on OrderStagedChangeAddLineItemDiscount":"OrderStagedChangeAddLineItemDiscount",
		"...on OrderStagedChangeAddShippingLine":"OrderStagedChangeAddShippingLine",
		"...on OrderStagedChangeAddVariant":"OrderStagedChangeAddVariant",
		"...on OrderStagedChangeDecrementItem":"OrderStagedChangeDecrementItem",
		"...on OrderStagedChangeIncrementItem":"OrderStagedChangeIncrementItem",
		"...on OrderStagedChangeRemoveDiscount":"OrderStagedChangeRemoveDiscount",
		"...on OrderStagedChangeRemoveShippingLine":"OrderStagedChangeRemoveShippingLine"
	},
	OrderStagedChangeAddCustomItem:{
		originalUnitPrice:"MoneyV2",
		quantity:"Int",
		title:"String"
	},
	OrderStagedChangeAddLineItemDiscount:{
		description:"String",
		id:"ID",
		value:"PricingValue"
	},
	OrderStagedChangeAddShippingLine:{
		phone:"String",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	OrderStagedChangeAddVariant:{
		quantity:"Int",
		variant:"ProductVariant"
	},
	OrderStagedChangeConnection:{
		edges:"OrderStagedChangeEdge",
		nodes:"OrderStagedChange",
		pageInfo:"PageInfo"
	},
	OrderStagedChangeDecrementItem:{
		delta:"Int",
		lineItem:"LineItem",
		restock:"Boolean"
	},
	OrderStagedChangeEdge:{
		cursor:"String",
		node:"OrderStagedChange"
	},
	OrderStagedChangeIncrementItem:{
		delta:"Int",
		lineItem:"LineItem"
	},
	OrderStagedChangeRemoveDiscount:{
		discountApplication:"DiscountApplication"
	},
	OrderStagedChangeRemoveShippingLine:{
		shippingLine:"ShippingLine"
	},
	OrderTransaction:{
		accountNumber:"String",
		amount:"Money",
		amountRoundingSet:"MoneyBag",
		amountSet:"MoneyBag",
		amountV2:"MoneyV2",
		authorizationCode:"String",
		authorizationExpiresAt:"DateTime",
		createdAt:"DateTime",
		currencyExchangeAdjustment:"CurrencyExchangeAdjustment",
		device:"PointOfSaleDevice",
		errorCode:"OrderTransactionErrorCode",
		fees:"TransactionFee",
		formattedGateway:"String",
		gateway:"String",
		id:"ID",
		kind:"OrderTransactionKind",
		location:"Location",
		manualPaymentGateway:"Boolean",
		manuallyCapturable:"Boolean",
		maximumRefundable:"Money",
		maximumRefundableV2:"MoneyV2",
		multiCapturable:"Boolean",
		order:"Order",
		parentTransaction:"OrderTransaction",
		paymentDetails:"PaymentDetails",
		paymentIcon:"Image",
		paymentId:"String",
		paymentMethod:"PaymentMethods",
		processedAt:"DateTime",
		receiptJson:"JSON",
		settlementCurrency:"CurrencyCode",
		settlementCurrencyRate:"Decimal",
		shopifyPaymentsSet:"ShopifyPaymentsTransactionSet",
		status:"OrderTransactionStatus",
		test:"Boolean",
		totalUnsettled:"Money",
		totalUnsettledSet:"MoneyBag",
		totalUnsettledV2:"MoneyV2",
		user:"StaffMember"
	},
	OrderTransactionConnection:{
		edges:"OrderTransactionEdge",
		nodes:"OrderTransaction",
		pageInfo:"PageInfo"
	},
	OrderTransactionEdge:{
		cursor:"String",
		node:"OrderTransaction"
	},
	OrderUpdatePayload:{
		order:"Order",
		userErrors:"UserError"
	},
	Page:{
		body:"HTML",
		bodySummary:"String",
		createdAt:"DateTime",
		defaultCursor:"String",
		events:"EventConnection",
		handle:"String",
		id:"ID",
		isPublished:"Boolean",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		publishedAt:"DateTime",
		templateSuffix:"String",
		title:"String",
		translations:"Translation",
		updatedAt:"DateTime"
	},
	PageConnection:{
		edges:"PageEdge",
		nodes:"Page",
		pageInfo:"PageInfo"
	},
	PageCreatePayload:{
		page:"Page",
		userErrors:"PageCreateUserError"
	},
	PageCreateUserError:{
		code:"PageCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	PageDeletePayload:{
		deletedPageId:"ID",
		userErrors:"PageDeleteUserError"
	},
	PageDeleteUserError:{
		code:"PageDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	PageEdge:{
		cursor:"String",
		node:"Page"
	},
	PageInfo:{
		endCursor:"String",
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String"
	},
	PageUpdatePayload:{
		page:"Page",
		userErrors:"PageUpdateUserError"
	},
	PageUpdateUserError:{
		code:"PageUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentCustomization:{
		enabled:"Boolean",
		errorHistory:"FunctionsErrorHistory",
		functionId:"String",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		shopifyFunction:"ShopifyFunction",
		title:"String"
	},
	PaymentCustomizationActivationPayload:{
		ids:"String",
		userErrors:"PaymentCustomizationError"
	},
	PaymentCustomizationConnection:{
		edges:"PaymentCustomizationEdge",
		nodes:"PaymentCustomization",
		pageInfo:"PageInfo"
	},
	PaymentCustomizationCreatePayload:{
		paymentCustomization:"PaymentCustomization",
		userErrors:"PaymentCustomizationError"
	},
	PaymentCustomizationDeletePayload:{
		deletedId:"ID",
		userErrors:"PaymentCustomizationError"
	},
	PaymentCustomizationEdge:{
		cursor:"String",
		node:"PaymentCustomization"
	},
	PaymentCustomizationError:{
		code:"PaymentCustomizationErrorCode",
		field:"String",
		message:"String"
	},
	PaymentCustomizationUpdatePayload:{
		paymentCustomization:"PaymentCustomization",
		userErrors:"PaymentCustomizationError"
	},
	PaymentDetails:{
		"...on CardPaymentDetails":"CardPaymentDetails",
		"...on LocalPaymentMethodsPaymentDetails":"LocalPaymentMethodsPaymentDetails",
		"...on PaypalWalletPaymentDetails":"PaypalWalletPaymentDetails",
		"...on ShopPayInstallmentsPaymentDetails":"ShopPayInstallmentsPaymentDetails"
	},
	PaymentInstrument:{
		"...on VaultCreditCard":"VaultCreditCard",
		"...on VaultPaypalBillingAgreement":"VaultPaypalBillingAgreement"
	},
	PaymentMandate:{
		id:"ID",
		paymentInstrument:"PaymentInstrument"
	},
	PaymentMandateResource:{
		resourceId:"ID",
		resourceType:"MandateResourceType"
	},
	PaymentMandateResourceConnection:{
		edges:"PaymentMandateResourceEdge",
		nodes:"PaymentMandateResource",
		pageInfo:"PageInfo"
	},
	PaymentMandateResourceEdge:{
		cursor:"String",
		node:"PaymentMandateResource"
	},
	PaymentReminderSendPayload:{
		success:"Boolean",
		userErrors:"PaymentReminderSendUserError"
	},
	PaymentReminderSendUserError:{
		code:"PaymentReminderSendUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentSchedule:{
		amount:"MoneyV2",
		balanceDue:"MoneyV2",
		completedAt:"DateTime",
		due:"Boolean",
		dueAt:"DateTime",
		id:"ID",
		issuedAt:"DateTime",
		paymentTerms:"PaymentTerms",
		totalBalance:"MoneyV2"
	},
	PaymentScheduleConnection:{
		edges:"PaymentScheduleEdge",
		nodes:"PaymentSchedule",
		pageInfo:"PageInfo"
	},
	PaymentScheduleEdge:{
		cursor:"String",
		node:"PaymentSchedule"
	},
	PaymentSettings:{
		supportedDigitalWallets:"DigitalWallet"
	},
	PaymentTerms:{
		draftOrder:"DraftOrder",
		due:"Boolean",
		dueInDays:"Int",
		id:"ID",
		order:"Order",
		overdue:"Boolean",
		paymentSchedules:"PaymentScheduleConnection",
		paymentTermsName:"String",
		paymentTermsType:"PaymentTermsType",
		translatedName:"String"
	},
	PaymentTermsCreatePayload:{
		paymentTerms:"PaymentTerms",
		userErrors:"PaymentTermsCreateUserError"
	},
	PaymentTermsCreateUserError:{
		code:"PaymentTermsCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentTermsDeletePayload:{
		deletedId:"ID",
		userErrors:"PaymentTermsDeleteUserError"
	},
	PaymentTermsDeleteUserError:{
		code:"PaymentTermsDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	PaymentTermsTemplate:{
		description:"String",
		dueInDays:"Int",
		id:"ID",
		name:"String",
		paymentTermsType:"PaymentTermsType",
		translatedName:"String"
	},
	PaymentTermsUpdatePayload:{
		paymentTerms:"PaymentTerms",
		userErrors:"PaymentTermsUpdateUserError"
	},
	PaymentTermsUpdateUserError:{
		code:"PaymentTermsUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PaypalWalletPaymentDetails:{
		paymentMethodName:"String"
	},
	PickupInStoreLocation:{
		code:"String",
		distanceFromBuyer:"Distance",
		handle:"String",
		instructions:"String",
		locationId:"ID",
		source:"String",
		title:"String"
	},
	PointOfSaleDevice:{
		id:"ID"
	},
	PriceList:{
		catalog:"Catalog",
		currency:"CurrencyCode",
		fixedPricesCount:"Int",
		id:"ID",
		name:"String",
		parent:"PriceListParent",
		prices:"PriceListPriceConnection",
		quantityRules:"QuantityRuleConnection"
	},
	PriceListAdjustment:{
		type:"PriceListAdjustmentType",
		value:"Float"
	},
	PriceListAdjustmentSettings:{
		compareAtMode:"PriceListCompareAtMode"
	},
	PriceListConnection:{
		edges:"PriceListEdge",
		nodes:"PriceList",
		pageInfo:"PageInfo"
	},
	PriceListCreatePayload:{
		priceList:"PriceList",
		userErrors:"PriceListUserError"
	},
	PriceListDeletePayload:{
		deletedId:"ID",
		userErrors:"PriceListUserError"
	},
	PriceListEdge:{
		cursor:"String",
		node:"PriceList"
	},
	PriceListFixedPricesAddPayload:{
		prices:"PriceListPrice",
		userErrors:"PriceListPriceUserError"
	},
	PriceListFixedPricesByProductBulkUpdateUserError:{
		code:"PriceListFixedPricesByProductBulkUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PriceListFixedPricesByProductUpdatePayload:{
		priceList:"PriceList",
		pricesToAddProducts:"Product",
		pricesToDeleteProducts:"Product",
		userErrors:"PriceListFixedPricesByProductBulkUpdateUserError"
	},
	PriceListFixedPricesDeletePayload:{
		deletedFixedPriceVariantIds:"ID",
		userErrors:"PriceListPriceUserError"
	},
	PriceListFixedPricesUpdatePayload:{
		deletedFixedPriceVariantIds:"ID",
		priceList:"PriceList",
		pricesAdded:"PriceListPrice",
		userErrors:"PriceListPriceUserError"
	},
	PriceListParent:{
		adjustment:"PriceListAdjustment",
		settings:"PriceListAdjustmentSettings"
	},
	PriceListPrice:{
		compareAtPrice:"MoneyV2",
		originType:"PriceListPriceOriginType",
		price:"MoneyV2",
		quantityPriceBreaks:"QuantityPriceBreakConnection",
		variant:"ProductVariant"
	},
	PriceListPriceConnection:{
		edges:"PriceListPriceEdge",
		nodes:"PriceListPrice",
		pageInfo:"PageInfo"
	},
	PriceListPriceEdge:{
		cursor:"String",
		node:"PriceListPrice"
	},
	PriceListPriceUserError:{
		code:"PriceListPriceUserErrorCode",
		field:"String",
		message:"String"
	},
	PriceListUpdatePayload:{
		priceList:"PriceList",
		userErrors:"PriceListUserError"
	},
	PriceListUserError:{
		code:"PriceListUserErrorCode",
		field:"String",
		message:"String"
	},
	PriceRule:{
		allocationLimit:"Int",
		allocationMethod:"PriceRuleAllocationMethod",
		app:"App",
		combinesWith:"DiscountCombinesWith",
		createdAt:"DateTime",
		customerSelection:"PriceRuleCustomerSelection",
		discountClass:"DiscountClass",
		discountClasses:"DiscountClass",
		discountCodes:"PriceRuleDiscountCodeConnection",
		discountCodesCount:"Count",
		endsAt:"DateTime",
		entitlementToPrerequisiteQuantityRatio:"PriceRuleEntitlementToPrerequisiteQuantityRatio",
		events:"EventConnection",
		features:"PriceRuleFeature",
		hasTimelineComment:"Boolean",
		id:"ID",
		itemEntitlements:"PriceRuleItemEntitlements",
		itemPrerequisites:"PriceRuleLineItemPrerequisites",
		legacyResourceId:"UnsignedInt64",
		oncePerCustomer:"Boolean",
		prerequisiteQuantityRange:"PriceRuleQuantityRange",
		prerequisiteShippingPriceRange:"PriceRuleMoneyRange",
		prerequisiteSubtotalRange:"PriceRuleMoneyRange",
		prerequisiteToEntitlementQuantityRatio:"PriceRulePrerequisiteToEntitlementQuantityRatio",
		shareableUrls:"PriceRuleShareableUrl",
		shippingEntitlements:"PriceRuleShippingLineEntitlements",
		startsAt:"DateTime",
		status:"PriceRuleStatus",
		summary:"String",
		target:"PriceRuleTarget",
		title:"String",
		totalSales:"MoneyV2",
		traits:"PriceRuleTrait",
		usageCount:"Int",
		usageLimit:"Int",
		validityPeriod:"PriceRuleValidityPeriod",
		value:"PriceRuleValue",
		valueV2:"PricingValue"
	},
	PriceRuleCustomerSelection:{
		customers:"CustomerConnection",
		forAllCustomers:"Boolean",
		segments:"Segment"
	},
	PriceRuleDiscountCode:{
		app:"App",
		code:"String",
		id:"ID",
		usageCount:"Int"
	},
	PriceRuleDiscountCodeConnection:{
		edges:"PriceRuleDiscountCodeEdge",
		nodes:"PriceRuleDiscountCode",
		pageInfo:"PageInfo"
	},
	PriceRuleDiscountCodeEdge:{
		cursor:"String",
		node:"PriceRuleDiscountCode"
	},
	PriceRuleEntitlementToPrerequisiteQuantityRatio:{
		entitlementQuantity:"Int",
		prerequisiteQuantity:"Int"
	},
	PriceRuleFixedAmountValue:{
		amount:"Money"
	},
	PriceRuleItemEntitlements:{
		collections:"CollectionConnection",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection",
		targetAllLineItems:"Boolean"
	},
	PriceRuleLineItemPrerequisites:{
		collections:"CollectionConnection",
		productVariants:"ProductVariantConnection",
		products:"ProductConnection"
	},
	PriceRuleMoneyRange:{
		greaterThan:"Money",
		greaterThanOrEqualTo:"Money",
		lessThan:"Money",
		lessThanOrEqualTo:"Money"
	},
	PriceRulePercentValue:{
		percentage:"Float"
	},
	PriceRulePrerequisiteToEntitlementQuantityRatio:{
		entitlementQuantity:"Int",
		prerequisiteQuantity:"Int"
	},
	PriceRuleQuantityRange:{
		greaterThan:"Int",
		greaterThanOrEqualTo:"Int",
		lessThan:"Int",
		lessThanOrEqualTo:"Int"
	},
	PriceRuleShareableUrl:{
		targetItemImage:"Image",
		targetType:"PriceRuleShareableUrlTargetType",
		title:"String",
		url:"URL"
	},
	PriceRuleShippingLineEntitlements:{
		countryCodes:"CountryCode",
		includeRestOfWorld:"Boolean",
		targetAllShippingLines:"Boolean"
	},
	PriceRuleValidityPeriod:{
		end:"DateTime",
		start:"DateTime"
	},
	PriceRuleValue:{
		"...on PriceRuleFixedAmountValue":"PriceRuleFixedAmountValue",
		"...on PriceRulePercentValue":"PriceRulePercentValue"
	},
	PricingPercentageValue:{
		percentage:"Float"
	},
	PricingValue:{
		"...on MoneyV2":"MoneyV2",
		"...on PricingPercentageValue":"PricingPercentageValue"
	},
	PrivacyFeaturesDisablePayload:{
		featuresDisabled:"PrivacyFeaturesEnum",
		userErrors:"PrivacyFeaturesDisableUserError"
	},
	PrivacyFeaturesDisableUserError:{
		code:"PrivacyFeaturesDisableUserErrorCode",
		field:"String",
		message:"String"
	},
	PrivacyPolicy:{
		autoManaged:"Boolean",
		supportedLocales:"String"
	},
	PrivacySettings:{
		banner:"CookieBanner",
		dataSaleOptOutPage:"DataSaleOptOutPage",
		privacyPolicy:"PrivacyPolicy"
	},
	Product:{
		availablePublicationsCount:"Count",
		bodyHtml:"String",
		bundleComponents:"ProductBundleComponentConnection",
		category:"TaxonomyCategory",
		collections:"CollectionConnection",
		combinedListing:"CombinedListing",
		combinedListingRole:"CombinedListingsRole",
		compareAtPriceRange:"ProductCompareAtPriceRange",
		contextualPricing:"ProductContextualPricing",
		createdAt:"DateTime",
		customProductType:"String",
		defaultCursor:"String",
		description:"String",
		descriptionHtml:"HTML",
		descriptionPlainSummary:"String",
		events:"EventConnection",
		featuredImage:"Image",
		featuredMedia:"Media",
		feedback:"ResourceFeedback",
		giftCardTemplateSuffix:"String",
		handle:"String",
		hasOnlyDefaultVariant:"Boolean",
		hasOutOfStockVariants:"Boolean",
		hasVariantsThatRequiresComponents:"Boolean",
		id:"ID",
		images:"ImageConnection",
		inCollection:"Boolean",
		isGiftCard:"Boolean",
		legacyResourceId:"UnsignedInt64",
		media:"MediaConnection",
		mediaCount:"Count",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		onlineStorePreviewUrl:"URL",
		onlineStoreUrl:"URL",
		options:"ProductOption",
		priceRange:"ProductPriceRange",
		priceRangeV2:"ProductPriceRangeV2",
		productCategory:"ProductCategory",
		productComponents:"ProductComponentTypeConnection",
		productComponentsCount:"Count",
		productParents:"ProductConnection",
		productPublications:"ProductPublicationConnection",
		productType:"String",
		publicationCount:"Int",
		publications:"ProductPublicationConnection",
		publishedAt:"DateTime",
		publishedInContext:"Boolean",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		requiresSellingPlan:"Boolean",
		resourcePublicationOnCurrentPublication:"ResourcePublicationV2",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsCount:"Count",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		restrictedForResource:"RestrictedForResource",
		sellingPlanGroupCount:"Int",
		sellingPlanGroups:"SellingPlanGroupConnection",
		sellingPlanGroupsCount:"Count",
		seo:"SEO",
		standardizedProductType:"StandardizedProductType",
		status:"ProductStatus",
		storefrontId:"StorefrontID",
		tags:"String",
		templateSuffix:"String",
		title:"String",
		totalInventory:"Int",
		totalVariants:"Int",
		tracksInventory:"Boolean",
		translations:"Translation",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection",
		updatedAt:"DateTime",
		variants:"ProductVariantConnection",
		variantsCount:"Count",
		vendor:"String"
	},
	ProductBundleComponent:{
		componentProduct:"Product",
		componentVariants:"ProductVariantConnection",
		componentVariantsCount:"Count",
		optionSelections:"ProductBundleComponentOptionSelection",
		quantity:"Int",
		quantityOption:"ProductBundleComponentQuantityOption"
	},
	ProductBundleComponentConnection:{
		edges:"ProductBundleComponentEdge",
		nodes:"ProductBundleComponent",
		pageInfo:"PageInfo"
	},
	ProductBundleComponentEdge:{
		cursor:"String",
		node:"ProductBundleComponent"
	},
	ProductBundleComponentOptionSelection:{
		componentOption:"ProductOption",
		parentOption:"ProductOption",
		values:"ProductBundleComponentOptionSelectionValue"
	},
	ProductBundleComponentOptionSelectionValue:{
		selectionStatus:"ProductBundleComponentOptionSelectionStatus",
		value:"String"
	},
	ProductBundleComponentQuantityOption:{
		name:"String",
		parentOption:"ProductOption",
		values:"ProductBundleComponentQuantityOptionValue"
	},
	ProductBundleComponentQuantityOptionValue:{
		name:"String",
		quantity:"Int"
	},
	ProductBundleCreatePayload:{
		productBundleOperation:"ProductBundleOperation",
		userErrors:"UserError"
	},
	ProductBundleMutationUserError:{
		code:"ProductBundleMutationUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductBundleOperation:{
		id:"ID",
		product:"Product",
		status:"ProductOperationStatus",
		userErrors:"ProductBundleMutationUserError"
	},
	ProductBundleUpdatePayload:{
		productBundleOperation:"ProductBundleOperation",
		userErrors:"UserError"
	},
	ProductCategory:{
		productTaxonomyNode:"ProductTaxonomyNode"
	},
	ProductChangeStatusPayload:{
		product:"Product",
		userErrors:"ProductChangeStatusUserError"
	},
	ProductChangeStatusUserError:{
		code:"ProductChangeStatusUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductCompareAtPriceRange:{
		maxVariantCompareAtPrice:"MoneyV2",
		minVariantCompareAtPrice:"MoneyV2"
	},
	ProductComponentType:{
		componentVariants:"ProductVariantConnection",
		componentVariantsCount:"Count",
		nonComponentVariants:"ProductVariantConnection",
		nonComponentVariantsCount:"Count",
		product:"Product"
	},
	ProductComponentTypeConnection:{
		edges:"ProductComponentTypeEdge",
		nodes:"ProductComponentType",
		pageInfo:"PageInfo"
	},
	ProductComponentTypeEdge:{
		cursor:"String",
		node:"ProductComponentType"
	},
	ProductConnection:{
		edges:"ProductEdge",
		nodes:"Product",
		pageInfo:"PageInfo"
	},
	ProductContextualPricing:{
		fixedQuantityRulesCount:"Int",
		maxVariantPricing:"ProductVariantContextualPricing",
		minVariantPricing:"ProductVariantContextualPricing",
		priceRange:"ProductPriceRangeV2"
	},
	ProductCreateMediaPayload:{
		media:"Media",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductCreatePayload:{
		product:"Product",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductDeleteMediaPayload:{
		deletedMediaIds:"ID",
		deletedProductImageIds:"ID",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductDeleteOperation:{
		deletedProductId:"ID",
		id:"ID",
		product:"Product",
		status:"ProductOperationStatus",
		userErrors:"UserError"
	},
	ProductDeletePayload:{
		deletedProductId:"ID",
		productDeleteOperation:"ProductDeleteOperation",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductDuplicateJob:{
		done:"Boolean",
		id:"ID"
	},
	ProductDuplicateOperation:{
		id:"ID",
		newProduct:"Product",
		product:"Product",
		status:"ProductOperationStatus",
		userErrors:"UserError"
	},
	ProductDuplicatePayload:{
		imageJob:"Job",
		newProduct:"Product",
		productDuplicateOperation:"ProductDuplicateOperation",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductEdge:{
		cursor:"String",
		node:"Product"
	},
	ProductFeed:{
		country:"CountryCode",
		id:"ID",
		language:"LanguageCode",
		status:"ProductFeedStatus"
	},
	ProductFeedConnection:{
		edges:"ProductFeedEdge",
		nodes:"ProductFeed",
		pageInfo:"PageInfo"
	},
	ProductFeedCreatePayload:{
		productFeed:"ProductFeed",
		userErrors:"ProductFeedCreateUserError"
	},
	ProductFeedCreateUserError:{
		code:"ProductFeedCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductFeedDeletePayload:{
		deletedId:"ID",
		userErrors:"ProductFeedDeleteUserError"
	},
	ProductFeedDeleteUserError:{
		code:"ProductFeedDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductFeedEdge:{
		cursor:"String",
		node:"ProductFeed"
	},
	ProductFullSyncPayload:{
		id:"ID",
		userErrors:"ProductFullSyncUserError"
	},
	ProductFullSyncUserError:{
		code:"ProductFullSyncUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductJoinSellingPlanGroupsPayload:{
		product:"Product",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductLeaveSellingPlanGroupsPayload:{
		product:"Product",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductOperation:{
		"...on ProductBundleOperation": "ProductBundleOperation",
		"...on ProductDeleteOperation": "ProductDeleteOperation",
		"...on ProductDuplicateOperation": "ProductDuplicateOperation",
		"...on ProductSetOperation": "ProductSetOperation",
		product:"Product",
		status:"ProductOperationStatus"
	},
	ProductOption:{
		id:"ID",
		linkedMetafield:"LinkedMetafield",
		name:"String",
		optionValues:"ProductOptionValue",
		position:"Int",
		translations:"Translation",
		values:"String"
	},
	ProductOptionUpdatePayload:{
		product:"Product",
		userErrors:"ProductOptionUpdateUserError"
	},
	ProductOptionUpdateUserError:{
		code:"ProductOptionUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductOptionValue:{
		hasVariants:"Boolean",
		id:"ID",
		linkedMetafieldValue:"String",
		name:"String",
		swatch:"ProductOptionValueSwatch",
		translations:"Translation"
	},
	ProductOptionValueSwatch:{
		color:"Color",
		image:"MediaImage"
	},
	ProductOptionsCreatePayload:{
		product:"Product",
		userErrors:"ProductOptionsCreateUserError"
	},
	ProductOptionsCreateUserError:{
		code:"ProductOptionsCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductOptionsDeletePayload:{
		deletedOptionsIds:"ID",
		product:"Product",
		userErrors:"ProductOptionsDeleteUserError"
	},
	ProductOptionsDeleteUserError:{
		code:"ProductOptionsDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductOptionsReorderPayload:{
		product:"Product",
		userErrors:"ProductOptionsReorderUserError"
	},
	ProductOptionsReorderUserError:{
		code:"ProductOptionsReorderUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductPriceRange:{
		maxVariantPrice:"MoneyV2",
		minVariantPrice:"MoneyV2"
	},
	ProductPriceRangeV2:{
		maxVariantPrice:"MoneyV2",
		minVariantPrice:"MoneyV2"
	},
	ProductPublication:{
		channel:"Channel",
		isPublished:"Boolean",
		product:"Product",
		publishDate:"DateTime"
	},
	ProductPublicationConnection:{
		edges:"ProductPublicationEdge",
		nodes:"ProductPublication",
		pageInfo:"PageInfo"
	},
	ProductPublicationEdge:{
		cursor:"String",
		node:"ProductPublication"
	},
	ProductPublishPayload:{
		product:"Product",
		productPublications:"ProductPublication",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductReorderMediaPayload:{
		job:"Job",
		mediaUserErrors:"MediaUserError",
		userErrors:"UserError"
	},
	ProductResourceFeedback:{
		feedbackGeneratedAt:"DateTime",
		messages:"String",
		productId:"ID",
		productUpdatedAt:"DateTime",
		state:"ResourceFeedbackState"
	},
	ProductSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	ProductSetOperation:{
		id:"ID",
		product:"Product",
		status:"ProductOperationStatus",
		userErrors:"ProductSetUserError"
	},
	ProductSetPayload:{
		product:"Product",
		productSetOperation:"ProductSetOperation",
		userErrors:"ProductSetUserError"
	},
	ProductSetUserError:{
		code:"ProductSetUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductTaxonomyNode:{
		fullName:"String",
		id:"ID",
		isLeaf:"Boolean",
		isRoot:"Boolean",
		name:"String"
	},
	ProductUnpublishPayload:{
		product:"Product",
		shop:"Shop",
		userErrors:"UserError"
	},
	ProductUpdateMediaPayload:{
		media:"Media",
		mediaUserErrors:"MediaUserError",
		product:"Product",
		userErrors:"UserError"
	},
	ProductUpdatePayload:{
		product:"Product",
		userErrors:"UserError"
	},
	ProductVariant:{
		availableForSale:"Boolean",
		barcode:"String",
		compareAtPrice:"Money",
		contextualPricing:"ProductVariantContextualPricing",
		createdAt:"DateTime",
		defaultCursor:"String",
		deliveryProfile:"DeliveryProfile",
		displayName:"String",
		events:"EventConnection",
		id:"ID",
		image:"Image",
		inventoryItem:"InventoryItem",
		inventoryPolicy:"ProductVariantInventoryPolicy",
		inventoryQuantity:"Int",
		legacyResourceId:"UnsignedInt64",
		media:"MediaConnection",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		position:"Int",
		presentmentPrices:"ProductVariantPricePairConnection",
		price:"Money",
		product:"Product",
		productParents:"ProductConnection",
		productVariantComponents:"ProductVariantComponentConnection",
		requiresComponents:"Boolean",
		selectedOptions:"SelectedOption",
		sellableOnlineQuantity:"Int",
		sellingPlanGroupCount:"Int",
		sellingPlanGroups:"SellingPlanGroupConnection",
		sellingPlanGroupsCount:"Count",
		showUnitPrice:"Boolean",
		sku:"String",
		storefrontId:"StorefrontID",
		taxCode:"String",
		taxable:"Boolean",
		title:"String",
		translations:"Translation",
		unitPrice:"MoneyV2",
		unitPriceMeasurement:"UnitPriceMeasurement",
		updatedAt:"DateTime"
	},
	ProductVariantAppendMediaPayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"MediaUserError"
	},
	ProductVariantComponent:{
		id:"ID",
		productVariant:"ProductVariant",
		quantity:"Int"
	},
	ProductVariantComponentConnection:{
		edges:"ProductVariantComponentEdge",
		nodes:"ProductVariantComponent",
		pageInfo:"PageInfo"
	},
	ProductVariantComponentEdge:{
		cursor:"String",
		node:"ProductVariantComponent"
	},
	ProductVariantConnection:{
		edges:"ProductVariantEdge",
		nodes:"ProductVariant",
		pageInfo:"PageInfo"
	},
	ProductVariantContextualPricing:{
		compareAtPrice:"MoneyV2",
		price:"MoneyV2",
		quantityPriceBreaks:"QuantityPriceBreakConnection",
		quantityRule:"QuantityRule",
		unitPrice:"MoneyV2"
	},
	ProductVariantDetachMediaPayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"MediaUserError"
	},
	ProductVariantEdge:{
		cursor:"String",
		node:"ProductVariant"
	},
	ProductVariantJoinSellingPlanGroupsPayload:{
		productVariant:"ProductVariant",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductVariantLeaveSellingPlanGroupsPayload:{
		productVariant:"ProductVariant",
		userErrors:"SellingPlanGroupUserError"
	},
	ProductVariantPricePair:{
		compareAtPrice:"MoneyV2",
		price:"MoneyV2"
	},
	ProductVariantPricePairConnection:{
		edges:"ProductVariantPricePairEdge",
		nodes:"ProductVariantPricePair",
		pageInfo:"PageInfo"
	},
	ProductVariantPricePairEdge:{
		cursor:"String",
		node:"ProductVariantPricePair"
	},
	ProductVariantRelationshipBulkUpdatePayload:{
		parentProductVariants:"ProductVariant",
		userErrors:"ProductVariantRelationshipBulkUpdateUserError"
	},
	ProductVariantRelationshipBulkUpdateUserError:{
		code:"ProductVariantRelationshipBulkUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkCreatePayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"ProductVariantsBulkCreateUserError"
	},
	ProductVariantsBulkCreateUserError:{
		code:"ProductVariantsBulkCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkDeletePayload:{
		product:"Product",
		userErrors:"ProductVariantsBulkDeleteUserError"
	},
	ProductVariantsBulkDeleteUserError:{
		code:"ProductVariantsBulkDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkReorderPayload:{
		product:"Product",
		userErrors:"ProductVariantsBulkReorderUserError"
	},
	ProductVariantsBulkReorderUserError:{
		code:"ProductVariantsBulkReorderUserErrorCode",
		field:"String",
		message:"String"
	},
	ProductVariantsBulkUpdatePayload:{
		product:"Product",
		productVariants:"ProductVariant",
		userErrors:"ProductVariantsBulkUpdateUserError"
	},
	ProductVariantsBulkUpdateUserError:{
		code:"ProductVariantsBulkUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	PubSubServerPixelUpdatePayload:{
		serverPixel:"ServerPixel",
		userErrors:"ErrorsServerPixelUserError"
	},
	PubSubWebhookSubscriptionCreatePayload:{
		userErrors:"PubSubWebhookSubscriptionCreateUserError",
		webhookSubscription:"WebhookSubscription"
	},
	PubSubWebhookSubscriptionCreateUserError:{
		code:"PubSubWebhookSubscriptionCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	PubSubWebhookSubscriptionUpdatePayload:{
		userErrors:"PubSubWebhookSubscriptionUpdateUserError",
		webhookSubscription:"WebhookSubscription"
	},
	PubSubWebhookSubscriptionUpdateUserError:{
		code:"PubSubWebhookSubscriptionUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	Publication:{
		app:"App",
		autoPublish:"Boolean",
		catalog:"Catalog",
		collectionPublicationsV3:"ResourcePublicationConnection",
		collections:"CollectionConnection",
		hasCollection:"Boolean",
		id:"ID",
		includedProducts:"ProductConnection",
		includedProductsCount:"Count",
		name:"String",
		operation:"PublicationOperation",
		productPublicationsV3:"ResourcePublicationConnection",
		products:"ProductConnection",
		supportsFuturePublishing:"Boolean"
	},
	PublicationConnection:{
		edges:"PublicationEdge",
		nodes:"Publication",
		pageInfo:"PageInfo"
	},
	PublicationCreatePayload:{
		publication:"Publication",
		userErrors:"PublicationUserError"
	},
	PublicationDeletePayload:{
		deletedId:"ID",
		userErrors:"PublicationUserError"
	},
	PublicationEdge:{
		cursor:"String",
		node:"Publication"
	},
	PublicationOperation:{
		"...on AddAllProductsOperation":"AddAllProductsOperation",
		"...on CatalogCsvOperation":"CatalogCsvOperation",
		"...on PublicationResourceOperation":"PublicationResourceOperation"
	},
	PublicationResourceOperation:{
		id:"ID",
		processedRowCount:"Int",
		rowCount:"RowCount",
		status:"ResourceOperationStatus"
	},
	PublicationUpdatePayload:{
		publication:"Publication",
		userErrors:"PublicationUserError"
	},
	PublicationUserError:{
		code:"PublicationUserErrorCode",
		field:"String",
		message:"String"
	},
	Publishable:{
		"...on Collection": "Collection",
		"...on Product": "Product",
		availablePublicationsCount:"Count",
		publicationCount:"Int",
		publishedOnChannel:"Boolean",
		publishedOnCurrentChannel:"Boolean",
		publishedOnCurrentPublication:"Boolean",
		publishedOnPublication:"Boolean",
		resourcePublications:"ResourcePublicationConnection",
		resourcePublicationsCount:"Count",
		resourcePublicationsV2:"ResourcePublicationV2Connection",
		unpublishedChannels:"ChannelConnection",
		unpublishedPublications:"PublicationConnection"
	},
	PublishablePublishPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishablePublishToCurrentChannelPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishableUnpublishPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PublishableUnpublishToCurrentChannelPayload:{
		publishable:"Publishable",
		shop:"Shop",
		userErrors:"UserError"
	},
	PurchasingCompany:{
		company:"Company",
		contact:"CompanyContact",
		location:"CompanyLocation"
	},
	PurchasingEntity:{
		"...on Customer":"Customer",
		"...on PurchasingCompany":"PurchasingCompany"
	},
	QuantityPriceBreak:{
		id:"ID",
		minimumQuantity:"Int",
		price:"MoneyV2",
		priceList:"PriceList",
		variant:"ProductVariant"
	},
	QuantityPriceBreakConnection:{
		edges:"QuantityPriceBreakEdge",
		nodes:"QuantityPriceBreak",
		pageInfo:"PageInfo"
	},
	QuantityPriceBreakEdge:{
		cursor:"String",
		node:"QuantityPriceBreak"
	},
	QuantityPricingByVariantUpdatePayload:{
		productVariants:"ProductVariant",
		userErrors:"QuantityPricingByVariantUserError"
	},
	QuantityPricingByVariantUserError:{
		code:"QuantityPricingByVariantUserErrorCode",
		field:"String",
		message:"String"
	},
	QuantityRule:{
		increment:"Int",
		isDefault:"Boolean",
		maximum:"Int",
		minimum:"Int",
		originType:"QuantityRuleOriginType",
		productVariant:"ProductVariant"
	},
	QuantityRuleConnection:{
		edges:"QuantityRuleEdge",
		nodes:"QuantityRule",
		pageInfo:"PageInfo"
	},
	QuantityRuleEdge:{
		cursor:"String",
		node:"QuantityRule"
	},
	QuantityRuleUserError:{
		code:"QuantityRuleUserErrorCode",
		field:"String",
		message:"String"
	},
	QuantityRulesAddPayload:{
		quantityRules:"QuantityRule",
		userErrors:"QuantityRuleUserError"
	},
	QuantityRulesDeletePayload:{
		deletedQuantityRulesVariantIds:"ID",
		userErrors:"QuantityRuleUserError"
	},
	QueryRoot:{
		abandonedCheckouts:"AbandonedCheckoutConnection",
		abandonedCheckoutsCount:"Count",
		abandonment:"Abandonment",
		abandonmentByAbandonedCheckoutId:"Abandonment",
		app:"App",
		appByHandle:"App",
		appByKey:"App",
		appDiscountType:"AppDiscountType",
		appDiscountTypes:"AppDiscountType",
		appDiscountTypesNodes:"AppDiscountTypeConnection",
		appInstallation:"AppInstallation",
		appInstallations:"AppInstallationConnection",
		article:"Article",
		articleAuthors:"ArticleAuthorConnection",
		articleTags:"String",
		articles:"ArticleConnection",
		assignedFulfillmentOrders:"FulfillmentOrderConnection",
		automaticDiscount:"DiscountAutomatic",
		automaticDiscountNode:"DiscountAutomaticNode",
		automaticDiscountNodes:"DiscountAutomaticNodeConnection",
		automaticDiscountSavedSearches:"SavedSearchConnection",
		automaticDiscounts:"DiscountAutomaticConnection",
		availableBackupRegions:"MarketRegion",
		availableCarrierServices:"DeliveryCarrierServiceAndLocations",
		availableLocales:"Locale",
		backupRegion:"MarketRegion",
		blog:"Blog",
		blogs:"BlogConnection",
		blogsCount:"Count",
		businessEntities:"BusinessEntity",
		businessEntity:"BusinessEntity",
		carrierService:"DeliveryCarrierService",
		carrierServices:"DeliveryCarrierServiceConnection",
		cartTransforms:"CartTransformConnection",
		cashTrackingSession:"CashTrackingSession",
		cashTrackingSessions:"CashTrackingSessionConnection",
		catalog:"Catalog",
		catalogOperations:"ResourceOperation",
		catalogs:"CatalogConnection",
		catalogsCount:"Count",
		channel:"Channel",
		channels:"ChannelConnection",
		checkoutBranding:"CheckoutBranding",
		checkoutProfile:"CheckoutProfile",
		checkoutProfiles:"CheckoutProfileConnection",
		codeDiscountNode:"DiscountCodeNode",
		codeDiscountNodeByCode:"DiscountCodeNode",
		codeDiscountNodes:"DiscountCodeNodeConnection",
		codeDiscountSavedSearches:"SavedSearchConnection",
		collection:"Collection",
		collectionByHandle:"Collection",
		collectionByIdentifier:"Collection",
		collectionRulesConditions:"CollectionRuleConditions",
		collectionSavedSearches:"SavedSearchConnection",
		collections:"CollectionConnection",
		collectionsCount:"Count",
		comment:"Comment",
		comments:"CommentConnection",
		companies:"CompanyConnection",
		companiesCount:"Count",
		company:"Company",
		companyContact:"CompanyContact",
		companyContactRole:"CompanyContactRole",
		companyLocation:"CompanyLocation",
		companyLocations:"CompanyLocationConnection",
		consentPolicy:"ConsentPolicy",
		consentPolicyRegions:"ConsentPolicyRegion",
		currentAppInstallation:"AppInstallation",
		currentBulkOperation:"BulkOperation",
		currentStaffMember:"StaffMember",
		customer:"Customer",
		customerAccountPage:"CustomerAccountPage",
		customerAccountPages:"CustomerAccountPageConnection",
		customerByIdentifier:"Customer",
		customerMergeJobStatus:"CustomerMergeRequest",
		customerMergePreview:"CustomerMergePreview",
		customerPaymentMethod:"CustomerPaymentMethod",
		customerSavedSearches:"SavedSearchConnection",
		customerSegmentMembers:"CustomerSegmentMemberConnection",
		customerSegmentMembersQuery:"CustomerSegmentMembersQuery",
		customerSegmentMembership:"SegmentMembershipResponse",
		customers:"CustomerConnection",
		customersCount:"Count",
		deletionEvents:"DeletionEventConnection",
		deliveryCustomization:"DeliveryCustomization",
		deliveryCustomizations:"DeliveryCustomizationConnection",
		deliveryProfile:"DeliveryProfile",
		deliveryProfiles:"DeliveryProfileConnection",
		deliveryPromiseParticipants:"DeliveryPromiseParticipantConnection",
		deliveryPromiseProvider:"DeliveryPromiseProvider",
		deliveryPromiseSettings:"DeliveryPromiseSetting",
		deliverySettings:"DeliverySetting",
		discountCodesCount:"Count",
		discountNode:"DiscountNode",
		discountNodes:"DiscountNodeConnection",
		discountNodesCount:"Count",
		discountRedeemCodeBulkCreation:"DiscountRedeemCodeBulkCreation",
		discountRedeemCodeSavedSearches:"SavedSearchConnection",
		dispute:"ShopifyPaymentsDispute",
		disputeEvidence:"ShopifyPaymentsDisputeEvidence",
		disputes:"ShopifyPaymentsDisputeConnection",
		domain:"Domain",
		draftOrder:"DraftOrder",
		draftOrderAvailableDeliveryOptions:"DraftOrderAvailableDeliveryOptions",
		draftOrderSavedSearches:"SavedSearchConnection",
		draftOrderTag:"DraftOrderTag",
		draftOrders:"DraftOrderConnection",
		draftOrdersCount:"Count",
		event:"Event",
		events:"EventConnection",
		eventsCount:"Count",
		fileSavedSearches:"SavedSearchConnection",
		files:"FileConnection",
		financeAppAccessPolicy:"FinanceAppAccessPolicy",
		financeKycInformation:"FinanceKycInformation",
		fulfillment:"Fulfillment",
		fulfillmentConstraintRules:"FulfillmentConstraintRule",
		fulfillmentOrder:"FulfillmentOrder",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillmentService:"FulfillmentService",
		giftCard:"GiftCard",
		giftCardConfiguration:"GiftCardConfiguration",
		giftCards:"GiftCardConnection",
		giftCardsCount:"Count",
		inventoryItem:"InventoryItem",
		inventoryItems:"InventoryItemConnection",
		inventoryLevel:"InventoryLevel",
		inventoryProperties:"InventoryProperties",
		inventoryShipment:"InventoryShipment",
		inventoryTransfer:"InventoryTransfer",
		inventoryTransfers:"InventoryTransferConnection",
		job:"Job",
		location:"Location",
		locationByIdentifier:"Location",
		locations:"LocationConnection",
		locationsAvailableForDeliveryProfiles:"Location",
		locationsAvailableForDeliveryProfilesConnection:"LocationConnection",
		locationsCount:"Count",
		manualHoldsFulfillmentOrders:"FulfillmentOrderConnection",
		market:"Market",
		marketByGeography:"Market",
		marketLocalizableResource:"MarketLocalizableResource",
		marketLocalizableResources:"MarketLocalizableResourceConnection",
		marketLocalizableResourcesByIds:"MarketLocalizableResourceConnection",
		marketingActivities:"MarketingActivityConnection",
		marketingActivity:"MarketingActivity",
		marketingEvent:"MarketingEvent",
		marketingEvents:"MarketingEventConnection",
		markets:"MarketConnection",
		marketsResolvedValues:"MarketsResolvedValues",
		menu:"Menu",
		menus:"MenuConnection",
		metafieldDefinition:"MetafieldDefinition",
		metafieldDefinitionTypes:"MetafieldDefinitionType",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metaobject:"Metaobject",
		metaobjectByHandle:"Metaobject",
		metaobjectDefinition:"MetaobjectDefinition",
		metaobjectDefinitionByType:"MetaobjectDefinition",
		metaobjectDefinitions:"MetaobjectDefinitionConnection",
		metaobjects:"MetaobjectConnection",
		mobilePlatformApplication:"MobilePlatformApplication",
		mobilePlatformApplications:"MobilePlatformApplicationConnection",
		node:"Node",
		nodes:"Node",
		onlineStore:"OnlineStore",
		order:"Order",
		orderByIdentifier:"Order",
		orderEditSession:"OrderEditSession",
		orderPaymentStatus:"OrderPaymentStatus",
		orderSavedSearches:"SavedSearchConnection",
		orders:"OrderConnection",
		ordersCount:"Count",
		page:"Page",
		pages:"PageConnection",
		pagesCount:"Count",
		paymentCustomization:"PaymentCustomization",
		paymentCustomizations:"PaymentCustomizationConnection",
		paymentTermsTemplates:"PaymentTermsTemplate",
		pendingOrdersCount:"Count",
		pointOfSaleDevice:"PointOfSaleDevice",
		priceList:"PriceList",
		priceLists:"PriceListConnection",
		primaryMarket:"Market",
		privacySettings:"PrivacySettings",
		product:"Product",
		productByHandle:"Product",
		productByIdentifier:"Product",
		productDuplicateJob:"ProductDuplicateJob",
		productFeed:"ProductFeed",
		productFeeds:"ProductFeedConnection",
		productOperation:"ProductOperation",
		productResourceFeedback:"ProductResourceFeedback",
		productSavedSearches:"SavedSearchConnection",
		productTags:"StringConnection",
		productTypes:"StringConnection",
		productVariant:"ProductVariant",
		productVariantByIdentifier:"ProductVariant",
		productVariants:"ProductVariantConnection",
		productVariantsCount:"Count",
		productVendors:"StringConnection",
		products:"ProductConnection",
		productsCount:"Count",
		publicApiVersions:"ApiVersion",
		publication:"Publication",
		publications:"PublicationConnection",
		publicationsCount:"Count",
		publishedProductsCount:"Count",
		refund:"Refund",
		return:"Return",
		returnCalculate:"CalculatedReturn",
		returnableFulfillment:"ReturnableFulfillment",
		returnableFulfillments:"ReturnableFulfillmentConnection",
		reverseDelivery:"ReverseDelivery",
		reverseFulfillmentOrder:"ReverseFulfillmentOrder",
		scriptTag:"ScriptTag",
		scriptTags:"ScriptTagConnection",
		segment:"Segment",
		segmentFilterSuggestions:"SegmentFilterConnection",
		segmentFilters:"SegmentFilterConnection",
		segmentMigrations:"SegmentMigrationConnection",
		segmentValueSuggestions:"SegmentValueConnection",
		segments:"SegmentConnection",
		segmentsCount:"Count",
		sellingPlanGroup:"SellingPlanGroup",
		sellingPlanGroups:"SellingPlanGroupConnection",
		serverPixel:"ServerPixel",
		shop:"Shop",
		shopBillingPreferences:"ShopBillingPreferences",
		shopLocales:"ShopLocale",
		shopPayPaymentRequestReceipt:"ShopPayPaymentRequestReceipt",
		shopPayPaymentRequestReceipts:"ShopPayPaymentRequestReceiptConnection",
		shopifyFunction:"ShopifyFunction",
		shopifyFunctions:"ShopifyFunctionConnection",
		shopifyPaymentsAccount:"ShopifyPaymentsAccount",
		shopifyqlQuery:"ShopifyqlQueryResponse",
		staffMember:"StaffMember",
		staffMembers:"StaffMemberConnection",
		standardMetafieldDefinitionTemplates:"StandardMetafieldDefinitionTemplateConnection",
		storeCreditAccount:"StoreCreditAccount",
		subscriptionBillingAttempt:"SubscriptionBillingAttempt",
		subscriptionBillingAttempts:"SubscriptionBillingAttemptConnection",
		subscriptionBillingCycle:"SubscriptionBillingCycle",
		subscriptionBillingCycleBulkResults:"SubscriptionBillingCycleConnection",
		subscriptionBillingCycles:"SubscriptionBillingCycleConnection",
		subscriptionContract:"SubscriptionContract",
		subscriptionContracts:"SubscriptionContractConnection",
		subscriptionDraft:"SubscriptionDraft",
		taxonomy:"Taxonomy",
		tenderTransactions:"TenderTransactionConnection",
		theme:"OnlineStoreTheme",
		themes:"OnlineStoreThemeConnection",
		translatableResource:"TranslatableResource",
		translatableResources:"TranslatableResourceConnection",
		translatableResourcesByIds:"TranslatableResourceConnection",
		urlRedirect:"UrlRedirect",
		urlRedirectImport:"UrlRedirectImport",
		urlRedirectSavedSearches:"SavedSearchConnection",
		urlRedirects:"UrlRedirectConnection",
		urlRedirectsCount:"Count",
		validation:"Validation",
		validations:"ValidationConnection",
		webPixel:"WebPixel",
		webPresences:"MarketWebPresenceConnection",
		webhookSubscription:"WebhookSubscription",
		webhookSubscriptions:"WebhookSubscriptionConnection",
		webhookSubscriptionsCount:"Count"
	},
	Refund:{
		createdAt:"DateTime",
		duties:"RefundDuty",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		note:"String",
		order:"Order",
		orderAdjustments:"OrderAdjustmentConnection",
		refundLineItems:"RefundLineItemConnection",
		refundShippingLines:"RefundShippingLineConnection",
		return:"Return",
		staffMember:"StaffMember",
		totalRefunded:"MoneyV2",
		totalRefundedSet:"MoneyBag",
		transactions:"OrderTransactionConnection",
		updatedAt:"DateTime"
	},
	RefundAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		refund:"Refund",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	RefundConnection:{
		edges:"RefundEdge",
		nodes:"Refund",
		pageInfo:"PageInfo"
	},
	RefundCreatePayload:{
		order:"Order",
		refund:"Refund",
		userErrors:"UserError"
	},
	RefundDuty:{
		amountSet:"MoneyBag",
		originalDuty:"Duty"
	},
	RefundEdge:{
		cursor:"String",
		node:"Refund"
	},
	RefundLineItem:{
		id:"ID",
		lineItem:"LineItem",
		location:"Location",
		price:"Money",
		priceSet:"MoneyBag",
		quantity:"Int",
		restockType:"RefundLineItemRestockType",
		restocked:"Boolean",
		subtotal:"Money",
		subtotalSet:"MoneyBag",
		totalTax:"Money",
		totalTaxSet:"MoneyBag"
	},
	RefundLineItemConnection:{
		edges:"RefundLineItemEdge",
		nodes:"RefundLineItem",
		pageInfo:"PageInfo"
	},
	RefundLineItemEdge:{
		cursor:"String",
		node:"RefundLineItem"
	},
	RefundReturnOutcome:{
		amount:"MoneyBag",
		suggestedRefundMethods:"SuggestedRefundMethod",
		suggestedTransactions:"SuggestedOrderTransaction"
	},
	RefundShippingLine:{
		id:"ID",
		shippingLine:"ShippingLine",
		subtotalAmountSet:"MoneyBag",
		taxAmountSet:"MoneyBag"
	},
	RefundShippingLineConnection:{
		edges:"RefundShippingLineEdge",
		nodes:"RefundShippingLine",
		pageInfo:"PageInfo"
	},
	RefundShippingLineEdge:{
		cursor:"String",
		node:"RefundShippingLine"
	},
	RegionsCondition:{
		applicationLevel:"MarketConditionApplicationType",
		regions:"MarketRegionConnection"
	},
	RemoveFromReturnPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ResolvedPriceInclusivity:{
		dutiesIncluded:"Boolean",
		taxesIncluded:"Boolean"
	},
	ResourceAlert:{
		actions:"ResourceAlertAction",
		content:"HTML",
		dismissibleHandle:"String",
		icon:"ResourceAlertIcon",
		severity:"ResourceAlertSeverity",
		title:"String"
	},
	ResourceAlertAction:{
		primary:"Boolean",
		show:"String",
		title:"String",
		url:"URL"
	},
	ResourceFeedback:{
		appFeedback:"AppFeedback",
		details:"AppFeedback",
		summary:"String"
	},
	ResourceOperation:{
		"...on AddAllProductsOperation": "AddAllProductsOperation",
		"...on CatalogCsvOperation": "CatalogCsvOperation",
		"...on PublicationResourceOperation": "PublicationResourceOperation",
		id:"ID",
		processedRowCount:"Int",
		rowCount:"RowCount",
		status:"ResourceOperationStatus"
	},
	ResourcePublication:{
		channel:"Channel",
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime",
		publishable:"Publishable"
	},
	ResourcePublicationConnection:{
		edges:"ResourcePublicationEdge",
		nodes:"ResourcePublication",
		pageInfo:"PageInfo"
	},
	ResourcePublicationEdge:{
		cursor:"String",
		node:"ResourcePublication"
	},
	ResourcePublicationV2:{
		isPublished:"Boolean",
		publication:"Publication",
		publishDate:"DateTime",
		publishable:"Publishable"
	},
	ResourcePublicationV2Connection:{
		edges:"ResourcePublicationV2Edge",
		nodes:"ResourcePublicationV2",
		pageInfo:"PageInfo"
	},
	ResourcePublicationV2Edge:{
		cursor:"String",
		node:"ResourcePublicationV2"
	},
	RestockingFee:{
		amountSet:"MoneyBag",
		id:"ID",
		percentage:"Float"
	},
	RestrictedForResource:{
		restricted:"Boolean",
		restrictedReason:"String"
	},
	Return:{
		closedAt:"DateTime",
		createdAt:"DateTime",
		decline:"ReturnDecline",
		exchangeLineItems:"ExchangeLineItemConnection",
		id:"ID",
		name:"String",
		order:"Order",
		refunds:"RefundConnection",
		requestApprovedAt:"DateTime",
		returnLineItems:"ReturnLineItemTypeConnection",
		returnShippingFees:"ReturnShippingFee",
		reverseFulfillmentOrders:"ReverseFulfillmentOrderConnection",
		status:"ReturnStatus",
		suggestedFinancialOutcome:"SuggestedReturnFinancialOutcome",
		suggestedRefund:"SuggestedReturnRefund",
		totalQuantity:"Int"
	},
	ReturnAgreement:{
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		return:"Return",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	ReturnApproveRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnCancelPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnClosePayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnConnection:{
		edges:"ReturnEdge",
		nodes:"Return",
		pageInfo:"PageInfo"
	},
	ReturnCreatePayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnDecline:{
		note:"String",
		reason:"ReturnDeclineReason"
	},
	ReturnDeclineRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnEdge:{
		cursor:"String",
		node:"Return"
	},
	ReturnLineItem:{
		customerNote:"String",
		fulfillmentLineItem:"FulfillmentLineItem",
		id:"ID",
		processableQuantity:"Int",
		processedQuantity:"Int",
		quantity:"Int",
		refundableQuantity:"Int",
		refundedQuantity:"Int",
		restockingFee:"RestockingFee",
		returnReason:"ReturnReason",
		returnReasonNote:"String",
		totalWeight:"Weight",
		unprocessedQuantity:"Int",
		withCodeDiscountedTotalPriceSet:"MoneyBag"
	},
	ReturnLineItemRemoveFromReturnPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnLineItemType:{
		"...on ReturnLineItem": "ReturnLineItem",
		"...on UnverifiedReturnLineItem": "UnverifiedReturnLineItem",
		customerNote:"String",
		id:"ID",
		processableQuantity:"Int",
		processedQuantity:"Int",
		quantity:"Int",
		refundableQuantity:"Int",
		refundedQuantity:"Int",
		returnReason:"ReturnReason",
		returnReasonNote:"String",
		unprocessedQuantity:"Int"
	},
	ReturnLineItemTypeConnection:{
		edges:"ReturnLineItemTypeEdge",
		nodes:"ReturnLineItemType",
		pageInfo:"PageInfo"
	},
	ReturnLineItemTypeEdge:{
		cursor:"String",
		node:"ReturnLineItemType"
	},
	ReturnOutcomeFinancialTransfer:{
		"...on InvoiceReturnOutcome":"InvoiceReturnOutcome",
		"...on RefundReturnOutcome":"RefundReturnOutcome"
	},
	ReturnProcessPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnRefundPayload:{
		refund:"Refund",
		userErrors:"ReturnUserError"
	},
	ReturnReopenPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnRequestPayload:{
		return:"Return",
		userErrors:"ReturnUserError"
	},
	ReturnShippingFee:{
		amountSet:"MoneyBag",
		id:"ID"
	},
	ReturnUserError:{
		code:"ReturnErrorCode",
		field:"String",
		message:"String"
	},
	ReturnableFulfillment:{
		fulfillment:"Fulfillment",
		id:"ID",
		returnableFulfillmentLineItems:"ReturnableFulfillmentLineItemConnection"
	},
	ReturnableFulfillmentConnection:{
		edges:"ReturnableFulfillmentEdge",
		nodes:"ReturnableFulfillment",
		pageInfo:"PageInfo"
	},
	ReturnableFulfillmentEdge:{
		cursor:"String",
		node:"ReturnableFulfillment"
	},
	ReturnableFulfillmentLineItem:{
		fulfillmentLineItem:"FulfillmentLineItem",
		quantity:"Int"
	},
	ReturnableFulfillmentLineItemConnection:{
		edges:"ReturnableFulfillmentLineItemEdge",
		nodes:"ReturnableFulfillmentLineItem",
		pageInfo:"PageInfo"
	},
	ReturnableFulfillmentLineItemEdge:{
		cursor:"String",
		node:"ReturnableFulfillmentLineItem"
	},
	ReverseDelivery:{
		deliverable:"ReverseDeliveryDeliverable",
		id:"ID",
		reverseDeliveryLineItems:"ReverseDeliveryLineItemConnection",
		reverseFulfillmentOrder:"ReverseFulfillmentOrder"
	},
	ReverseDeliveryConnection:{
		edges:"ReverseDeliveryEdge",
		nodes:"ReverseDelivery",
		pageInfo:"PageInfo"
	},
	ReverseDeliveryCreateWithShippingPayload:{
		reverseDelivery:"ReverseDelivery",
		userErrors:"ReturnUserError"
	},
	ReverseDeliveryDeliverable:{
		"...on ReverseDeliveryShippingDeliverable":"ReverseDeliveryShippingDeliverable"
	},
	ReverseDeliveryEdge:{
		cursor:"String",
		node:"ReverseDelivery"
	},
	ReverseDeliveryLabelV2:{
		createdAt:"DateTime",
		publicFileUrl:"URL",
		updatedAt:"DateTime"
	},
	ReverseDeliveryLineItem:{
		dispositions:"ReverseFulfillmentOrderDisposition",
		id:"ID",
		quantity:"Int",
		reverseFulfillmentOrderLineItem:"ReverseFulfillmentOrderLineItem"
	},
	ReverseDeliveryLineItemConnection:{
		edges:"ReverseDeliveryLineItemEdge",
		nodes:"ReverseDeliveryLineItem",
		pageInfo:"PageInfo"
	},
	ReverseDeliveryLineItemEdge:{
		cursor:"String",
		node:"ReverseDeliveryLineItem"
	},
	ReverseDeliveryShippingDeliverable:{
		label:"ReverseDeliveryLabelV2",
		tracking:"ReverseDeliveryTrackingV2"
	},
	ReverseDeliveryShippingUpdatePayload:{
		reverseDelivery:"ReverseDelivery",
		userErrors:"ReturnUserError"
	},
	ReverseDeliveryTrackingV2:{
		carrierName:"String",
		number:"String",
		url:"URL"
	},
	ReverseFulfillmentOrder:{
		id:"ID",
		lineItems:"ReverseFulfillmentOrderLineItemConnection",
		order:"Order",
		reverseDeliveries:"ReverseDeliveryConnection",
		status:"ReverseFulfillmentOrderStatus",
		thirdPartyConfirmation:"ReverseFulfillmentOrderThirdPartyConfirmation"
	},
	ReverseFulfillmentOrderConnection:{
		edges:"ReverseFulfillmentOrderEdge",
		nodes:"ReverseFulfillmentOrder",
		pageInfo:"PageInfo"
	},
	ReverseFulfillmentOrderDisposePayload:{
		reverseFulfillmentOrderLineItems:"ReverseFulfillmentOrderLineItem",
		userErrors:"ReturnUserError"
	},
	ReverseFulfillmentOrderDisposition:{
		createdAt:"DateTime",
		id:"ID",
		location:"Location",
		quantity:"Int",
		type:"ReverseFulfillmentOrderDispositionType"
	},
	ReverseFulfillmentOrderEdge:{
		cursor:"String",
		node:"ReverseFulfillmentOrder"
	},
	ReverseFulfillmentOrderLineItem:{
		dispositions:"ReverseFulfillmentOrderDisposition",
		fulfillmentLineItem:"FulfillmentLineItem",
		id:"ID",
		totalQuantity:"Int"
	},
	ReverseFulfillmentOrderLineItemConnection:{
		edges:"ReverseFulfillmentOrderLineItemEdge",
		nodes:"ReverseFulfillmentOrderLineItem",
		pageInfo:"PageInfo"
	},
	ReverseFulfillmentOrderLineItemEdge:{
		cursor:"String",
		node:"ReverseFulfillmentOrderLineItem"
	},
	ReverseFulfillmentOrderThirdPartyConfirmation:{
		status:"ReverseFulfillmentOrderThirdPartyConfirmationStatus"
	},
	RiskFact:{
		description:"String",
		sentiment:"RiskFactSentiment"
	},
	RowCount:{
		count:"Int",
		exceedsMax:"Boolean"
	},
	SEO:{
		description:"String",
		title:"String"
	},
	Sale:{
		"...on AdditionalFeeSale": "AdditionalFeeSale",
		"...on AdjustmentSale": "AdjustmentSale",
		"...on DutySale": "DutySale",
		"...on FeeSale": "FeeSale",
		"...on GiftCardSale": "GiftCardSale",
		"...on ProductSale": "ProductSale",
		"...on ShippingLineSale": "ShippingLineSale",
		"...on TipSale": "TipSale",
		"...on UnknownSale": "UnknownSale",
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	SaleAdditionalFee:{
		id:"ID",
		name:"String",
		price:"MoneyBag",
		taxLines:"TaxLine"
	},
	SaleConnection:{
		edges:"SaleEdge",
		nodes:"Sale",
		pageInfo:"PageInfo"
	},
	SaleEdge:{
		cursor:"String",
		node:"Sale"
	},
	SaleTax:{
		amount:"MoneyBag",
		id:"ID",
		taxLine:"TaxLine"
	},
	SalesAgreement:{
		"...on OrderAgreement": "OrderAgreement",
		"...on OrderEditAgreement": "OrderEditAgreement",
		"...on RefundAgreement": "RefundAgreement",
		"...on ReturnAgreement": "ReturnAgreement",
		app:"App",
		happenedAt:"DateTime",
		id:"ID",
		reason:"OrderActionType",
		sales:"SaleConnection",
		user:"StaffMember"
	},
	SalesAgreementConnection:{
		edges:"SalesAgreementEdge",
		nodes:"SalesAgreement",
		pageInfo:"PageInfo"
	},
	SalesAgreementEdge:{
		cursor:"String",
		node:"SalesAgreement"
	},
	SavedSearch:{
		filters:"SearchFilter",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		name:"String",
		query:"String",
		resourceType:"SearchResultType",
		searchTerms:"String"
	},
	SavedSearchConnection:{
		edges:"SavedSearchEdge",
		nodes:"SavedSearch",
		pageInfo:"PageInfo"
	},
	SavedSearchCreatePayload:{
		savedSearch:"SavedSearch",
		userErrors:"UserError"
	},
	SavedSearchDeletePayload:{
		deletedSavedSearchId:"ID",
		shop:"Shop",
		userErrors:"UserError"
	},
	SavedSearchEdge:{
		cursor:"String",
		node:"SavedSearch"
	},
	SavedSearchUpdatePayload:{
		savedSearch:"SavedSearch",
		userErrors:"UserError"
	},
	ScriptDiscountApplication:{
		allocationMethod:"DiscountApplicationAllocationMethod",
		description:"String",
		index:"Int",
		targetSelection:"DiscountApplicationTargetSelection",
		targetType:"DiscountApplicationTargetType",
		title:"String",
		value:"PricingValue"
	},
	ScriptTag:{
		cache:"Boolean",
		createdAt:"DateTime",
		displayScope:"ScriptTagDisplayScope",
		id:"ID",
		legacyResourceId:"UnsignedInt64",
		src:"URL",
		updatedAt:"DateTime"
	},
	ScriptTagConnection:{
		edges:"ScriptTagEdge",
		nodes:"ScriptTag",
		pageInfo:"PageInfo"
	},
	ScriptTagCreatePayload:{
		scriptTag:"ScriptTag",
		userErrors:"UserError"
	},
	ScriptTagDeletePayload:{
		deletedScriptTagId:"ID",
		userErrors:"UserError"
	},
	ScriptTagEdge:{
		cursor:"String",
		node:"ScriptTag"
	},
	ScriptTagUpdatePayload:{
		scriptTag:"ScriptTag",
		userErrors:"UserError"
	},
	SearchFilter:{
		key:"String",
		value:"String"
	},
	SearchFilterOptions:{
		productAvailability:"FilterOption"
	},
	SearchResult:{
		description:"String",
		image:"Image",
		reference:"Node",
		title:"String",
		url:"URL"
	},
	SearchResultConnection:{
		edges:"SearchResultEdge",
		pageInfo:"PageInfo",
		resultsAfterCount:"Int"
	},
	SearchResultEdge:{
		cursor:"String",
		node:"SearchResult"
	},
	Segment:{
		creationDate:"DateTime",
		id:"ID",
		lastEditDate:"DateTime",
		name:"String",
		query:"String"
	},
	SegmentAssociationFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentAttributeStatistics:{
		average:"Float",
		sum:"Float"
	},
	SegmentBooleanFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentConnection:{
		edges:"SegmentEdge",
		nodes:"Segment",
		pageInfo:"PageInfo"
	},
	SegmentCreatePayload:{
		segment:"Segment",
		userErrors:"UserError"
	},
	SegmentDateFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentDeletePayload:{
		deletedSegmentId:"ID",
		userErrors:"UserError"
	},
	SegmentEdge:{
		cursor:"String",
		node:"Segment"
	},
	SegmentEnumFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentEventFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		parameters:"SegmentEventFilterParameter",
		queryName:"String",
		returnValueType:"String"
	},
	SegmentEventFilterParameter:{
		acceptsMultipleValues:"Boolean",
		localizedDescription:"String",
		localizedName:"String",
		maxRange:"Float",
		minRange:"Float",
		optional:"Boolean",
		parameterType:"String",
		queryName:"String"
	},
	SegmentFilter:{
		"...on SegmentAssociationFilter": "SegmentAssociationFilter",
		"...on SegmentBooleanFilter": "SegmentBooleanFilter",
		"...on SegmentDateFilter": "SegmentDateFilter",
		"...on SegmentEnumFilter": "SegmentEnumFilter",
		"...on SegmentEventFilter": "SegmentEventFilter",
		"...on SegmentFloatFilter": "SegmentFloatFilter",
		"...on SegmentIntegerFilter": "SegmentIntegerFilter",
		"...on SegmentStringFilter": "SegmentStringFilter",
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentFilterConnection:{
		edges:"SegmentFilterEdge",
		nodes:"SegmentFilter",
		pageInfo:"PageInfo"
	},
	SegmentFilterEdge:{
		cursor:"String",
		node:"SegmentFilter"
	},
	SegmentFloatFilter:{
		localizedName:"String",
		maxRange:"Float",
		minRange:"Float",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentIntegerFilter:{
		localizedName:"String",
		maxRange:"Float",
		minRange:"Float",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentMembership:{
		isMember:"Boolean",
		segmentId:"ID"
	},
	SegmentMembershipResponse:{
		memberships:"SegmentMembership"
	},
	SegmentMigration:{
		id:"ID",
		savedSearchId:"ID",
		segmentId:"ID"
	},
	SegmentMigrationConnection:{
		edges:"SegmentMigrationEdge",
		nodes:"SegmentMigration",
		pageInfo:"PageInfo"
	},
	SegmentMigrationEdge:{
		cursor:"String",
		node:"SegmentMigration"
	},
	SegmentStatistics:{
		attributeStatistics:"SegmentAttributeStatistics"
	},
	SegmentStringFilter:{
		localizedName:"String",
		multiValue:"Boolean",
		queryName:"String"
	},
	SegmentUpdatePayload:{
		segment:"Segment",
		userErrors:"UserError"
	},
	SegmentValue:{
		localizedValue:"String",
		queryName:"String"
	},
	SegmentValueConnection:{
		edges:"SegmentValueEdge",
		nodes:"SegmentValue",
		pageInfo:"PageInfo"
	},
	SegmentValueEdge:{
		cursor:"String",
		node:"SegmentValue"
	},
	SelectedOption:{
		name:"String",
		optionValue:"ProductOptionValue",
		value:"String"
	},
	SellingPlan:{
		billingPolicy:"SellingPlanBillingPolicy",
		category:"SellingPlanCategory",
		createdAt:"DateTime",
		deliveryPolicy:"SellingPlanDeliveryPolicy",
		description:"String",
		id:"ID",
		inventoryPolicy:"SellingPlanInventoryPolicy",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		name:"String",
		options:"String",
		position:"Int",
		pricingPolicies:"SellingPlanPricingPolicy",
		translations:"Translation"
	},
	SellingPlanAnchor:{
		cutoffDay:"Int",
		day:"Int",
		month:"Int",
		type:"SellingPlanAnchorType"
	},
	SellingPlanBillingPolicy:{
		"...on SellingPlanFixedBillingPolicy":"SellingPlanFixedBillingPolicy",
		"...on SellingPlanRecurringBillingPolicy":"SellingPlanRecurringBillingPolicy"
	},
	SellingPlanCheckoutCharge:{
		type:"SellingPlanCheckoutChargeType",
		value:"SellingPlanCheckoutChargeValue"
	},
	SellingPlanCheckoutChargePercentageValue:{
		percentage:"Float"
	},
	SellingPlanCheckoutChargeValue:{
		"...on MoneyV2":"MoneyV2",
		"...on SellingPlanCheckoutChargePercentageValue":"SellingPlanCheckoutChargePercentageValue"
	},
	SellingPlanConnection:{
		edges:"SellingPlanEdge",
		nodes:"SellingPlan",
		pageInfo:"PageInfo"
	},
	SellingPlanDeliveryPolicy:{
		"...on SellingPlanFixedDeliveryPolicy":"SellingPlanFixedDeliveryPolicy",
		"...on SellingPlanRecurringDeliveryPolicy":"SellingPlanRecurringDeliveryPolicy"
	},
	SellingPlanEdge:{
		cursor:"String",
		node:"SellingPlan"
	},
	SellingPlanFixedBillingPolicy:{
		checkoutCharge:"SellingPlanCheckoutCharge",
		remainingBalanceChargeExactTime:"DateTime",
		remainingBalanceChargeTimeAfterCheckout:"String",
		remainingBalanceChargeTrigger:"SellingPlanRemainingBalanceChargeTrigger"
	},
	SellingPlanFixedDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		cutoff:"Int",
		fulfillmentExactTime:"DateTime",
		fulfillmentTrigger:"SellingPlanFulfillmentTrigger",
		intent:"SellingPlanFixedDeliveryPolicyIntent",
		preAnchorBehavior:"SellingPlanFixedDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanFixedPricingPolicy:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		createdAt:"DateTime"
	},
	SellingPlanGroup:{
		appId:"String",
		appliesToProduct:"Boolean",
		appliesToProductVariant:"Boolean",
		appliesToProductVariants:"Boolean",
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		merchantCode:"String",
		name:"String",
		options:"String",
		position:"Int",
		productVariants:"ProductVariantConnection",
		productVariantsCount:"Count",
		products:"ProductConnection",
		productsCount:"Count",
		sellingPlans:"SellingPlanConnection",
		summary:"String",
		translations:"Translation"
	},
	SellingPlanGroupAddProductVariantsPayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupAddProductsPayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupConnection:{
		edges:"SellingPlanGroupEdge",
		nodes:"SellingPlanGroup",
		pageInfo:"PageInfo"
	},
	SellingPlanGroupCreatePayload:{
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupDeletePayload:{
		deletedSellingPlanGroupId:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupEdge:{
		cursor:"String",
		node:"SellingPlanGroup"
	},
	SellingPlanGroupRemoveProductVariantsPayload:{
		removedProductVariantIds:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupRemoveProductsPayload:{
		removedProductIds:"ID",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupUpdatePayload:{
		deletedSellingPlanIds:"ID",
		sellingPlanGroup:"SellingPlanGroup",
		userErrors:"SellingPlanGroupUserError"
	},
	SellingPlanGroupUserError:{
		code:"SellingPlanGroupUserErrorCode",
		field:"String",
		message:"String"
	},
	SellingPlanInventoryPolicy:{
		reserve:"SellingPlanReserve"
	},
	SellingPlanPricingPolicy:{
		"...on SellingPlanFixedPricingPolicy":"SellingPlanFixedPricingPolicy",
		"...on SellingPlanRecurringPricingPolicy":"SellingPlanRecurringPricingPolicy"
	},
	SellingPlanPricingPolicyAdjustmentValue:{
		"...on MoneyV2":"MoneyV2",
		"...on SellingPlanPricingPolicyPercentageValue":"SellingPlanPricingPolicyPercentageValue"
	},
	SellingPlanPricingPolicyBase:{
		"...on SellingPlanFixedPricingPolicy": "SellingPlanFixedPricingPolicy",
		"...on SellingPlanRecurringPricingPolicy": "SellingPlanRecurringPricingPolicy",
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue"
	},
	SellingPlanPricingPolicyPercentageValue:{
		percentage:"Float"
	},
	SellingPlanRecurringBillingPolicy:{
		anchors:"SellingPlanAnchor",
		createdAt:"DateTime",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		maxCycles:"Int",
		minCycles:"Int"
	},
	SellingPlanRecurringDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		createdAt:"DateTime",
		cutoff:"Int",
		intent:"SellingPlanRecurringDeliveryPolicyIntent",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		preAnchorBehavior:"SellingPlanRecurringDeliveryPolicyPreAnchorBehavior"
	},
	SellingPlanRecurringPricingPolicy:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		afterCycle:"Int",
		createdAt:"DateTime"
	},
	ServerPixel:{
		id:"ID",
		status:"ServerPixelStatus",
		webhookEndpointAddress:"String"
	},
	ServerPixelCreatePayload:{
		serverPixel:"ServerPixel",
		userErrors:"ErrorsServerPixelUserError"
	},
	ServerPixelDeletePayload:{
		deletedServerPixelId:"ID",
		userErrors:"ErrorsServerPixelUserError"
	},
	ShippingLine:{
		carrierIdentifier:"String",
		code:"String",
		currentDiscountedPriceSet:"MoneyBag",
		custom:"Boolean",
		deliveryCategory:"String",
		discountAllocations:"DiscountAllocation",
		discountedPrice:"MoneyV2",
		discountedPriceSet:"MoneyBag",
		id:"ID",
		isRemoved:"Boolean",
		originalPrice:"MoneyV2",
		originalPriceSet:"MoneyBag",
		phone:"String",
		price:"Money",
		requestedFulfillmentService:"FulfillmentService",
		shippingRateHandle:"String",
		source:"String",
		taxLines:"TaxLine",
		title:"String"
	},
	ShippingLineConnection:{
		edges:"ShippingLineEdge",
		nodes:"ShippingLine",
		pageInfo:"PageInfo"
	},
	ShippingLineEdge:{
		cursor:"String",
		node:"ShippingLine"
	},
	ShippingLineSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		shippingLine:"ShippingLine",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	ShippingPackageDeletePayload:{
		deletedId:"ID",
		userErrors:"UserError"
	},
	ShippingPackageMakeDefaultPayload:{
		userErrors:"UserError"
	},
	ShippingPackageUpdatePayload:{
		userErrors:"UserError"
	},
	ShippingRate:{
		handle:"String",
		price:"MoneyV2",
		title:"String"
	},
	ShippingRefund:{
		amount:"Money",
		amountSet:"MoneyBag",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		tax:"Money",
		taxSet:"MoneyBag"
	},
	Shop:{
		accountOwner:"StaffMember",
		alerts:"ShopAlert",
		allProductCategories:"ProductCategory",
		allProductCategoriesList:"TaxonomyCategory",
		analyticsToken:"String",
		assignedFulfillmentOrders:"FulfillmentOrderConnection",
		availableChannelApps:"AppConnection",
		billingAddress:"ShopAddress",
		channelDefinitionsForInstalledChannels:"AvailableChannelDefinitionsByChannel",
		channels:"ChannelConnection",
		checkoutApiSupported:"Boolean",
		collections:"CollectionConnection",
		contactEmail:"String",
		countriesInShippingZones:"CountriesInShippingZones",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		currencyFormats:"CurrencyFormats",
		currencySettings:"CurrencySettingConnection",
		customerAccounts:"ShopCustomerAccountsSetting",
		customerAccountsV2:"CustomerAccountsV2",
		customerTags:"StringConnection",
		customers:"CustomerConnection",
		description:"String",
		domains:"Domain",
		draftOrderTags:"StringConnection",
		draftOrders:"DraftOrderConnection",
		email:"String",
		enabledPresentmentCurrencies:"CurrencyCode",
		entitlements:"EntitlementsType",
		features:"ShopFeatures",
		fulfillmentOrders:"FulfillmentOrderConnection",
		fulfillmentServices:"FulfillmentService",
		ianaTimezone:"String",
		id:"ID",
		inventoryItems:"InventoryItemConnection",
		limitedPendingOrderCount:"LimitedPendingOrderCount",
		locations:"LocationConnection",
		marketingSmsConsentEnabledAtCheckout:"Boolean",
		merchantApprovalSignals:"MerchantApprovalSignals",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		myshopifyDomain:"String",
		name:"String",
		navigationSettings:"NavigationItem",
		orderNumberFormatPrefix:"String",
		orderNumberFormatSuffix:"String",
		orderTags:"StringConnection",
		orders:"OrderConnection",
		paymentSettings:"PaymentSettings",
		plan:"ShopPlan",
		primaryDomain:"Domain",
		productImages:"ImageConnection",
		productTags:"StringConnection",
		productTypes:"StringConnection",
		productVariants:"ProductVariantConnection",
		productVendors:"StringConnection",
		products:"ProductConnection",
		publicationCount:"Int",
		resourceLimits:"ShopResourceLimits",
		richTextEditorUrl:"URL",
		search:"SearchResultConnection",
		searchFilters:"SearchFilterOptions",
		setupRequired:"Boolean",
		shipsToCountries:"CountryCode",
		shopOwnerName:"String",
		shopPolicies:"ShopPolicy",
		staffMembers:"StaffMemberConnection",
		storefrontAccessTokens:"StorefrontAccessTokenConnection",
		storefrontUrl:"URL",
		taxShipping:"Boolean",
		taxesIncluded:"Boolean",
		timezoneAbbreviation:"String",
		timezoneOffset:"String",
		timezoneOffsetMinutes:"Int",
		transactionalSmsDisabled:"Boolean",
		translations:"Translation",
		unitSystem:"UnitSystem",
		updatedAt:"DateTime",
		url:"URL",
		weightUnit:"WeightUnit"
	},
	ShopAddress:{
		address1:"String",
		address2:"String",
		city:"String",
		company:"String",
		coordinatesValidated:"Boolean",
		country:"String",
		countryCode:"String",
		countryCodeV2:"CountryCode",
		firstName:"String",
		formatted:"String",
		formattedArea:"String",
		id:"ID",
		lastName:"String",
		latitude:"Float",
		longitude:"Float",
		name:"String",
		phone:"String",
		province:"String",
		provinceCode:"String",
		zip:"String"
	},
	ShopAlert:{
		action:"ShopAlertAction",
		description:"String"
	},
	ShopAlertAction:{
		title:"String",
		url:"URL"
	},
	ShopBillingPreferences:{
		currency:"CurrencyCode"
	},
	ShopFeatures:{
		avalaraAvatax:"Boolean",
		branding:"ShopBranding",
		bundles:"BundlesFeature",
		captcha:"Boolean",
		captchaExternalDomains:"Boolean",
		cartTransform:"CartTransformFeature",
		deliveryProfiles:"Boolean",
		dynamicRemarketing:"Boolean",
		eligibleForSubscriptionMigration:"Boolean",
		eligibleForSubscriptions:"Boolean",
		giftCards:"Boolean",
		harmonizedSystemCode:"Boolean",
		internationalDomains:"Boolean",
		internationalPriceOverrides:"Boolean",
		internationalPriceRules:"Boolean",
		legacySubscriptionGatewayEnabled:"Boolean",
		liveView:"Boolean",
		onboardingVisual:"Boolean",
		paypalExpressSubscriptionGatewayStatus:"PaypalExpressSubscriptionsGatewayStatus",
		reports:"Boolean",
		sellsSubscriptions:"Boolean",
		shopifyPlus:"Boolean",
		showMetrics:"Boolean",
		storefront:"Boolean",
		unifiedMarkets:"Boolean",
		usingShopifyBalance:"Boolean"
	},
	ShopLocale:{
		locale:"String",
		marketWebPresences:"MarketWebPresence",
		name:"String",
		primary:"Boolean",
		published:"Boolean"
	},
	ShopLocaleDisablePayload:{
		locale:"String",
		userErrors:"UserError"
	},
	ShopLocaleEnablePayload:{
		shopLocale:"ShopLocale",
		userErrors:"UserError"
	},
	ShopLocaleUpdatePayload:{
		shopLocale:"ShopLocale",
		userErrors:"UserError"
	},
	ShopPayInstallmentsPaymentDetails:{
		paymentMethodName:"String"
	},
	ShopPayPaymentRequest:{
		discounts:"ShopPayPaymentRequestDiscount",
		lineItems:"ShopPayPaymentRequestLineItem",
		presentmentCurrency:"CurrencyCode",
		selectedDeliveryMethodType:"ShopPayPaymentRequestDeliveryMethodType",
		shippingAddress:"ShopPayPaymentRequestContactField",
		shippingLines:"ShopPayPaymentRequestShippingLine",
		subtotal:"MoneyV2",
		total:"MoneyV2",
		totalShippingPrice:"ShopPayPaymentRequestTotalShippingPrice",
		totalTax:"MoneyV2"
	},
	ShopPayPaymentRequestContactField:{
		address1:"String",
		address2:"String",
		city:"String",
		companyName:"String",
		countryCode:"String",
		email:"String",
		firstName:"String",
		lastName:"String",
		phone:"String",
		postalCode:"String",
		provinceCode:"String"
	},
	ShopPayPaymentRequestDiscount:{
		amount:"MoneyV2",
		label:"String"
	},
	ShopPayPaymentRequestImage:{
		alt:"String",
		url:"String"
	},
	ShopPayPaymentRequestLineItem:{
		finalItemPrice:"MoneyV2",
		finalLinePrice:"MoneyV2",
		image:"ShopPayPaymentRequestImage",
		itemDiscounts:"ShopPayPaymentRequestDiscount",
		label:"String",
		lineDiscounts:"ShopPayPaymentRequestDiscount",
		originalItemPrice:"MoneyV2",
		originalLinePrice:"MoneyV2",
		quantity:"Int",
		requiresShipping:"Boolean",
		sku:"String"
	},
	ShopPayPaymentRequestReceipt:{
		createdAt:"DateTime",
		order:"Order",
		paymentRequest:"ShopPayPaymentRequest",
		processingStatus:"ShopPayPaymentRequestReceiptProcessingStatus",
		sourceIdentifier:"String",
		token:"String"
	},
	ShopPayPaymentRequestReceiptConnection:{
		edges:"ShopPayPaymentRequestReceiptEdge",
		nodes:"ShopPayPaymentRequestReceipt",
		pageInfo:"PageInfo"
	},
	ShopPayPaymentRequestReceiptEdge:{
		cursor:"String",
		node:"ShopPayPaymentRequestReceipt"
	},
	ShopPayPaymentRequestReceiptProcessingStatus:{
		errorCode:"ShopPayPaymentRequestReceiptProcessingStatusErrorCode",
		message:"String",
		state:"ShopPayPaymentRequestReceiptProcessingStatusState"
	},
	ShopPayPaymentRequestShippingLine:{
		amount:"MoneyV2",
		code:"String",
		label:"String"
	},
	ShopPayPaymentRequestTotalShippingPrice:{
		discounts:"ShopPayPaymentRequestDiscount",
		finalTotal:"MoneyV2",
		originalTotal:"MoneyV2"
	},
	ShopPlan:{
		displayName:"String",
		partnerDevelopment:"Boolean",
		publicDisplayName:"String",
		shopifyPlus:"Boolean"
	},
	ShopPolicy:{
		body:"HTML",
		createdAt:"Date",
		id:"ID",
		title:"String",
		translations:"Translation",
		type:"ShopPolicyType",
		updatedAt:"Date",
		url:"URL"
	},
	ShopPolicyUpdatePayload:{
		shopPolicy:"ShopPolicy",
		userErrors:"ShopPolicyUserError"
	},
	ShopPolicyUserError:{
		code:"ShopPolicyErrorCode",
		field:"String",
		message:"String"
	},
	ShopResourceFeedbackCreatePayload:{
		feedback:"AppFeedback",
		userErrors:"ShopResourceFeedbackCreateUserError"
	},
	ShopResourceFeedbackCreateUserError:{
		code:"ShopResourceFeedbackCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ShopResourceLimits:{
		locationLimit:"Int",
		maxProductOptions:"Int",
		maxProductVariants:"Int",
		redirectLimitReached:"Boolean"
	},
	ShopifyFunction:{
		apiType:"String",
		apiVersion:"String",
		app:"App",
		appBridge:"FunctionsAppBridge",
		appKey:"String",
		description:"String",
		id:"String",
		inputQuery:"String",
		title:"String",
		useCreationUi:"Boolean"
	},
	ShopifyFunctionConnection:{
		edges:"ShopifyFunctionEdge",
		nodes:"ShopifyFunction",
		pageInfo:"PageInfo"
	},
	ShopifyFunctionEdge:{
		cursor:"String",
		node:"ShopifyFunction"
	},
	ShopifyPaymentsAccount:{
		accountOpenerName:"String",
		activated:"Boolean",
		balance:"MoneyV2",
		balanceTransactions:"ShopifyPaymentsBalanceTransactionConnection",
		bankAccounts:"ShopifyPaymentsBankAccountConnection",
		chargeStatementDescriptor:"String",
		chargeStatementDescriptors:"ShopifyPaymentsChargeStatementDescriptor",
		country:"String",
		defaultCurrency:"CurrencyCode",
		disputes:"ShopifyPaymentsDisputeConnection",
		id:"ID",
		onboardable:"Boolean",
		payoutSchedule:"ShopifyPaymentsPayoutSchedule",
		payoutStatementDescriptor:"String",
		payouts:"ShopifyPaymentsPayoutConnection"
	},
	ShopifyPaymentsAddressBasic:{
		addressLine1:"String",
		addressLine2:"String",
		city:"String",
		country:"String",
		postalCode:"String",
		zone:"String"
	},
	ShopifyPaymentsAdjustmentOrder:{
		amount:"MoneyV2",
		fees:"MoneyV2",
		link:"URL",
		name:"String",
		net:"MoneyV2",
		orderTransactionId:"BigInt"
	},
	ShopifyPaymentsAssociatedOrder:{
		id:"ID",
		name:"String"
	},
	ShopifyPaymentsBalanceTransaction:{
		adjustmentReason:"String",
		adjustmentsOrders:"ShopifyPaymentsAdjustmentOrder",
		amount:"MoneyV2",
		associatedOrder:"ShopifyPaymentsAssociatedOrder",
		associatedPayout:"ShopifyPaymentsBalanceTransactionAssociatedPayout",
		fee:"MoneyV2",
		id:"ID",
		net:"MoneyV2",
		sourceId:"BigInt",
		sourceOrderTransactionId:"BigInt",
		sourceType:"ShopifyPaymentsSourceType",
		test:"Boolean",
		transactionDate:"DateTime",
		type:"ShopifyPaymentsTransactionType"
	},
	ShopifyPaymentsBalanceTransactionAssociatedPayout:{
		id:"ID",
		status:"ShopifyPaymentsBalanceTransactionPayoutStatus"
	},
	ShopifyPaymentsBalanceTransactionConnection:{
		edges:"ShopifyPaymentsBalanceTransactionEdge",
		nodes:"ShopifyPaymentsBalanceTransaction",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsBalanceTransactionEdge:{
		cursor:"String",
		node:"ShopifyPaymentsBalanceTransaction"
	},
	ShopifyPaymentsBankAccount:{
		accountNumberLastDigits:"String",
		bankName:"String",
		country:"CountryCode",
		createdAt:"DateTime",
		currency:"CurrencyCode",
		id:"ID",
		payouts:"ShopifyPaymentsPayoutConnection",
		status:"ShopifyPaymentsBankAccountStatus"
	},
	ShopifyPaymentsBankAccountConnection:{
		edges:"ShopifyPaymentsBankAccountEdge",
		nodes:"ShopifyPaymentsBankAccount",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsBankAccountEdge:{
		cursor:"String",
		node:"ShopifyPaymentsBankAccount"
	},
	ShopifyPaymentsChargeStatementDescriptor:{
		"...on ShopifyPaymentsDefaultChargeStatementDescriptor": "ShopifyPaymentsDefaultChargeStatementDescriptor",
		"...on ShopifyPaymentsJpChargeStatementDescriptor": "ShopifyPaymentsJpChargeStatementDescriptor",
		default:"String",
		prefix:"String"
	},
	ShopifyPaymentsDefaultChargeStatementDescriptor:{
		default:"String",
		prefix:"String"
	},
	ShopifyPaymentsDispute:{
		amount:"MoneyV2",
		disputeEvidence:"ShopifyPaymentsDisputeEvidence",
		evidenceDueBy:"Date",
		evidenceSentOn:"Date",
		finalizedOn:"Date",
		id:"ID",
		initiatedAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		order:"Order",
		reasonDetails:"ShopifyPaymentsDisputeReasonDetails",
		status:"DisputeStatus",
		type:"DisputeType"
	},
	ShopifyPaymentsDisputeConnection:{
		edges:"ShopifyPaymentsDisputeEdge",
		nodes:"ShopifyPaymentsDispute",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsDisputeEdge:{
		cursor:"String",
		node:"ShopifyPaymentsDispute"
	},
	ShopifyPaymentsDisputeEvidence:{
		accessActivityLog:"String",
		billingAddress:"MailingAddress",
		cancellationPolicyDisclosure:"String",
		cancellationPolicyFile:"ShopifyPaymentsDisputeFileUpload",
		cancellationRebuttal:"String",
		customerCommunicationFile:"ShopifyPaymentsDisputeFileUpload",
		customerEmailAddress:"String",
		customerFirstName:"String",
		customerLastName:"String",
		customerPurchaseIp:"String",
		dispute:"ShopifyPaymentsDispute",
		disputeFileUploads:"ShopifyPaymentsDisputeFileUpload",
		fulfillments:"ShopifyPaymentsDisputeFulfillment",
		id:"ID",
		productDescription:"String",
		refundPolicyDisclosure:"String",
		refundPolicyFile:"ShopifyPaymentsDisputeFileUpload",
		refundRefusalExplanation:"String",
		serviceDocumentationFile:"ShopifyPaymentsDisputeFileUpload",
		shippingAddress:"MailingAddress",
		shippingDocumentationFile:"ShopifyPaymentsDisputeFileUpload",
		submitted:"Boolean",
		uncategorizedFile:"ShopifyPaymentsDisputeFileUpload",
		uncategorizedText:"String"
	},
	ShopifyPaymentsDisputeFileUpload:{
		disputeEvidenceType:"ShopifyPaymentsDisputeEvidenceFileType",
		fileSize:"Int",
		fileType:"String",
		id:"ID",
		originalFileName:"String",
		url:"URL"
	},
	ShopifyPaymentsDisputeFulfillment:{
		id:"ID",
		shippingCarrier:"String",
		shippingDate:"Date",
		shippingTrackingNumber:"String"
	},
	ShopifyPaymentsDisputeReasonDetails:{
		networkReasonCode:"String",
		reason:"ShopifyPaymentsDisputeReason"
	},
	ShopifyPaymentsExtendedAuthorization:{
		extendedAuthorizationExpiresAt:"DateTime",
		standardAuthorizationExpiresAt:"DateTime"
	},
	ShopifyPaymentsJpChargeStatementDescriptor:{
		default:"String",
		kana:"String",
		kanji:"String",
		prefix:"String"
	},
	ShopifyPaymentsMerchantCategoryCode:{
		category:"String",
		categoryLabel:"String",
		code:"Int",
		id:"Int",
		subcategoryLabel:"String"
	},
	ShopifyPaymentsPayout:{
		bankAccount:"ShopifyPaymentsBankAccount",
		businessEntity:"BusinessEntity",
		externalTraceId:"String",
		gross:"MoneyV2",
		id:"ID",
		issuedAt:"DateTime",
		legacyResourceId:"UnsignedInt64",
		net:"MoneyV2",
		status:"ShopifyPaymentsPayoutStatus",
		summary:"ShopifyPaymentsPayoutSummary",
		transactionType:"ShopifyPaymentsPayoutTransactionType"
	},
	ShopifyPaymentsPayoutAlternateCurrencyCreatePayload:{
		payout:"ShopifyPaymentsToolingProviderPayout",
		success:"Boolean",
		userErrors:"ShopifyPaymentsPayoutAlternateCurrencyCreateUserError"
	},
	ShopifyPaymentsPayoutAlternateCurrencyCreateUserError:{
		code:"ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ShopifyPaymentsPayoutConnection:{
		edges:"ShopifyPaymentsPayoutEdge",
		nodes:"ShopifyPaymentsPayout",
		pageInfo:"PageInfo"
	},
	ShopifyPaymentsPayoutEdge:{
		cursor:"String",
		node:"ShopifyPaymentsPayout"
	},
	ShopifyPaymentsPayoutSchedule:{
		interval:"ShopifyPaymentsPayoutInterval",
		monthlyAnchor:"Int",
		weeklyAnchor:"DayOfTheWeek"
	},
	ShopifyPaymentsPayoutSummary:{
		adjustmentsFee:"MoneyV2",
		adjustmentsGross:"MoneyV2",
		advanceFees:"MoneyV2",
		advanceGross:"MoneyV2",
		chargesFee:"MoneyV2",
		chargesGross:"MoneyV2",
		refundsFee:"MoneyV2",
		refundsFeeGross:"MoneyV2",
		reservedFundsFee:"MoneyV2",
		reservedFundsGross:"MoneyV2",
		retriedPayoutsFee:"MoneyV2",
		retriedPayoutsGross:"MoneyV2",
		usdcRebateCreditAmount:"MoneyV2"
	},
	ShopifyPaymentsRefundSet:{
		acquirerReferenceNumber:"String"
	},
	ShopifyPaymentsTaxIdentification:{
		taxIdentificationType:"ShopifyPaymentsTaxIdentificationType",
		value:"String"
	},
	ShopifyPaymentsToolingProviderPayout:{
		amount:"MoneyV2",
		arrivalDate:"DateTime",
		createdAt:"DateTime",
		currency:"String",
		remoteId:"String"
	},
	ShopifyPaymentsTransactionSet:{
		extendedAuthorizationSet:"ShopifyPaymentsExtendedAuthorization",
		refundSet:"ShopifyPaymentsRefundSet"
	},
	ShopifyProtectOrderEligibility:{
		status:"ShopifyProtectEligibilityStatus"
	},
	ShopifyProtectOrderSummary:{
		eligibility:"ShopifyProtectOrderEligibility",
		status:"ShopifyProtectStatus"
	},
	ShopifyqlQueryResponse:{
		parseErrors:"String",
		tableData:"ShopifyqlTableData"
	},
	ShopifyqlTableData:{
		columns:"ShopifyqlTableDataColumn",
		rows:"JSON"
	},
	ShopifyqlTableDataColumn:{
		dataType:"ColumnDataType",
		displayName:"String",
		name:"String",
		subType:"ColumnDataType"
	},
	StaffMember:{
		accountType:"AccountType",
		active:"Boolean",
		avatar:"Image",
		email:"String",
		exists:"Boolean",
		firstName:"String",
		id:"ID",
		initials:"String",
		isShopOwner:"Boolean",
		lastName:"String",
		locale:"String",
		name:"String",
		phone:"String",
		privateData:"StaffMemberPrivateData"
	},
	StaffMemberConnection:{
		edges:"StaffMemberEdge",
		nodes:"StaffMember",
		pageInfo:"PageInfo"
	},
	StaffMemberEdge:{
		cursor:"String",
		node:"StaffMember"
	},
	StaffMemberPrivateData:{
		accountSettingsUrl:"URL",
		createdAt:"DateTime",
		permissions:"StaffMemberPermission"
	},
	StagedMediaUploadTarget:{
		parameters:"StagedUploadParameter",
		resourceUrl:"URL",
		url:"URL"
	},
	StagedUploadParameter:{
		name:"String",
		value:"String"
	},
	StagedUploadTarget:{
		parameters:"ImageUploadParameter",
		url:"String"
	},
	StagedUploadTargetGeneratePayload:{
		parameters:"MutationsStagedUploadTargetGenerateUploadParameter",
		url:"String",
		userErrors:"UserError"
	},
	StagedUploadTargetsGeneratePayload:{
		urls:"StagedUploadTarget",
		userErrors:"UserError"
	},
	StagedUploadsCreatePayload:{
		stagedTargets:"StagedMediaUploadTarget",
		userErrors:"UserError"
	},
	StandardMetafieldDefinitionEnablePayload:{
		createdDefinition:"MetafieldDefinition",
		userErrors:"StandardMetafieldDefinitionEnableUserError"
	},
	StandardMetafieldDefinitionEnableUserError:{
		code:"StandardMetafieldDefinitionEnableUserErrorCode",
		field:"String",
		message:"String"
	},
	StandardMetafieldDefinitionTemplate:{
		description:"String",
		id:"ID",
		key:"String",
		name:"String",
		namespace:"String",
		ownerTypes:"MetafieldOwnerType",
		type:"MetafieldDefinitionType",
		validations:"MetafieldDefinitionValidation",
		visibleToStorefrontApi:"Boolean"
	},
	StandardMetafieldDefinitionTemplateConnection:{
		edges:"StandardMetafieldDefinitionTemplateEdge",
		nodes:"StandardMetafieldDefinitionTemplate",
		pageInfo:"PageInfo"
	},
	StandardMetafieldDefinitionTemplateEdge:{
		cursor:"String",
		node:"StandardMetafieldDefinitionTemplate"
	},
	StandardMetaobjectCapabilityTemplate:{
		capabilityType:"MetaobjectCapabilityType"
	},
	StandardMetaobjectDefinitionEnablePayload:{
		metaobjectDefinition:"MetaobjectDefinition",
		userErrors:"MetaobjectUserError"
	},
	StandardMetaobjectDefinitionFieldTemplate:{
		description:"String",
		key:"String",
		name:"String",
		required:"Boolean",
		type:"MetafieldDefinitionType",
		validations:"MetafieldDefinitionValidation",
		visibleToStorefrontApi:"Boolean"
	},
	StandardMetaobjectDefinitionTemplate:{
		description:"String",
		displayNameKey:"String",
		enabledCapabilities:"StandardMetaobjectCapabilityTemplate",
		fieldDefinitions:"StandardMetaobjectDefinitionFieldTemplate",
		name:"String",
		type:"String"
	},
	StandardizedProductType:{
		productTaxonomyNode:"ProductTaxonomyNode"
	},
	StoreCreditAccount:{
		balance:"MoneyV2",
		id:"ID",
		owner:"HasStoreCreditAccounts",
		transactions:"StoreCreditAccountTransactionConnection"
	},
	StoreCreditAccountConnection:{
		edges:"StoreCreditAccountEdge",
		nodes:"StoreCreditAccount",
		pageInfo:"PageInfo"
	},
	StoreCreditAccountCreditPayload:{
		storeCreditAccountTransaction:"StoreCreditAccountCreditTransaction",
		userErrors:"StoreCreditAccountCreditUserError"
	},
	StoreCreditAccountCreditTransaction:{
		account:"StoreCreditAccount",
		amount:"MoneyV2",
		balanceAfterTransaction:"MoneyV2",
		createdAt:"DateTime",
		event:"StoreCreditSystemEvent",
		expiresAt:"DateTime",
		id:"ID",
		origin:"StoreCreditAccountTransactionOrigin",
		remainingAmount:"MoneyV2"
	},
	StoreCreditAccountCreditUserError:{
		code:"StoreCreditAccountCreditUserErrorCode",
		field:"String",
		message:"String"
	},
	StoreCreditAccountDebitPayload:{
		storeCreditAccountTransaction:"StoreCreditAccountDebitTransaction",
		userErrors:"StoreCreditAccountDebitUserError"
	},
	StoreCreditAccountDebitRevertTransaction:{
		account:"StoreCreditAccount",
		amount:"MoneyV2",
		balanceAfterTransaction:"MoneyV2",
		createdAt:"DateTime",
		debitTransaction:"StoreCreditAccountDebitTransaction",
		event:"StoreCreditSystemEvent",
		id:"ID",
		origin:"StoreCreditAccountTransactionOrigin"
	},
	StoreCreditAccountDebitTransaction:{
		account:"StoreCreditAccount",
		amount:"MoneyV2",
		balanceAfterTransaction:"MoneyV2",
		createdAt:"DateTime",
		event:"StoreCreditSystemEvent",
		id:"ID",
		origin:"StoreCreditAccountTransactionOrigin"
	},
	StoreCreditAccountDebitUserError:{
		code:"StoreCreditAccountDebitUserErrorCode",
		field:"String",
		message:"String"
	},
	StoreCreditAccountEdge:{
		cursor:"String",
		node:"StoreCreditAccount"
	},
	StoreCreditAccountExpirationTransaction:{
		account:"StoreCreditAccount",
		amount:"MoneyV2",
		balanceAfterTransaction:"MoneyV2",
		createdAt:"DateTime",
		creditTransaction:"StoreCreditAccountCreditTransaction",
		event:"StoreCreditSystemEvent",
		origin:"StoreCreditAccountTransactionOrigin"
	},
	StoreCreditAccountTransaction:{
		"...on StoreCreditAccountCreditTransaction": "StoreCreditAccountCreditTransaction",
		"...on StoreCreditAccountDebitRevertTransaction": "StoreCreditAccountDebitRevertTransaction",
		"...on StoreCreditAccountDebitTransaction": "StoreCreditAccountDebitTransaction",
		"...on StoreCreditAccountExpirationTransaction": "StoreCreditAccountExpirationTransaction",
		account:"StoreCreditAccount",
		amount:"MoneyV2",
		balanceAfterTransaction:"MoneyV2",
		createdAt:"DateTime",
		event:"StoreCreditSystemEvent",
		origin:"StoreCreditAccountTransactionOrigin"
	},
	StoreCreditAccountTransactionConnection:{
		edges:"StoreCreditAccountTransactionEdge",
		nodes:"StoreCreditAccountTransaction",
		pageInfo:"PageInfo"
	},
	StoreCreditAccountTransactionEdge:{
		cursor:"String",
		node:"StoreCreditAccountTransaction"
	},
	StoreCreditAccountTransactionOrigin:{
		"...on OrderTransaction":"OrderTransaction"
	},
	StorefrontAccessToken:{
		accessScopes:"AccessScope",
		accessToken:"String",
		createdAt:"DateTime",
		id:"ID",
		title:"String",
		updatedAt:"DateTime"
	},
	StorefrontAccessTokenConnection:{
		edges:"StorefrontAccessTokenEdge",
		nodes:"StorefrontAccessToken",
		pageInfo:"PageInfo"
	},
	StorefrontAccessTokenCreatePayload:{
		shop:"Shop",
		storefrontAccessToken:"StorefrontAccessToken",
		userErrors:"UserError"
	},
	StorefrontAccessTokenDeletePayload:{
		deletedStorefrontAccessTokenId:"ID",
		userErrors:"UserError"
	},
	StorefrontAccessTokenEdge:{
		cursor:"String",
		node:"StorefrontAccessToken"
	},
	StorefrontID: `scalar.StorefrontID` as const,
	StringConnection:{
		edges:"StringEdge",
		nodes:"String",
		pageInfo:"PageInfo"
	},
	StringEdge:{
		cursor:"String",
		node:"String"
	},
	SubscriptionAppliedCodeDiscount:{
		id:"ID",
		redeemCode:"String",
		rejectionReason:"SubscriptionDiscountRejectionReason"
	},
	SubscriptionBillingAttempt:{
		completedAt:"DateTime",
		createdAt:"DateTime",
		errorCode:"SubscriptionBillingAttemptErrorCode",
		errorMessage:"String",
		id:"ID",
		idempotencyKey:"String",
		nextActionUrl:"URL",
		order:"Order",
		originTime:"DateTime",
		paymentGroupId:"String",
		paymentSessionId:"String",
		processingError:"SubscriptionBillingAttemptProcessingError",
		ready:"Boolean",
		respectInventoryPolicy:"Boolean",
		subscriptionContract:"SubscriptionContract",
		transactions:"OrderTransactionConnection"
	},
	SubscriptionBillingAttemptConnection:{
		edges:"SubscriptionBillingAttemptEdge",
		nodes:"SubscriptionBillingAttempt",
		pageInfo:"PageInfo"
	},
	SubscriptionBillingAttemptCreatePayload:{
		subscriptionBillingAttempt:"SubscriptionBillingAttempt",
		userErrors:"BillingAttemptUserError"
	},
	SubscriptionBillingAttemptEdge:{
		cursor:"String",
		node:"SubscriptionBillingAttempt"
	},
	SubscriptionBillingAttemptGenericError:{
		code:"SubscriptionBillingAttemptErrorCode",
		message:"String"
	},
	SubscriptionBillingAttemptInsufficientStockProductVariantsError:{
		code:"SubscriptionBillingAttemptErrorCode",
		insufficientStockProductVariants:"ProductVariantConnection",
		message:"String"
	},
	SubscriptionBillingAttemptOutOfStockProductVariantsError:{
		code:"SubscriptionBillingAttemptErrorCode",
		message:"String",
		outOfStockProductVariants:"ProductVariantConnection"
	},
	SubscriptionBillingAttemptProcessingError:{
		"...on SubscriptionBillingAttemptGenericError": "SubscriptionBillingAttemptGenericError",
		"...on SubscriptionBillingAttemptInsufficientStockProductVariantsError": "SubscriptionBillingAttemptInsufficientStockProductVariantsError",
		"...on SubscriptionBillingAttemptOutOfStockProductVariantsError": "SubscriptionBillingAttemptOutOfStockProductVariantsError",
		code:"SubscriptionBillingAttemptErrorCode",
		message:"String"
	},
	SubscriptionBillingCycle:{
		billingAttemptExpectedDate:"DateTime",
		billingAttempts:"SubscriptionBillingAttemptConnection",
		cycleEndAt:"DateTime",
		cycleIndex:"Int",
		cycleStartAt:"DateTime",
		edited:"Boolean",
		editedContract:"SubscriptionBillingCycleEditedContract",
		skipped:"Boolean",
		sourceContract:"SubscriptionContract",
		status:"SubscriptionBillingCycleBillingCycleStatus"
	},
	SubscriptionBillingCycleBulkChargePayload:{
		job:"Job",
		userErrors:"SubscriptionBillingCycleBulkUserError"
	},
	SubscriptionBillingCycleBulkSearchPayload:{
		job:"Job",
		userErrors:"SubscriptionBillingCycleBulkUserError"
	},
	SubscriptionBillingCycleBulkUserError:{
		code:"SubscriptionBillingCycleBulkUserErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionBillingCycleChargePayload:{
		subscriptionBillingAttempt:"SubscriptionBillingAttempt",
		userErrors:"BillingAttemptUserError"
	},
	SubscriptionBillingCycleConnection:{
		edges:"SubscriptionBillingCycleEdge",
		nodes:"SubscriptionBillingCycle",
		pageInfo:"PageInfo"
	},
	SubscriptionBillingCycleContractDraftCommitPayload:{
		contract:"SubscriptionBillingCycleEditedContract",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleContractDraftConcatenatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleContractEditPayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionBillingCycleEdge:{
		cursor:"String",
		node:"SubscriptionBillingCycle"
	},
	SubscriptionBillingCycleEditDeletePayload:{
		billingCycles:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleEditedContract:{
		app:"App",
		appAdminUrl:"URL",
		billingCycles:"SubscriptionBillingCycleConnection",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		linesCount:"Count",
		note:"String",
		orders:"OrderConnection",
		updatedAt:"DateTime"
	},
	SubscriptionBillingCycleEditsDeletePayload:{
		billingCycles:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleScheduleEditPayload:{
		billingCycle:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUserError"
	},
	SubscriptionBillingCycleSkipPayload:{
		billingCycle:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleSkipUserError"
	},
	SubscriptionBillingCycleSkipUserError:{
		code:"SubscriptionBillingCycleSkipUserErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionBillingCycleUnskipPayload:{
		billingCycle:"SubscriptionBillingCycle",
		userErrors:"SubscriptionBillingCycleUnskipUserError"
	},
	SubscriptionBillingCycleUnskipUserError:{
		code:"SubscriptionBillingCycleUnskipUserErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionBillingCycleUserError:{
		code:"SubscriptionBillingCycleErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionBillingPolicy:{
		anchors:"SellingPlanAnchor",
		interval:"SellingPlanInterval",
		intervalCount:"Int",
		maxCycles:"Int",
		minCycles:"Int"
	},
	SubscriptionContract:{
		app:"App",
		appAdminUrl:"URL",
		billingAttempts:"SubscriptionBillingAttemptConnection",
		billingPolicy:"SubscriptionBillingPolicy",
		createdAt:"DateTime",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPolicy:"SubscriptionDeliveryPolicy",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		id:"ID",
		lastBillingAttemptErrorType:"SubscriptionContractLastBillingErrorType",
		lastPaymentStatus:"SubscriptionContractLastPaymentStatus",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		linesCount:"Count",
		nextBillingDate:"DateTime",
		note:"String",
		orders:"OrderConnection",
		originOrder:"Order",
		revisionId:"UnsignedInt64",
		status:"SubscriptionContractSubscriptionStatus",
		updatedAt:"DateTime"
	},
	SubscriptionContractActivatePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractStatusUpdateUserError"
	},
	SubscriptionContractAtomicCreatePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractBase:{
		"...on SubscriptionBillingCycleEditedContract": "SubscriptionBillingCycleEditedContract",
		"...on SubscriptionContract": "SubscriptionContract",
		app:"App",
		appAdminUrl:"URL",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionManualDiscountConnection",
		lineCount:"Int",
		lines:"SubscriptionLineConnection",
		linesCount:"Count",
		note:"String",
		orders:"OrderConnection",
		updatedAt:"DateTime"
	},
	SubscriptionContractCancelPayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractStatusUpdateUserError"
	},
	SubscriptionContractConnection:{
		edges:"SubscriptionContractEdge",
		nodes:"SubscriptionContract",
		pageInfo:"PageInfo"
	},
	SubscriptionContractCreatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractEdge:{
		cursor:"String",
		node:"SubscriptionContract"
	},
	SubscriptionContractExpirePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractStatusUpdateUserError"
	},
	SubscriptionContractFailPayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractStatusUpdateUserError"
	},
	SubscriptionContractPausePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractStatusUpdateUserError"
	},
	SubscriptionContractProductChangePayload:{
		contract:"SubscriptionContract",
		lineUpdated:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractSetNextBillingDatePayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionContractUserError"
	},
	SubscriptionContractStatusUpdateUserError:{
		code:"SubscriptionContractStatusUpdateErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionContractUpdatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionContractUserError:{
		code:"SubscriptionContractErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionCyclePriceAdjustment:{
		adjustmentType:"SellingPlanPricingPolicyAdjustmentType",
		adjustmentValue:"SellingPlanPricingPolicyAdjustmentValue",
		afterCycle:"Int",
		computedPrice:"MoneyV2"
	},
	SubscriptionDeliveryMethod:{
		"...on SubscriptionDeliveryMethodLocalDelivery":"SubscriptionDeliveryMethodLocalDelivery",
		"...on SubscriptionDeliveryMethodPickup":"SubscriptionDeliveryMethodPickup",
		"...on SubscriptionDeliveryMethodShipping":"SubscriptionDeliveryMethodShipping"
	},
	SubscriptionDeliveryMethodLocalDelivery:{
		address:"MailingAddress",
		localDeliveryOption:"SubscriptionDeliveryMethodLocalDeliveryOption"
	},
	SubscriptionDeliveryMethodLocalDeliveryOption:{
		code:"String",
		description:"String",
		instructions:"String",
		phone:"String",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryMethodPickup:{
		pickupOption:"SubscriptionDeliveryMethodPickupOption"
	},
	SubscriptionDeliveryMethodPickupOption:{
		code:"String",
		description:"String",
		location:"Location",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryMethodShipping:{
		address:"MailingAddress",
		shippingOption:"SubscriptionDeliveryMethodShippingOption"
	},
	SubscriptionDeliveryMethodShippingOption:{
		carrierService:"DeliveryCarrierService",
		code:"String",
		description:"String",
		presentmentTitle:"String",
		title:"String"
	},
	SubscriptionDeliveryOption:{
		"...on SubscriptionLocalDeliveryOption":"SubscriptionLocalDeliveryOption",
		"...on SubscriptionPickupOption":"SubscriptionPickupOption",
		"...on SubscriptionShippingOption":"SubscriptionShippingOption"
	},
	SubscriptionDeliveryOptionResult:{
		"...on SubscriptionDeliveryOptionResultFailure":"SubscriptionDeliveryOptionResultFailure",
		"...on SubscriptionDeliveryOptionResultSuccess":"SubscriptionDeliveryOptionResultSuccess"
	},
	SubscriptionDeliveryOptionResultFailure:{
		message:"String"
	},
	SubscriptionDeliveryOptionResultSuccess:{
		deliveryOptions:"SubscriptionDeliveryOption"
	},
	SubscriptionDeliveryPolicy:{
		anchors:"SellingPlanAnchor",
		interval:"SellingPlanInterval",
		intervalCount:"Int"
	},
	SubscriptionDiscount:{
		"...on SubscriptionAppliedCodeDiscount":"SubscriptionAppliedCodeDiscount",
		"...on SubscriptionManualDiscount":"SubscriptionManualDiscount"
	},
	SubscriptionDiscountAllocation:{
		amount:"MoneyV2",
		discount:"SubscriptionDiscount"
	},
	SubscriptionDiscountConnection:{
		edges:"SubscriptionDiscountEdge",
		nodes:"SubscriptionDiscount",
		pageInfo:"PageInfo"
	},
	SubscriptionDiscountEdge:{
		cursor:"String",
		node:"SubscriptionDiscount"
	},
	SubscriptionDiscountEntitledLines:{
		all:"Boolean",
		lines:"SubscriptionLineConnection"
	},
	SubscriptionDiscountFixedAmountValue:{
		amount:"MoneyV2",
		appliesOnEachItem:"Boolean"
	},
	SubscriptionDiscountPercentageValue:{
		percentage:"Int"
	},
	SubscriptionDiscountValue:{
		"...on SubscriptionDiscountFixedAmountValue":"SubscriptionDiscountFixedAmountValue",
		"...on SubscriptionDiscountPercentageValue":"SubscriptionDiscountPercentageValue"
	},
	SubscriptionDraft:{
		billingCycle:"SubscriptionBillingCycle",
		billingPolicy:"SubscriptionBillingPolicy",
		concatenatedBillingCycles:"SubscriptionBillingCycleConnection",
		currencyCode:"CurrencyCode",
		customAttributes:"Attribute",
		customer:"Customer",
		customerPaymentMethod:"CustomerPaymentMethod",
		deliveryMethod:"SubscriptionDeliveryMethod",
		deliveryOptions:"SubscriptionDeliveryOptionResult",
		deliveryPolicy:"SubscriptionDeliveryPolicy",
		deliveryPrice:"MoneyV2",
		discounts:"SubscriptionDiscountConnection",
		discountsAdded:"SubscriptionDiscountConnection",
		discountsRemoved:"SubscriptionDiscountConnection",
		discountsUpdated:"SubscriptionDiscountConnection",
		id:"ID",
		lines:"SubscriptionLineConnection",
		linesAdded:"SubscriptionLineConnection",
		linesRemoved:"SubscriptionLineConnection",
		nextBillingDate:"DateTime",
		note:"String",
		originalContract:"SubscriptionContract",
		shippingOptions:"SubscriptionShippingOptionResult",
		status:"SubscriptionContractSubscriptionStatus"
	},
	SubscriptionDraftCommitPayload:{
		contract:"SubscriptionContract",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountAddPayload:{
		discountAdded:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountCodeApplyPayload:{
		appliedDiscount:"SubscriptionAppliedCodeDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountRemovePayload:{
		discountRemoved:"SubscriptionDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftDiscountUpdatePayload:{
		discountUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftFreeShippingDiscountAddPayload:{
		discountAdded:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftFreeShippingDiscountUpdatePayload:{
		discountUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineAddPayload:{
		draft:"SubscriptionDraft",
		lineAdded:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineRemovePayload:{
		discountsUpdated:"SubscriptionManualDiscount",
		draft:"SubscriptionDraft",
		lineRemoved:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftLineUpdatePayload:{
		draft:"SubscriptionDraft",
		lineUpdated:"SubscriptionLine",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftUpdatePayload:{
		draft:"SubscriptionDraft",
		userErrors:"SubscriptionDraftUserError"
	},
	SubscriptionDraftUserError:{
		code:"SubscriptionDraftErrorCode",
		field:"String",
		message:"String"
	},
	SubscriptionLine:{
		concatenatedOriginContract:"SubscriptionContract",
		currentPrice:"MoneyV2",
		customAttributes:"Attribute",
		discountAllocations:"SubscriptionDiscountAllocation",
		id:"ID",
		lineDiscountedPrice:"MoneyV2",
		pricingPolicy:"SubscriptionPricingPolicy",
		productId:"ID",
		quantity:"Int",
		requiresShipping:"Boolean",
		sellingPlanId:"ID",
		sellingPlanName:"String",
		sku:"String",
		taxable:"Boolean",
		title:"String",
		variantId:"ID",
		variantImage:"Image",
		variantTitle:"String"
	},
	SubscriptionLineConnection:{
		edges:"SubscriptionLineEdge",
		nodes:"SubscriptionLine",
		pageInfo:"PageInfo"
	},
	SubscriptionLineEdge:{
		cursor:"String",
		node:"SubscriptionLine"
	},
	SubscriptionLocalDeliveryOption:{
		code:"String",
		description:"String",
		phoneRequired:"Boolean",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionManualDiscount:{
		entitledLines:"SubscriptionDiscountEntitledLines",
		id:"ID",
		recurringCycleLimit:"Int",
		rejectionReason:"SubscriptionDiscountRejectionReason",
		targetType:"DiscountTargetType",
		title:"String",
		type:"DiscountType",
		usageCount:"Int",
		value:"SubscriptionDiscountValue"
	},
	SubscriptionManualDiscountConnection:{
		edges:"SubscriptionManualDiscountEdge",
		nodes:"SubscriptionManualDiscount",
		pageInfo:"PageInfo"
	},
	SubscriptionManualDiscountEdge:{
		cursor:"String",
		node:"SubscriptionManualDiscount"
	},
	SubscriptionPickupOption:{
		code:"String",
		description:"String",
		location:"Location",
		phoneRequired:"Boolean",
		pickupTime:"String",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionPricingPolicy:{
		basePrice:"MoneyV2",
		cycleDiscounts:"SubscriptionCyclePriceAdjustment"
	},
	SubscriptionShippingOption:{
		carrierService:"DeliveryCarrierService",
		code:"String",
		description:"String",
		phoneRequired:"Boolean",
		presentmentTitle:"String",
		price:"MoneyV2",
		title:"String"
	},
	SubscriptionShippingOptionResult:{
		"...on SubscriptionShippingOptionResultFailure":"SubscriptionShippingOptionResultFailure",
		"...on SubscriptionShippingOptionResultSuccess":"SubscriptionShippingOptionResultSuccess"
	},
	SubscriptionShippingOptionResultFailure:{
		message:"String"
	},
	SubscriptionShippingOptionResultSuccess:{
		shippingOptions:"SubscriptionShippingOption"
	},
	SuggestedOrderTransaction:{
		accountNumber:"String",
		amount:"Money",
		amountSet:"MoneyBag",
		formattedGateway:"String",
		gateway:"String",
		kind:"SuggestedOrderTransactionKind",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		parentTransaction:"OrderTransaction",
		paymentDetails:"PaymentDetails"
	},
	SuggestedRefund:{
		amount:"Money",
		amountSet:"MoneyBag",
		discountedSubtotalSet:"MoneyBag",
		maximumRefundable:"Money",
		maximumRefundableSet:"MoneyBag",
		refundDuties:"RefundDuty",
		refundLineItems:"RefundLineItem",
		shipping:"ShippingRefund",
		subtotal:"Money",
		subtotalSet:"MoneyBag",
		suggestedRefundMethods:"SuggestedRefundMethod",
		suggestedTransactions:"SuggestedOrderTransaction",
		totalCartDiscountAmountSet:"MoneyBag",
		totalDutiesSet:"MoneyBag",
		totalTaxSet:"MoneyBag",
		totalTaxes:"Money"
	},
	SuggestedRefundMethod:{
		"...on SuggestedStoreCreditRefund": "SuggestedStoreCreditRefund",
		amount:"MoneyBag",
		maximumRefundable:"MoneyBag"
	},
	SuggestedReturnFinancialOutcome:{
		discountedSubtotal:"MoneyBag",
		financialTransfer:"ReturnOutcomeFinancialTransfer",
		maximumRefundable:"MoneyBag",
		refundDuties:"RefundDuty",
		shipping:"ShippingRefund",
		totalAdditionalFees:"MoneyBag",
		totalCartDiscountAmount:"MoneyBag",
		totalDuties:"MoneyBag",
		totalTax:"MoneyBag"
	},
	SuggestedReturnRefund:{
		amount:"MoneyBag",
		discountedSubtotal:"MoneyBag",
		maximumRefundable:"MoneyBag",
		refundDuties:"RefundDuty",
		shipping:"ShippingRefund",
		subtotal:"MoneyBag",
		suggestedTransactions:"SuggestedOrderTransaction",
		totalCartDiscountAmount:"MoneyBag",
		totalDuties:"MoneyBag",
		totalTax:"MoneyBag"
	},
	SuggestedStoreCreditRefund:{
		amount:"MoneyBag",
		expiresAt:"DateTime",
		maximumRefundable:"MoneyBag"
	},
	TagsAddPayload:{
		node:"Node",
		userErrors:"UserError"
	},
	TagsRemovePayload:{
		node:"Node",
		userErrors:"UserError"
	},
	TaxAppConfiguration:{
		state:"TaxPartnerState"
	},
	TaxAppConfigurePayload:{
		taxAppConfiguration:"TaxAppConfiguration",
		userErrors:"TaxAppConfigureUserError"
	},
	TaxAppConfigureUserError:{
		code:"TaxAppConfigureUserErrorCode",
		field:"String",
		message:"String"
	},
	TaxLine:{
		channelLiable:"Boolean",
		price:"Money",
		priceSet:"MoneyBag",
		rate:"Float",
		ratePercentage:"Float",
		source:"String",
		title:"String"
	},
	Taxonomy:{
		categories:"TaxonomyCategoryConnection"
	},
	TaxonomyAttribute:{
		id:"ID"
	},
	TaxonomyCategory:{
		ancestorIds:"ID",
		attributes:"TaxonomyCategoryAttributeConnection",
		childrenIds:"ID",
		fullName:"String",
		id:"ID",
		isArchived:"Boolean",
		isLeaf:"Boolean",
		isRoot:"Boolean",
		level:"Int",
		name:"String",
		parentId:"ID"
	},
	TaxonomyCategoryAttribute:{
		"...on TaxonomyAttribute":"TaxonomyAttribute",
		"...on TaxonomyChoiceListAttribute":"TaxonomyChoiceListAttribute",
		"...on TaxonomyMeasurementAttribute":"TaxonomyMeasurementAttribute"
	},
	TaxonomyCategoryAttributeConnection:{
		edges:"TaxonomyCategoryAttributeEdge",
		nodes:"TaxonomyCategoryAttribute",
		pageInfo:"PageInfo"
	},
	TaxonomyCategoryAttributeEdge:{
		cursor:"String",
		node:"TaxonomyCategoryAttribute"
	},
	TaxonomyCategoryConnection:{
		edges:"TaxonomyCategoryEdge",
		nodes:"TaxonomyCategory",
		pageInfo:"PageInfo"
	},
	TaxonomyCategoryEdge:{
		cursor:"String",
		node:"TaxonomyCategory"
	},
	TaxonomyChoiceListAttribute:{
		id:"ID",
		name:"String",
		values:"TaxonomyValueConnection"
	},
	TaxonomyMeasurementAttribute:{
		id:"ID",
		name:"String",
		options:"Attribute"
	},
	TaxonomyValue:{
		id:"ID",
		name:"String"
	},
	TaxonomyValueConnection:{
		edges:"TaxonomyValueEdge",
		nodes:"TaxonomyValue",
		pageInfo:"PageInfo"
	},
	TaxonomyValueEdge:{
		cursor:"String",
		node:"TaxonomyValue"
	},
	TenderTransaction:{
		amount:"MoneyV2",
		id:"ID",
		order:"Order",
		paymentMethod:"String",
		processedAt:"DateTime",
		remoteReference:"String",
		test:"Boolean",
		transactionDetails:"TenderTransactionDetails",
		user:"StaffMember"
	},
	TenderTransactionConnection:{
		edges:"TenderTransactionEdge",
		nodes:"TenderTransaction",
		pageInfo:"PageInfo"
	},
	TenderTransactionCreditCardDetails:{
		creditCardCompany:"String",
		creditCardNumber:"String"
	},
	TenderTransactionDetails:{
		"...on TenderTransactionCreditCardDetails":"TenderTransactionCreditCardDetails"
	},
	TenderTransactionEdge:{
		cursor:"String",
		node:"TenderTransaction"
	},
	ThemeCreatePayload:{
		theme:"OnlineStoreTheme",
		userErrors:"ThemeCreateUserError"
	},
	ThemeCreateUserError:{
		code:"ThemeCreateUserErrorCode",
		field:"String",
		message:"String"
	},
	ThemeDeletePayload:{
		deletedThemeId:"ID",
		userErrors:"ThemeDeleteUserError"
	},
	ThemeDeleteUserError:{
		code:"ThemeDeleteUserErrorCode",
		field:"String",
		message:"String"
	},
	ThemeDuplicatePayload:{
		newTheme:"OnlineStoreTheme",
		userErrors:"ThemeDuplicateUserError"
	},
	ThemeDuplicateUserError:{
		code:"ThemeDuplicateUserErrorCode",
		field:"String",
		message:"String"
	},
	ThemeFilesCopyPayload:{
		copiedThemeFiles:"OnlineStoreThemeFileOperationResult",
		userErrors:"OnlineStoreThemeFilesUserErrors"
	},
	ThemeFilesDeletePayload:{
		deletedThemeFiles:"OnlineStoreThemeFileOperationResult",
		userErrors:"OnlineStoreThemeFilesUserErrors"
	},
	ThemeFilesUpsertPayload:{
		job:"Job",
		upsertedThemeFiles:"OnlineStoreThemeFileOperationResult",
		userErrors:"OnlineStoreThemeFilesUserErrors"
	},
	ThemePublishPayload:{
		theme:"OnlineStoreTheme",
		userErrors:"ThemePublishUserError"
	},
	ThemePublishUserError:{
		code:"ThemePublishUserErrorCode",
		field:"String",
		message:"String"
	},
	ThemeUpdatePayload:{
		theme:"OnlineStoreTheme",
		userErrors:"ThemeUpdateUserError"
	},
	ThemeUpdateUserError:{
		code:"ThemeUpdateUserErrorCode",
		field:"String",
		message:"String"
	},
	TipSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineItem:"LineItem",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	TransactionFee:{
		amount:"MoneyV2",
		flatFee:"MoneyV2",
		flatFeeName:"String",
		id:"ID",
		rate:"Decimal",
		rateName:"String",
		taxAmount:"MoneyV2",
		type:"String"
	},
	TransactionVoidPayload:{
		transaction:"OrderTransaction",
		userErrors:"TransactionVoidUserError"
	},
	TransactionVoidUserError:{
		code:"TransactionVoidUserErrorCode",
		field:"String",
		message:"String"
	},
	TranslatableContent:{
		digest:"String",
		key:"String",
		locale:"String",
		type:"LocalizableContentType",
		value:"String"
	},
	TranslatableResource:{
		nestedTranslatableResources:"TranslatableResourceConnection",
		resourceId:"ID",
		translatableContent:"TranslatableContent",
		translations:"Translation"
	},
	TranslatableResourceConnection:{
		edges:"TranslatableResourceEdge",
		nodes:"TranslatableResource",
		pageInfo:"PageInfo"
	},
	TranslatableResourceEdge:{
		cursor:"String",
		node:"TranslatableResource"
	},
	Translation:{
		key:"String",
		locale:"String",
		market:"Market",
		outdated:"Boolean",
		updatedAt:"DateTime",
		value:"String"
	},
	TranslationUserError:{
		code:"TranslationErrorCode",
		field:"String",
		message:"String"
	},
	TranslationsRegisterPayload:{
		translations:"Translation",
		userErrors:"TranslationUserError"
	},
	TranslationsRemovePayload:{
		translations:"Translation",
		userErrors:"TranslationUserError"
	},
	TypedAttribute:{
		key:"String",
		value:"String"
	},
	URL: `scalar.URL` as const,
	UTMParameters:{
		campaign:"String",
		content:"String",
		medium:"String",
		source:"String",
		term:"String"
	},
	UnitPriceMeasurement:{
		measuredType:"UnitPriceMeasurementMeasuredType",
		quantityUnit:"UnitPriceMeasurementMeasuredUnit",
		quantityValue:"Float",
		referenceUnit:"UnitPriceMeasurementMeasuredUnit",
		referenceValue:"Int"
	},
	UnknownSale:{
		actionType:"SaleActionType",
		id:"ID",
		lineType:"SaleLineType",
		quantity:"Int",
		taxes:"SaleTax",
		totalAmount:"MoneyBag",
		totalDiscountAmountAfterTaxes:"MoneyBag",
		totalDiscountAmountBeforeTaxes:"MoneyBag",
		totalTaxAmount:"MoneyBag"
	},
	UnsignedInt64: `scalar.UnsignedInt64` as const,
	UnverifiedReturnLineItem:{
		customerNote:"String",
		id:"ID",
		processableQuantity:"Int",
		processedQuantity:"Int",
		quantity:"Int",
		refundableQuantity:"Int",
		refundedQuantity:"Int",
		returnReason:"ReturnReason",
		returnReasonNote:"String",
		unitPrice:"MoneyV2",
		unprocessedQuantity:"Int"
	},
	UrlRedirect:{
		id:"ID",
		path:"String",
		target:"String"
	},
	UrlRedirectBulkDeleteAllPayload:{
		job:"Job",
		userErrors:"UserError"
	},
	UrlRedirectBulkDeleteByIdsPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteByIdsUserError"
	},
	UrlRedirectBulkDeleteByIdsUserError:{
		code:"UrlRedirectBulkDeleteByIdsUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectBulkDeleteBySavedSearchPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteBySavedSearchUserError"
	},
	UrlRedirectBulkDeleteBySavedSearchUserError:{
		code:"UrlRedirectBulkDeleteBySavedSearchUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectBulkDeleteBySearchPayload:{
		job:"Job",
		userErrors:"UrlRedirectBulkDeleteBySearchUserError"
	},
	UrlRedirectBulkDeleteBySearchUserError:{
		code:"UrlRedirectBulkDeleteBySearchUserErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectConnection:{
		edges:"UrlRedirectEdge",
		nodes:"UrlRedirect",
		pageInfo:"PageInfo"
	},
	UrlRedirectCreatePayload:{
		urlRedirect:"UrlRedirect",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectDeletePayload:{
		deletedUrlRedirectId:"ID",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectEdge:{
		cursor:"String",
		node:"UrlRedirect"
	},
	UrlRedirectImport:{
		count:"Int",
		createdCount:"Int",
		failedCount:"Int",
		finished:"Boolean",
		finishedAt:"DateTime",
		id:"ID",
		previewRedirects:"UrlRedirectImportPreview",
		updatedCount:"Int"
	},
	UrlRedirectImportCreatePayload:{
		urlRedirectImport:"UrlRedirectImport",
		userErrors:"UrlRedirectImportUserError"
	},
	UrlRedirectImportPreview:{
		path:"String",
		target:"String"
	},
	UrlRedirectImportSubmitPayload:{
		job:"Job",
		userErrors:"UrlRedirectImportUserError"
	},
	UrlRedirectImportUserError:{
		code:"UrlRedirectImportErrorCode",
		field:"String",
		message:"String"
	},
	UrlRedirectUpdatePayload:{
		urlRedirect:"UrlRedirect",
		userErrors:"UrlRedirectUserError"
	},
	UrlRedirectUserError:{
		code:"UrlRedirectErrorCode",
		field:"String",
		message:"String"
	},
	UserError:{
		field:"String",
		message:"String"
	},
	UtcOffset: `scalar.UtcOffset` as const,
	Validation:{
		blockOnFailure:"Boolean",
		enabled:"Boolean",
		errorHistory:"FunctionsErrorHistory",
		id:"ID",
		metafield:"Metafield",
		metafieldDefinitions:"MetafieldDefinitionConnection",
		metafields:"MetafieldConnection",
		shopifyFunction:"ShopifyFunction",
		title:"String"
	},
	ValidationConnection:{
		edges:"ValidationEdge",
		nodes:"Validation",
		pageInfo:"PageInfo"
	},
	ValidationCreatePayload:{
		userErrors:"ValidationUserError",
		validation:"Validation"
	},
	ValidationDeletePayload:{
		deletedId:"ID",
		userErrors:"ValidationUserError"
	},
	ValidationEdge:{
		cursor:"String",
		node:"Validation"
	},
	ValidationUpdatePayload:{
		userErrors:"ValidationUserError",
		validation:"Validation"
	},
	ValidationUserError:{
		code:"ValidationUserErrorCode",
		field:"String",
		message:"String"
	},
	VaultCreditCard:{
		billingAddress:"CustomerCreditCardBillingAddress",
		brand:"String",
		expired:"Boolean",
		expiryMonth:"Int",
		expiryYear:"Int",
		lastDigits:"String",
		name:"String"
	},
	VaultPaypalBillingAgreement:{
		inactive:"Boolean",
		name:"String",
		paypalAccountEmail:"String"
	},
	Vector3:{
		x:"Float",
		y:"Float",
		z:"Float"
	},
	Video:{
		alt:"String",
		createdAt:"DateTime",
		duration:"Int",
		fileErrors:"FileError",
		fileStatus:"FileStatus",
		filename:"String",
		id:"ID",
		mediaContentType:"MediaContentType",
		mediaErrors:"MediaError",
		mediaWarnings:"MediaWarning",
		originalSource:"VideoSource",
		preview:"MediaPreviewImage",
		sources:"VideoSource",
		status:"MediaStatus",
		updatedAt:"DateTime"
	},
	VideoSource:{
		fileSize:"Int",
		format:"String",
		height:"Int",
		mimeType:"String",
		url:"String",
		width:"Int"
	},
	WebPixel:{
		id:"ID",
		settings:"JSON"
	},
	WebPixelCreatePayload:{
		userErrors:"ErrorsWebPixelUserError",
		webPixel:"WebPixel"
	},
	WebPixelDeletePayload:{
		deletedWebPixelId:"ID",
		userErrors:"ErrorsWebPixelUserError"
	},
	WebPixelUpdatePayload:{
		userErrors:"ErrorsWebPixelUserError",
		webPixel:"WebPixel"
	},
	WebPresenceCreatePayload:{
		userErrors:"MarketUserError",
		webPresence:"MarketWebPresence"
	},
	WebPresenceDeletePayload:{
		deletedId:"ID",
		userErrors:"MarketUserError"
	},
	WebPresenceUpdatePayload:{
		userErrors:"MarketUserError",
		webPresence:"MarketWebPresence"
	},
	WebhookEventBridgeEndpoint:{
		arn:"ARN"
	},
	WebhookHttpEndpoint:{
		callbackUrl:"URL"
	},
	WebhookPubSubEndpoint:{
		pubSubProject:"String",
		pubSubTopic:"String"
	},
	WebhookSubscription:{
		apiVersion:"ApiVersion",
		callbackUrl:"URL",
		createdAt:"DateTime",
		endpoint:"WebhookSubscriptionEndpoint",
		filter:"String",
		format:"WebhookSubscriptionFormat",
		id:"ID",
		includeFields:"String",
		legacyResourceId:"UnsignedInt64",
		metafieldNamespaces:"String",
		metafields:"WebhookSubscriptionMetafieldIdentifier",
		topic:"WebhookSubscriptionTopic",
		updatedAt:"DateTime",
		uri:"String"
	},
	WebhookSubscriptionConnection:{
		edges:"WebhookSubscriptionEdge",
		nodes:"WebhookSubscription",
		pageInfo:"PageInfo"
	},
	WebhookSubscriptionCreatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	WebhookSubscriptionDeletePayload:{
		deletedWebhookSubscriptionId:"ID",
		userErrors:"UserError"
	},
	WebhookSubscriptionEdge:{
		cursor:"String",
		node:"WebhookSubscription"
	},
	WebhookSubscriptionEndpoint:{
		"...on WebhookEventBridgeEndpoint":"WebhookEventBridgeEndpoint",
		"...on WebhookHttpEndpoint":"WebhookHttpEndpoint",
		"...on WebhookPubSubEndpoint":"WebhookPubSubEndpoint"
	},
	WebhookSubscriptionMetafieldIdentifier:{
		key:"String",
		namespace:"String"
	},
	WebhookSubscriptionUpdatePayload:{
		userErrors:"UserError",
		webhookSubscription:"WebhookSubscription"
	},
	Weight:{
		unit:"WeightUnit",
		value:"Float"
	},
	ID: `scalar.ID` as const
}

export const Ops = {
query: "QueryRoot" as const,
	mutation: "Mutation" as const
}